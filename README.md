# Aachen Blockchain Club Website

Official website built with Next.js for the Aachen Blockchain Club e.V.

## Run Local Development

Copy the repo then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Submit a PR or merge directly to main. This will trigger the GitHub Action and auto-deploy the new version of the website.

## Edit Content

### Team Members

To add or edit team members, modify: [`src/data/team.ts`](src/data/team.ts)

Profile pictures should be square (620x620px) and placed in: [`public/images/profiles/`](public/images/profiles/)

*Tip: Use bulkresizephotos.com for batch resizing*

### Milestones

To add milestones, edit: [`src/data/milestones.ts`](src/data/milestones.ts)

Milestone photos should be placed in: [`public/images/milestones/`](public/images/milestones/)

### Landing Page Activities

To edit the pictures in the three main sections (Learn, Grow, Connect), modify: [`src/data/landing.ts`](src/data/landing.ts)

Activity pictures are stored in: [`public/images/landing_page/`](public/images/landing_page/)

### Landing Page Video

To replace the landing page video, add your video file to: [`public/video/`](public/video/)

The video should be named `landing.mp4` and have dimensions of **1920x540 pixels** to maintain the correct aspect ratio.

*Tip: Use CapCut for resizing videos*

### Events Page Calendar

To replace the whatsapp qr code, add your qr code image file to: [`public/images/`](public/images/)

The image is referenced as `whatsapp.svg` in [`src/app/events/page.tsx`](src/app/events/page.tsx) and will be displayed in the calendar section.

*Tip: Use qrcode-monkey.com to generate QR codes with custom logo* 

