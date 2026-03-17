# 💼 Vladyslav Plaksa's Portfolio

A modern, fully-responsive portfolio website built with **Next.js**, **TypeScript**, and **Tailwind CSS**. Features dark/light theme support, multi-language localization (EN/PL), and smooth animations.

## 🌐 Live Demo

Visit the live portfolio: [vladyslavplaksa.org](https://vladyslavplaksa.org/)

## ✨ Key Features

- 🎨 **Dark/Light Theme** — Toggle between themes with system preference detection via `next-themes`
- 🌍 **Multi-Language** — English and Polish localization with `next-intl`
- 📱 **Fully Responsive** — Mobile-first design with hamburger menu for small screens
- ⚡ **Fast Performance** — Next.js with image optimization and lazy loading
- 🔤 **TypeScript** — Full type safety across the application
- 🎯 **Smooth Scrolling** — Elegant navigation between sections
- ♿ **Accessible** — WCAG-compliant with semantic HTML
- 🚀 **SEO Optimized** — Meta tags and proper heading hierarchy
- 🐳 **Docker Ready** — Containerized development environment included

## 🛠 Tech Stack

| Category | Technologies |
|----------|--------------|
| **Framework** | Next.js ^16.1.7, React ^19.2.4 |
| **Styling** | Tailwind CSS ^3.3.0, PostCSS |
| **Language** | TypeScript ^5 |
| **Internationalization** | next-intl ^4.8.3 |
| **Theme Management** | next-themes ^0.2.1 |
| **Code Quality** | ESLint ^9, Prettier ^3.2.5 |
| **Containerization** | Docker, Docker Compose |

## 📋 Prerequisites

- **Node.js** v16 or higher
- **npm** v7 or higher
- **Docker & Docker Compose** (optional, for containerized development)

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/vladyslavPlaksa/portfolio.git
cd portfolio
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

## 📦 Available Scripts

```bash
npm run dev     # Start development server with hot reload
npm run build   # Build for production
npm start       # Start production server on port 3000
npm run lint    # Run ESLint checks
```

## 🐳 Docker Setup

```bash
docker-compose -f docker-compose.dev.yml up --build
```

The application will be available at `http://localhost:3000`.

**Required environment file** (`.env.dev`):
```env
NEXT_PUBLIC_NODE_ENV=development
```

> The entrypoint script cleans caches, installs dependencies, and starts the app in the mode matching `NEXT_PUBLIC_NODE_ENV`.

## 📂 Project Structure

```
portfolio/
├── pages/
│   ├── _app.tsx              # ThemeProvider & NextIntlClientProvider wrappers
│   ├── _document.tsx         # HTML shell, Google Fonts (Michroma), hydration suppression
│   └── index.tsx             # Home page — assembles all sections, getStaticProps for i18n
│
├── shared/
│   ├── Sections/
│   │   ├── About.tsx         # About me section
│   │   ├── Contact.tsx       # GitHub, LinkedIn, email links with theme-aware icons
│   │   ├── Footer.tsx        # Footer with dynamic year, credits
│   │   ├── HeroSection.tsx   # Large title & subtitle
│   │   ├── Projects.tsx      # Project cards (heyhomie-helm, portfolio)
│   │   ├── Skills.tsx        # Tech skill tags (static config array)
│   │   └── WorkExperience.tsx# Work history (HeyHomie, GlobalLogic, MyEventeo)
│   │
│   ├── Topnav/
│   │   ├── Topnav.tsx        # Nav with mobile hamburger menu & sticky open state
│   │   ├── ThemeSwitch.tsx   # Sun/moon toggle (desktop & mobile variants)
│   │   └── LocaleSwitch.tsx  # Globe icon — toggles EN ↔ PL
│   │
│   └── utils/
│       ├── Button.tsx        # Reusable tag/badge component
│       └── ScrollToTop.tsx   # Fixed floating scroll-to-top button
│
├── utils/
│   ├── changeLocale.ts       # Switches router locale between 'en' and 'pl'
│   └── smoothScrollTo.ts     # Calls scrollIntoView({ behavior: 'smooth' })
│
├── messages/
│   ├── en.json               # English translations
│   └── pl.json               # Polish translations
│
├── styles/
│   └── globals.css           # Tailwind directives + .link underline animation
│
├── public/
│   ├── icons/                # SVG icons (light & dark variants per icon)
│   ├── logo.png              # Light-mode logo
│   ├── logo_dark.png         # Dark-mode logo / favicon
│   └── background.svg        # Decorative gradient background (used twice, rotated)
│
├── next.config.mjs           # i18n config: locales ['pl', 'en'], defaultLocale 'en'
├── tailwind.config.ts        # Custom colors, Michroma font, darkMode: 'selector'
├── tsconfig.json             # Strict mode, path alias @/* → ./*
├── .eslintrc.js              # ESLint with TypeScript, React, a11y, import-order rules
├── .prettierrc               # 4-space indent, single quotes, 160 char width, Tailwind plugin
├── Dockerfile                # Node base image, www user, /app workdir
├── docker-compose.dev.yml    # Mounts repo to /app, exposes port 3000, loads .env.dev
└── entrypoint.sh             # Cleans build artifacts, npm install, dev or prod start
```

## 🎨 Customization

### Text Content

All copy lives in the translation files. Edit `messages/en.json` for English and `messages/pl.json` for Polish. Every section (Hero, About, Skills titles, Work, Projects, Contact) is driven by these files.

### Skills

Edit the `skillsConfig` array in `shared/Sections/Skills.tsx`:

```typescript
const skillsConfig = [
  { name: 'New Skill' },
  // ...
];
```

### Projects

Add a new entry under `"projects"` in both `messages/en.json` and `messages/pl.json`, then add a corresponding item to `projectsConfig` in `shared/Sections/Projects.tsx`.

### Colors & Fonts

The full color palette and `Michroma` font are configured in `tailwind.config.ts`. Dark mode uses the `selector` strategy (toggled via a `class` attribute on `<html>`).

## 🌐 Adding a New Language

1. Create `messages/[lang].json` with all keys matching `en.json`
2. Add the locale code to `next.config.mjs`:
```js
i18n: {
  locales: ['en', 'pl', 'de'],
  defaultLocale: 'en',
}
```
3. Update the toggle logic in `utils/changeLocale.ts` if cycling through more than two locales

## 🚀 Deployment

Vercel is the recommended host — it auto-detects Next.js and requires no additional configuration beyond pushing to GitHub.

**Environment variable for production:**
```
NEXT_PUBLIC_NODE_ENV=production
```

## 🐛 Troubleshooting

**Port 3000 in use:**
```bash
lsof -ti:3000 | xargs kill -9
```

**Dependency issues:**
```bash
rm -rf node_modules package-lock.json && npm install
```

**Docker — force clean rebuild:**
```bash
docker-compose -f docker-compose.dev.yml up --build --no-cache
```

## 📄 License

MIT License — see [LICENSE](LICENSE) for details.

## 👤 Author

**Vladyslav Plaksa**
- GitHub: [@vladyslavPlaksa](https://github.com/vladyslavPlaksa)
- LinkedIn: [Vladyslav Plaksa](https://www.linkedin.com/in/vladyslav-plaksa-071b20238/)
- Email: vladyslavplaksa@gmail.com

**Design:** Liza Tkachenko

---

*Made with ❤️ and ☕ by Vladyslav Plaksa — Last updated March 20
