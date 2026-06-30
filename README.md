# Task-B Sailing Website v3

A static GitHub Pages website for **task-b.com**, focused on skipper services, sailing instruction and tailor-made group holidays.

## Upload

Upload the contents of this folder to the **root** of the GitHub repository that currently publishes Task-B.com.

Keep the included `CNAME` file. It preserves the custom domain:

```text
task-b.com
```

## Main files

- `index.html` — main website
- `styles.css` — full visual design
- `script.js` — mobile menu and email enquiry form
- `student-group-sailing/index.html` — English student-group landing page
- `training-tool/index.html` — lightweight prototype password page
- `training-tool/app/` — replace the placeholder with the existing instructional tool

## Training-tool password

The temporary default password is:

```text
taskb-demo
```

This is only a visual gate. It is **not secure authentication**. To change it:

1. Choose a new password.
2. Generate its SHA-256 hash.
3. Replace `PASSWORD_HASH` in `training-tool/access.js`.

## Images

The design works without images. Missing image files fall back to blue gradients.

Add these exact filenames later:

```text
assets/images/hero/task-b-hero-sailing.webp
assets/images/services/service-professional-skipper.webp
assets/images/services/service-sailing-instruction.webp
assets/images/services/service-sailing-holidays.webp
assets/images/about/about-bart-nieborg.webp
assets/images/general/cta-plan-your-voyage.webp
assets/images/lustrum/lustrum-sailing-group.webp
```

Recommended sizes:

- Hero: 2000 × 1125 px
- Service cards: 1200 × 900 px
- About portrait: 1200 × 1500 px
- CTA: 1800 × 900 px
- Lustrum hero: 1800 × 1200 px

Use WebP and keep each file reasonably compressed.

## Contact form

The form uses `mailto:` and opens the visitor's email application. It sends to:

```text
bart@task-b.com
```

No website backend or data storage is used.

## Existing training tool

Copy the current tool into:

```text
training-tool/app/
```

If its asset paths were written for the repository root, they may need to be adjusted. Test the tool at:

```text
https://task-b.com/training-tool/app/
```


## Homepage background video

The homepage supports a muted, looping sailing background video.

Upload:

```text
assets/video/task-b-homepage-hero.webm
assets/video/task-b-homepage-hero.mp4
```

The design falls back to the hero image or sailing gradient when the video is unavailable. See `MEDIA-GUIDE.md` for all dimensions and selection rules.

## Prototype access

The training tool uses Option A: a lightweight JavaScript password gate.

Default password:

```text
taskb-demo
```

See `training-tool/README.md` for limitations and instructions.


## v3 positioning

The public offer is limited to:

1. Professional skipper hire
2. Practical sailing instruction
3. Tailor-made sailing holidays for private groups, teams and associations

The Dutch lustrum page remains a dedicated group-holiday landing page.


## Important: folder pages

The following menu links are separate pages, not homepage scroll sections:

```text
student-group-sailing/index.html
training-tool/index.html
```

Upload the **complete extracted package**, including both folders. Uploading only the files visible in the root will cause 404 errors.

The old address `/lustrumreizen/` is retained as a redirect to `/student-group-sailing/`.
