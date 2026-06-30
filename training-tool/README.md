# Prototype password gate

This is **Option A**: a lightweight browser-side password screen for the instructional tool.

## Default password

```text
taskb-demo
```

The password itself is not written in the page. Its SHA-256 hash is stored in:

```text
training-tool/access.js
```

## Important limitation

This is not real security. GitHub Pages publishes static files publicly. A technically capable visitor can still inspect or retrieve files inside `training-tool/app/`.

Use this only while the instructional tool is a prototype and contains no private, personal, paid, or commercially sensitive data.

## Where to put the existing tool

Replace the placeholder inside:

```text
training-tool/app/
```

The password page will redirect there after successful entry.

## Changing the password

1. Choose a password.
2. Generate its SHA-256 hash.
3. Replace the value of `PASSWORD_HASH` in `training-tool/access.js`.

A browser console command that creates the hash:

```javascript
crypto.subtle.digest("SHA-256", new TextEncoder().encode("YOUR-NEW-PASSWORD"))
  .then(buffer => console.log(
    [...new Uint8Array(buffer)]
      .map(byte => byte.toString(16).padStart(2, "0"))
      .join("")
  ));
```
