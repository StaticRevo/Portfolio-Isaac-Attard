# Isaac Attard Portfolio

A premium portfolio website for Isaac Attard, built with Next.js, TypeScript, and Tailwind CSS.

## Features

- Dark and light mode toggle
- Hero, about, experience, education, skills, projects, certifications, and contact sections
- Responsive layout for mobile, tablet, and desktop
- Filterable project showcase
- Scroll progress and motion effects
- SEO metadata and sitemap placeholders for production deployment

## Getting started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the local development server:

   ```bash
   npm run dev
   ```

3. Open <http://localhost:3000>

## Customising content

Update the structured data in `data/portfolio.ts` to revise:

- personal details
- work history
- education
- skills
- projects
- certifications
- social links

Replace the placeholder profile image in `public/profile-placeholder.svg` and the placeholder project assets in `public/`.

## Downloadable CV

The `Download CV` button points to `public/isaac-attard-cv.txt` as a placeholder. Replace it with your final PDF or HTML document before launch.

## Deployment to Vercel

1. Push the project to GitHub.
2. In Vercel, import the repository.
3. Use the default Next.js build settings.
4. Set the production domain in `app/layout.tsx`, `app/sitemap.ts`, and `app/robots.ts` before publishing.

## Notes

- Social and project URLs are intentionally left as placeholders and should be replaced with real links before production release.
- The contact form validates client-side input and is ready to be connected to a service such as Formspree, Resend, or a custom API route.
