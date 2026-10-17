# DEGEE / PC HUB policy site

This is the public, static website for DEGEE's store-policy links:

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

The repository intentionally contains only public policy content. Do not put app source code, Supabase secrets, or private documents here.

## PC HUB — 2026-10-16

Existing DEGEE root URLs are preserved. PC HUB lives in its own subdirectory on the same GitHub Pages project:

- https://enkhturbaina.github.io/fishmate-policy-site/pc-hub/
- https://enkhturbaina.github.io/fishmate-policy-site/pc-hub/privacy.html
- https://enkhturbaina.github.io/fishmate-policy-site/pc-hub/delete-account.html
- https://enkhturbaina.github.io/fishmate-policy-site/pc-hub/support.html
- https://enkhturbaina.github.io/fishmate-policy-site/pc-hub/terms.html

PC HUB's approved public contact is `pchubmn@gmail.com`. DEGEE retains its existing contact. The existing repository deploys `master`, not the illustrative `main` instructions above; push to the current configured branch without changing Pages settings.

PC HUB's deletion page calls its own Supabase `phone-auth` and `account-delete` Edge Functions over HTTPS. It holds the access token only in the current submit operation; no localStorage/sessionStorage/cookies or analytics SDK. Password reauthentication and target identity are checked on the server. Successful deletion removes Auth and cascading app data immediately; R2 cleanup is separate, with a private durable retry job if unavailable. Device/edge cache and provider backup/log lifetimes are not instant deletion guarantees.

The static site is not a server: do not add service-role keys, verify.mn/R2 secrets or deletion capability tokens. App deletion and backend deployment must be verified before publishing text that describes those flows. The PC HUB native route is Profile → Settings → Delete Account. A last system administrator must transfer the role first.

## PC HUB privacy clarification — 2026-10-17

PC HUB's privacy, support and account-deletion pages now describe private feedback/admin replies and automatic technical error reporting. The app implementation is in `D:\pc-hub-mn` (README section 18.13); Supabase migration `20261017000018` is applied. The client release itself has not been published: support instructions keep an email fallback for versions without the feedback menu. No EAS Update or app build is part of this website change.

Feedback includes user-entered text, the owner's account ID, status, timestamps and the latest admin reply. Closing a request does not delete it; deleting its owner cascades the request and reply. In-app notification text contains no copy of that private content. Automatic diagnostics use fixed area/code, platform, native version/build, time and aggregated counts; no raw exception message/stack or user-entered text is collected by that reporter. Authentication and a private owner/day submission limit still associate technical processing with the account; do not describe the whole flow as anonymous. Admin resolution records contain the admin's nullable ID.

The admin list shows the last 30 days. Older diagnostic groups are pruned in bounded batches when a new report arrives, while a user's older submission-limit records are pruned when that user reports again. This is not an exact 30-day deletion guarantee or a scheduled cleanup service. Account deletion removes owner limit records, while aggregate technical counts can remain until pruning. The website's deletion form and backend calls are unchanged. DEGEE root pages and contact information must remain unchanged.
