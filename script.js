const header = document.querySelector("[data-header]");
const menuButton = document.querySelector("[data-menu-button]");
const menu = document.querySelector("[data-menu]");
const year = document.querySelector("[data-year]");
const contactForm = document.querySelector("[data-contact-form]");

function updateHeader() {
  if (!header) return;
  header.classList.toggle("is-scrolled", window.scrollY > 24);
}

function closeMenu() {
  if (!menuButton || !menu) return;
  menuButton.setAttribute("aria-expanded", "false");
  menu.classList.remove("is-open");
  header?.classList.remove("is-menu-open");
  document.body.classList.remove("menu-open");
}

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

menuButton?.addEventListener("click", () => {
  const open = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!open));
  menu.classList.toggle("is-open", !open);
  header?.classList.toggle("is-menu-open", !open);
  document.body.classList.toggle("menu-open", !open);
});

menu?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeMenu();
});

if (year) {
  year.textContent = new Date().getFullYear();
}

document.querySelectorAll("[data-service-link]").forEach((link) => {
  link.addEventListener("click", () => {
    const select = document.querySelector('select[name="service"]');
    if (select) select.value = link.dataset.serviceLink;
  });
});

contactForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(contactForm);
  const name = data.get("name")?.toString().trim() || "";
  const email = data.get("email")?.toString().trim() || "";
  const service = data.get("service")?.toString().trim() || "";
  const dates = data.get("dates")?.toString().trim() || "";
  const location = data.get("location")?.toString().trim() || "";
  const message = data.get("message")?.toString().trim() || "";

  const subject = `Task-B enquiry: ${service}`;
  const body = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Service: ${service}`,
    `Dates / period: ${dates || "Not specified"}`,
    `Location: ${location || "Not specified"}`,
    "",
    "Request:",
    message
  ].join("\n");

  window.location.href =
    `mailto:bart@task-b.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});


const heroVideo = document.querySelector("[data-hero-video]");

if (heroVideo) {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const saveData = navigator.connection?.saveData === true;

  if (reducedMotion || saveData) {
    heroVideo.removeAttribute("autoplay");
    heroVideo.pause();
  }

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      heroVideo.pause();
    } else if (!reducedMotion && !saveData) {
      heroVideo.play().catch(() => {});
    }
  });
}
