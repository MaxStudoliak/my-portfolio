# Max Studoliak - Portfolio

Modern portfolio website built with Next.js 15, TypeScript, and Material-UI v7.

**Developer:** Max Studoliak
**Role:** Frontend Developer
**Email:** studolakmaksim8@gmail.com

## Features

- Next.js 15 with App Router
- TypeScript for type safety
- Material-UI v7 for beautiful components
- Dark/Light theme toggle
- Responsive design
- Smooth scrolling navigation
- Contact form
- Project showcase

## Getting Started

### Install Dependencies

```bash
yarn install
```

### Run Development Server

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
yarn build
yarn start
```

## Project Structure

```
my-portfolio/
├── app/
│   ├── layout.tsx          # Root layout with ThemeRegistry
│   └── page.tsx            # Home page with all sections
├── components/
│   ├── Header/             # Navigation header with theme toggle
│   ├── Hero/               # Hero section
│   ├── About/              # About section
│   ├── Skills/             # Skills showcase
│   ├── Projects/           # Projects gallery
│   ├── Contact/            # Contact form
│   ├── Footer/             # Footer
│   └── ThemeRegistry.tsx   # MUI theme provider with dark mode
└── theme/
    └── index.ts            # Theme configuration
```

## Customization

### Update Personal Information

1. **Hero Section** (`components/Hero/Hero.tsx`):
   - Change name, title, and description
   - Update social media links

2. **About Section** (`components/About/About.tsx`):
   - Customize your bio
   - Update feature descriptions

3. **Skills Section** (`components/Skills/Skills.tsx`):
   - Add your skills and technologies

4. **Projects Section** (`components/Projects/Projects.tsx`):
   - Add your projects with descriptions
   - Update GitHub and demo links

5. **Contact Section** (`components/Contact/Contact.tsx`):
   - Update email, phone, and location
   - Implement form submission logic

6. **Footer** (`components/Footer/Footer.tsx`):
   - Update social links
   - Change copyright information

### Theme Customization

Edit `theme/index.ts` to customize colors, typography, and other theme settings.

## Technologies Used

- Next.js 15
- React 19
- TypeScript
- Material-UI v7
- Emotion (CSS-in-JS)

## License

MIT
