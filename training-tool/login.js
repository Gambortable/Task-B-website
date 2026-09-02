(() => {
  const AUTH_KEY = "taskb-training-auth";
  // SHA-256 for the current prototype password. See README-UPLOAD.txt to change it.
  const PASSWORD_SHA256 = "0567344ccb88cd982c9fc057746b6dab8de9e49d941e20dd13f1dcc9433f9b2d";

  if (sessionStorage.getItem(AUTH_KEY) === "1") {
    window.location.replace("app/");
    return;
  }

  const form = document.getElementById("accessForm");
  const input = document.getElementById("password");
  const error = document.getElementById("accessError");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    error.textContent = "";
    const password = input.value;
    const hash = await sha256(password);
    if (hash === PASSWORD_SHA256) {
      sessionStorage.setItem(AUTH_KEY, "1");
      window.location.assign("app/");
      return;
    }
    input.select();
    error.textContent = "That password is not correct.";
  });

  async function sha256(value) {
    const data = new TextEncoder().encode(value);
    const digest = await crypto.subtle.digest("SHA-256", data);
    return [...new Uint8Array(digest)].map(byte => byte.toString(16).padStart(2, "0")).join("");
  }
})();
