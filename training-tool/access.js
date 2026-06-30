const PASSWORD_HASH = "6b1c1b052b59bdb8168bc4ccf4aa43dda2653199614c04e853b409bbcf00e873";
const form = document.querySelector("[data-access-form]");
const message = document.querySelector("[data-access-message]");

async function sha256(value) {
  const bytes = new TextEncoder().encode(value);
  const digest = await crypto.subtle.digest("SHA-256", bytes);
  return [...new Uint8Array(digest)]
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

form?.addEventListener("submit", async (event) => {
  event.preventDefault();
  const password = new FormData(form).get("password")?.toString() || "";
  const hash = await sha256(password);

  if (hash === PASSWORD_HASH) {
    sessionStorage.setItem("taskb-training-access", "granted");
    window.location.href = "app/";
    return;
  }

  message.textContent = "Incorrect password.";
});

if (sessionStorage.getItem("taskb-training-access") === "granted") {
  window.location.href = "app/";
}
