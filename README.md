# AI Personal Deal Hunter

A validation-stage, static educational web application built for Indian online consumers. AI Personal Deal Hunter helps shoppers understand prices, discount structures, and buying signals to make better-informed purchasing decisions.

## Overview

- **Stage**: Validation stage consumer shopping intelligence initiative (independently developed).
- **Architecture**: 100% static client-side React 19 + TypeScript application built with Vite.
- **External Requirements**:
  - **No backend required**: Runs completely as a static frontend.
  - **No paid API keys required**: No Gemini, AI Studio, or external paid API calls.
  - **No database required**: Zero server-side state or storage dependencies.
  - **No tracking cookies or ad-tech pixels**: Completely private and zero-cost to host.

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

The application will start locally on `http://localhost:3000`.

### 3. Build for Production

```bash
npm run build
```

This compiles optimized static assets into the `dist/` directory.

### 4. Code Quality & Type Checking

```bash
npm run lint
```

## Recommended Production Deployment: Cloudflare Pages

This application is designed to be hosted for free on **Cloudflare Pages**:

- **Framework preset**: None / Vite
- **Build command**: `npm run build`
- **Build output directory**: `dist`
- **Root directory**: `/`
- **Environment variables**: None required

### Post-Deployment Checklist (After Cloudflare Assigns Your URL)

Once Cloudflare Pages deploys your application and assigns your real `https://<project-name>.pages.dev` domain (or after you attach a verified custom domain), finalize the following items:

1. **Update `SITE_URL`**:
   In `src/config/site.ts`, set `SITE_URL` to your assigned production URL:
   ```ts
   export const SITE_URL: string = "https://your-project.pages.dev";
   ```
2. **Update `public/robots.txt`**:
   Add the canonical sitemap directive:
   ```
   User-agent: *
   Allow: /

   Sitemap: https://your-project.pages.dev/sitemap.xml
   ```
3. **Generate `public/sitemap.xml`**:
   Create `public/sitemap.xml` referencing your verified production URL for all public routes (`/`, `/how-it-works`, `/research`, `/research/*`, `/about`, `/contact`, `/privacy-policy`, `/terms`, `/affiliate-disclosure`).
4. **Set Your Real Contact Email**:
   In `src/config/site.ts`, update `contactEmail` with your real administrative mailbox (e.g., `contact@yourdomain.com`).
5. **Run Build & Deploy**:
   ```bash
   npm run build
   ```
