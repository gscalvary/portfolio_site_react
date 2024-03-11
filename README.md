This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Developing

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load a Google Font.

## Deploying

This is a static, single page application (SPA) therefore we can use NEXT.js to simply output html, javascript, css and images which can then be hosted using a web service of our choice. In the case of this application I'm using AWS S3 to host and serve the site's artifacts.

1. Uncomment the output: 'export' and image configuration lines in next.config.mjs
2. Generate the site's artifacts using the following command:
```bash
npm run build
```
3. Move the /out directory's content to your hosting solution.