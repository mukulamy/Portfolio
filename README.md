# Mukul Yadav — Portfolio

## Getting Started

**Requirements:** Node.js 18 or later — download from https://nodejs.org

### Install dependencies
```
npm install
```

### Run locally
```
npm run dev
```
Then open http://localhost:5173 in your browser.

### Build for production
```
npm run build
```
Output goes to the `dist/` folder. You can deploy that folder to any static host (Netlify, Vercel, GitHub Pages, etc.).

### Preview the production build locally
```
npm run preview
```

## Add your photo

Open `src/components/sections/Hero.tsx` and find the profile image section (look for `data-testid="img-profile-placeholder"`). Replace the placeholder `<div>` with:

```tsx
<img
  src="/your-photo.jpg"
  alt="Mukul Yadav"
  className="absolute inset-0 w-full h-full object-cover object-center"
/>
```

Put your image file in the `public/` folder.
