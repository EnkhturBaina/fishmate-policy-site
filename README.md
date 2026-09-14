# TULUU policy site

This is the public, static website for TULUU's store-policy links:

- `/` — overview
- `/privacy.html` — Privacy Policy
- `/delete-account.html` — account deletion request information
- `/support.html` — support
- `/terms.html` — Terms of Use

## Before publishing

Search all files for `sict.etr@gmail.com` and replace it with the real support email address. Update the effective date in `privacy.html` and `terms.html` when publishing.

## Publish with GitHub Pages

1. Create a new **public** GitHub repository, for example `fishmate-policy-site`.
2. Push the contents of this folder to the repository's `main` branch.
3. On GitHub, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**, then choose `main` and `/ (root)`.
5. Save. GitHub will show the public site URL after it finishes deploying.
6. Use these store links (replace the base URL):
   - `https://YOUR_GITHUB_USERNAME.github.io/fishmate-policy-site/privacy.html`
   - `https://YOUR_GITHUB_USERNAME.github.io/fishmate-policy-site/delete-account.html`
   - `https://YOUR_GITHUB_USERNAME.github.io/fishmate-policy-site/support.html`

The repository intentionally contains only public policy content. Do not put TULUU app source code, Supabase secrets, or private documents here.
