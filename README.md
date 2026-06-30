# Task-B professional sailing-services website

Static, responsive website for standard shared hosting. No framework or build step is required.

## Upload
Upload the complete contents of this folder to the web root for `task-b.com`. Keep the folder names and relative paths unchanged.

## Main structure
- `index.html` — homepage
- `about.html`
- `qualifications.html`
- `contact.html`
- `services/` — four service pages
- `css/styles.css` — complete visual system
- `js/site.js` — mobile navigation, image fallback and enquiry email preparation
- `assets/images/` — your local photography and temporary placeholders
- `assets/fonts/` — optional self-hosted fonts
- `assets/icons/` — favicon

## Images
Read `assets/images/README.md`. Add the listed WebP files from your own collection. Until then, the website uses neutral Task-B placeholders. No external photography is loaded.

## Contact form
The website is fully static. Submitting the form opens the visitor's email application with a prepared message to `bart@task-b.com`. This avoids collecting data or relying on a third-party form provider. A server-side form endpoint can be added later.

## Font confirmation
The earlier exact font names still need to be confirmed. Change only `--font-display` and `--font-body` near the top of `css/styles.css`, or add local `@font-face` rules.
