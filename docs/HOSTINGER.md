# Host BaleProof on regular Hostinger PHP/HTML hosting

BaleProof is a prebuilt React/Vite static frontend. Node is needed only for building, not on the hosting server. Select **Custom PHP/HTML website**, not Node.js Web App. No PHP conversion is needed. Forms/auth/data remain concept previews; hosting does not add a backend.

## Branches

- `main`: editable source, dependencies and build workflow.
- `hostinger`: publish-ready `index.html`, `.htaccess`, assets, fonts and images at branch root. Connect this branch to Hostinger.
- GitHub Actions rebuilds `hostinger` after pushes to `main`. Check the Actions tab before deploying an update in Hostinger.

## Connect hosting and domain

1. In hPanel, open Websites and choose the existing web-hosting plan, then **Create/Add website → Custom PHP/HTML website**. Wording varies by dashboard version.
2. Use the domain already purchased in your Hostinger account. If the website already exists on that plan, open its Dashboard instead of creating another website.
3. Check that the domain is connected/pointed to this hosting plan in hPanel. Use the DNS records or nameservers shown for your actual account; do not guess the hosting IP or replace mail records. Purchasing a domain alone does not provide hosting.
4. You need an available regular website allowance. This avoids the Node.js app allowance, but cannot bypass a plan's total website, storage or other limits.

Official guide: https://www.hostinger.com/support/1583214-how-to-add-a-website-in-hostinger/

## Connect GitHub (recommended)

1. Open this website's **Dashboard → Advanced → Git**.
2. If offered **Connect with GitHub**, authorize the BaleProof repository and select it.
3. Choose repository `PrajaktaAdlytica/BaleProof`, branch **`hostinger`**, destination/root directory **`public_html`**.
4. Deploy. This branch already contains compiled files; no build command or Node runtime is required on Hostinger.
5. On older hPanel forms, enter repository URL `https://github.com/PrajaktaAdlytica/BaleProof.git`, branch `hostinger`, and leave **Directory blank** to deploy at `public_html`. This older form requires an empty destination for the initial installation. Back up any existing site before replacing its files. Do not delete another site's files.
6. If the repository is later made private, follow the authentication method shown in hPanel. Current OAuth connection does not require an SSH key; the legacy form may require a Hostinger-generated SSH deploy key.
7. After future source changes, wait for GitHub Actions to update `hostinger`, then click Deploy in hPanel. If hPanel offers automatic deployment, enable it for `hostinger` using its displayed instructions. A GitHub push alone does not guarantee Hostinger has deployed.

**Do not connect `main`:** generic PHP/HTML Git deployment pulls files as-is and does not run npm. Do not set the destination to `dist/client`; that is the local build directory, not the website's web root.

Official guides:
- https://www.hostinger.com/support/1583302-how-to-deploy-a-git-repository-in-hostinger/
- https://docs.hostinger.com/websites/git

## Upload ZIP alternative (no Git feature required)

1. Run `npm ci` and `npm run package:hostinger` on a build machine. This creates `artifacts/BaleProof-Hostinger.zip`.
2. In hPanel File Manager, open this website's `public_html` and back up any existing files.
3. Upload the ZIP and extract it directly into `public_html`.
4. Confirm `public_html/index.html` and `public_html/.htaccess` exist, alongside `assets/`, `images/`, and `brand/`. Avoid an extra `dist`, `client`, or `BaleProof` directory above them. Enable hidden-file display if needed to see `.htaccess`.
5. Remove the uploaded ZIP after extracting. Resolve any old placeholder index file so the supplied `index.html` is served.

Official guide: https://www.hostinger.com/support/1869114-how-to-upload-backups-with-file-manager-in-hostinger/

## Final checks

- Use hPanel's SSL setup for the connected domain; verify HTTPS and the preferred www/non-www address.
- Test the homepage and refresh `/products/material-proof`, `/pricing`, `/request-evaluation` and `/demo/cases/DEMO-C004`. `.htaccess` supplies the SPA fallback for direct links.
- Confirm logo, favicon, images, fonts and intro load. Test mobile navigation and the static reduced-motion fallback.
- If the homepage works but nested routes return 404, check that `.htaccess` was included at the web root and is being honored.
- If GitHub Actions fails, keep the last deployed branch; inspect the workflow log before trying another deployment.
- This repository does not claim functioning sign-in, email delivery, customer records or production integrations. These require separate backend work.
