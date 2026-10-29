# Porter Olson — academic portfolio

A static academic website built with Astro 7, Tailwind CSS 4, and TypeScript. Includes Home, About, Research, Publications, Experience (research, teaching, and service), CV, Contact, and a custom 404 page.

## Run locally

Use Node.js 24 LTS and npm.

```sh
npm ci
npm run dev
```

Open the URL printed by Astro, normally <http://127.0.0.1:4321/porter_olson_website/>.

```sh
npm run build    # Astro type check and production build
npm run preview  # Serve the production build locally
```

## Update your content

Edit **`src/data/profile.ts`**. It holds your bio, contact links, interests, education, research projects, scholarly work, experience, skills, awards, and optional news updates. Pages use the same data, so edits also update the web CV. Empty optional sections are hidden. Experience categories are `Research`, `Teaching`, and `Service`.

Put downloadable files in `public/files/` and images in `public/images/`. Set `profile.cvFile` to `files/porter-olson-cv.pdf` when an updated CV is ready. The current web CV can also be printed or saved as a PDF using its button. Leave optional social links blank until you have them. All internal links and files use the configured base path.

Content in this first version comes from the supplied January 2026 CV and ESG paper, plus the current NYU Stern Finance role and email supplied directly. The older PDF CV is intentionally not published as the current CV. Exact end dates for the Eastmond and Silver Fund roles should be updated when available; the site currently shows their start dates. Confirm degree details and the Winter 2026 teaching appointment before sharing the site with admissions committees. There are no invented publications, awards, research results, or service roles.

## GitHub Pages: first deployment

Repository: <https://github.com/porterolson/porter_olson_website>

1. Open **Settings → Pages** in the repository.
2. Under **Build and deployment**, set **Source → GitHub Actions**.
3. Push to `main`. The included `.github/workflows/deploy.yml` installs from the committed lockfile, checks Astro types, builds `dist/`, and deploys it to Pages.
4. Open **Actions → Deploy to GitHub Pages** and wait for both jobs to finish. If necessary, select **Run workflow → main** after changing the Pages source.
5. The default address is **https://porterolson.github.io/porter_olson_website/**. Settings → Pages shows the authoritative published URL.

The repository needs to be public for GitHub Pages on GitHub Free. Private repository Pages availability depends on your GitHub plan. Future pushes to `main` automatically update the site.

The Astro config already uses `site: 'https://porterolson.github.io'` and `base: '/porter_olson_website'`. Do not upload the raw `src/` directory as a Pages branch; the workflow publishes the built `dist/` output.

## Your own domain

GitHub provides the default `github.io` address and hosting. Register your own domain separately with a domain registrar, then connect it to Pages. The following uses `example.com` as a placeholder, not a domain already owned or registered.

1. Register a domain you want to keep for your academic career.
2. In your **GitHub account Settings → Pages**, verify ownership of that domain using the TXT record GitHub supplies.
3. In the **repository Settings → Pages → Custom domain**, enter `example.com` and save it **before** configuring the routing records at your DNS provider.
4. At your domain’s DNS provider, add these records:

   | Type | Host / Name | Target / Value |
   | --- | --- | --- |
   | A | @ | 185.199.108.153 |
   | A | @ | 185.199.109.153 |
   | A | @ | 185.199.110.153 |
   | A | @ | 185.199.111.153 |
   | CNAME | www | porterolson.github.io |

   Use the DNS provider’s equivalent of `@` for the root domain. The `www` target has no `https://` or repository path. Remove conflicting root or `www` routing records; preserve unrelated email and verification records.

5. Update `astro.config.mjs`:

   ```js
   site: 'https://example.com',
   base: '/',
   ```

6. Commit and push the config change. The link helper automatically adjusts internal links, fonts, images, and PDF paths for the root domain.
7. Wait for the DNS check and certificate to complete, then enable **Enforce HTTPS** in repository Settings → Pages. DNS and certificate provisioning can take up to 24 hours.

This project deploys through GitHub Actions. GitHub manages the custom domain in repository settings; a `public/CNAME` file is not required for this workflow.

If you prefer a shorter free URL, a repository named `porterolson.github.io` can serve `https://porterolson.github.io/`. That would be a separate repository or a rename, and would require changing `base` to `/`.

Official references (checked October 29, 2026):

- [Astro deployment to GitHub Pages](https://docs.astro.build/en/guides/deploy/github/)
- [GitHub custom domain configuration](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)
- [GitHub Pages custom domain overview](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/about-custom-domains-and-github-pages)

## Design and accessibility

Monochrome matte surfaces, native CSS spheres, light and dark themes, self-hosted Manrope fonts, subtle transitions, keyboard navigation, a skip link, semantic page structure, reduced-motion support, and a responsive mobile menu. No analytics, tracking, remote fonts, or backend are required.
