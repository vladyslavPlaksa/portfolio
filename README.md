# 💼 Vladyslav Plaksa's Portfolio

A modern, fully-responsive portfolio website built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**. Features dark/light theme support, multi-language localization (EN/PL), and smooth animations.

## 🌐 Live Demo

Visit the live portfolio: [Portfolio](https://vladyslavplaksa.org/)

## ✨ Key Features

- 🎨 **Dark/Light Theme** - Toggle between themes with system preference detection
- 🌍 **Multi-Language** - English and Polish localization with `next-intl`
- 📱 **Fully Responsive** - Mobile-first design that works on all devices
- ⚡ **Fast Performance** - Next.js 14 with image optimization and lazy loading
- 🔤 **TypeScript** - Full type safety across the application
- 🎯 **Smooth Scrolling** - Elegant navigation between sections
- ♿ **Accessible** - WCAG compliant with semantic HTML
- 🚀 **SEO Optimized** - Meta tags, structured data, and proper headings
- 🐳 **Docker Ready** - Containerized development environment included
- 📦 **Modern Stack** - Latest tools and best practices

## 🛠 Tech Stack

| Category | Technologies |
|----------|--------------|
| **Framework** | Next.js 14.1.0, React 18 |
| **Styling** | Tailwind CSS 3.3.0, PostCSS |
| **Language** | TypeScript 5 |
| **Internationalization** | next-intl 3.9.0 |
| **Theme Management** | next-themes 0.2.1 |
| **Code Quality** | ESLint 8, Prettier 3.2.5 |
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
# Development
npm run dev         # Start development server with hot reload

# Production
npm run build       # Build for production
npm start          # Start production server

# Code Quality
npm run lint       # Run ESLint checks
```

## 🐳 Docker Setup

### Development with Docker

```bash
docker-compose -f docker-compose.dev.yml up --build
```

The application will be available at `http://localhost:3000`

**Environment File** (`.env.dev`):
```env
NEXT_PUBLIC_NODE_ENV=development
```

## 📂 Project Structure

```
portfolio/
├── pages/
│   ├── _app.tsx                    # App wrapper with Theme & i18n providers
│   ├── _document.tsx               # Document with global styles
│   ├── index.tsx                   # Home page with all sections
│   └── api/
│       └── hello.ts                # Example API route
│
├── shared/
│   ├── Sections/
│   │   ├── About.tsx              # About me section
│   │   ├── Contact.tsx            # Contact links section
│   │   ├── Footer.tsx             # Footer with credits
│   │   ├── HeroSection.tsx        # Hero with title & subtitle
│   │   ├── Projects.tsx           # Projects showcase (Phanex, GraphCML)
│   │   ├── Skills.tsx             # Technical skills list
│   │   └── WorkExperience.tsx     # Work history (HeyHomie, MyEventeo)
│   │
│   ├── Topnav/
│   │   ├── Topnav.tsx             # Main navigation with mobile menu
│   │   ├── ThemeSwitch.tsx        # Dark/light mode toggle
│   │   └── LocaleSwitch.tsx       # Language switcher
│   │
│   └── utils/
│       ├── Button.tsx             # Reusable button component
│       └── ScrollToTop.tsx        # Scroll to top floating button
│
├── utils/
│   ├── changeLocale.ts            # Language switching logic
│   └── smoothScrollTo.ts          # Smooth scroll navigation
│
├── styles/
│   └── globals.css                # Global Tailwind & custom styles
│
├── public/
│   ├── icons/                     # SVG icons (light & dark variants)
│   │   ├── github.svg / github_dark.svg
│   │   ├── linkedin.svg / linkedin_dark.svg
│   │   ├── envelope.svg / envelope_dark.svg
│   │   ├── globe.svg / globe_dark.svg
│   │   ├── sun.svg / sun_dark.svg
│   │   ├── moon.svg / moon_dark.svg
│   │   ├── menu.svg / menu_dark.svg
│   │   ├── scroll_to_top.svg / scroll_to_top_dark.svg
│   │   └── link.svg / link_dark.svg
│   │
│   └── background.svg             # Animated gradient background
│
├── messages/
│   ├── en.json                    # English translations
│   └── pl.json                    # Polish translations
│
├── Configuration Files
│   ├── next.config.mjs            # Next.js config with i18n
│   ├── tailwind.config.ts         # Tailwind theme customization
│   ├── tsconfig.json              # TypeScript configuration
│   ├── .eslintrc.js               # ESLint rules
│   ├── .prettierrc                # Code formatting rules
│   ├── postcss.config.js          # PostCSS configuration
│   └── package.json               # Dependencies & scripts
│
├── Docker Files
│   ├── Dockerfile                 # Multi-stage Docker build
│   └── docker-compose.dev.yml     # Development Docker Compose
│
├── README.md                      # This file
├── LICENSE                        # MIT License
└── .gitignore                     # Git ignore rules
```

## 🎨 Customization Guide

### Updating Content

All text content is managed through translation files for easy localization:

**Edit `messages/en.json` for English content:**
```json
{
  "Hero": {
    "title": "Hello",
    "subtitle": "I'm Vladyslav and I'm a software developer"
  }
}
```

**Edit `messages/pl.json` for Polish content**

### Adding Projects

Update the `Projects` section in `messages/en.json` and `messages/pl.json`:

```json
{
  "Projects": {
    "projects": {
      "projectName": {
        "title": "Project Title",
        "description": "Project description",
        "technologies": {
          "1": "Tech1",
          "2": "Tech2"
        },
        "links": {
          "github": "https://github.com/...",
          "site": "https://example.com"
        }
      }
    }
  }
}
```

### Updating Skills

Edit the `skillsConfig` array in `shared/Sections/Skills.tsx`:

```typescript
const skillsConfig = [
  { name: 'New Skill' },
  // ... more skills
];
```

### Customizing Colors

Modify the color palette in `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    100: '#F2F2F2',  // Light background
    900: '#1F1F1F',  // Dark background
  },
  secondary: {
    green: '#09C627',
    pink: '#BF1DC2',
  },
  tertiary: '#0F0905',
}
```

### Changing Fonts

1. Update font imports in `pages/_document.tsx`:
```typescript
<link href='https://fonts.googleapis.com/css2?family=YourFont&display=swap' rel='stylesheet' />
```

2. Update `tailwind.config.ts`:
```typescript
fontFamily: {
  yourFont: ['Your Font', 'Fallback'],
}
```

3. Use in components:
```typescript
<h1 className='font-yourFont'>Text</h1>
```

## 🌐 Multi-Language Support

The project uses `next-intl` for internationalization. To add a new language:

1. Create `messages/[lang].json` with all translations
2. Update `next.config.mjs`:
```typescript
i18n: {
  locales: ['en', 'pl', 'de'],  // Add new language code
  defaultLocale: 'en',
}
```

3. Update `shared/Topnav/LocaleSwitch.tsx` if needed

## 🎯 Features Deep Dive

### Dark/Light Theme
- Powered by `next-themes`
- Persists user preference in localStorage
- Respects system preference on first visit
- Uses CSS selector strategy for dark mode

### Smooth Scrolling
Navigation links use the `smoothScroll` utility for elegant scroll behavior:
```typescript
const smoothScroll = (target: string, event: React.MouseEvent) => {
  event.preventDefault();
  document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' });
};
```

### Responsive Design
- Mobile-first approach
- Breakpoints: `sm` (640px), `md` (768px), `lg` (1024px)
- Images use Next.js `Image` component with responsive sizes

### Type Safety
Full TypeScript configuration ensures type safety:
- Strict mode enabled
- No unused variables or parameters
- Proper module resolution

## 📱 Browser Support

| Browser | Version |
|---------|---------|
| Chrome | Latest |
| Firefox | Latest |
| Safari | Latest |
| Edge | Latest |
| Mobile (iOS Safari, Chrome) | Latest |

## 🚀 Deployment

### Vercel (Recommended)

Vercel is the optimal platform for Next.js applications:

1. Push your code to GitHub
2. Import repository at [vercel.com](https://vercel.com)
3. Vercel auto-detects Next.js configuration
4. Deploy with one click

**Environment Variables** (if needed):
```
NEXT_PUBLIC_NODE_ENV=production
```

## 🔧 Code Quality

### ESLint Configuration
The project uses strict ESLint rules for:
- TypeScript best practices
- React hooks validation
- Proper import ordering
- Accessibility compliance

Check `.eslintrc.js` for detailed rules.

### Prettier Formatting
Automatic code formatting with:
- 4-space indentation
- Single quotes
- 160 character line width
- Tailwind CSS class sorting

Run formatting:
```bash
npm run lint
```

## 📊 Performance Optimizations

- **Image Optimization** - Next.js Image component with responsive sizes
- **Code Splitting** - Automatic with Next.js
- **CSS-in-JS** - Tailwind CSS for minimal bundle
- **Font Loading** - Google Fonts with `display=swap`
- **Lazy Loading** - Components load on demand

## 🐛 Troubleshooting

### Port 3000 Already in Use
```bash
# Find and kill the process
lsof -ti:3000 | xargs kill -9

# Or use a different port
npm run dev -- -p 3001
```

### Dependencies Issues
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Docker Issues
```bash
# Rebuild with no cache
docker-compose -f docker-compose.dev.yml up --build --no-cache
```

### Theme Not Persisting
Clear browser cache and localStorage, then refresh the page.

### Translations Not Showing
Ensure the locale folder exists in your router and JSON is valid.

## 📈 Future Enhancements

- [ ] Blog section with dynamic posts
- [ ] Contact form with email integration
- [ ] Analytics integration
- [ ] Testimonials section
- [ ] Case studies for projects
- [ ] Email newsletter signup
- [ ] Social media feeds
- [ ] Performance metrics dashboard

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```
MIT License
Copyright (c) 2026 Vladyslav Plaksa
```

## 👤 Author

**Vladyslav Plaksa**
- 💻 GitHub: [@vladyslavPlaksa](https://github.com/vladyslavPlaksa)
- 🔗 LinkedIn: [Vladyslav Plaksa](https://www.linkedin.com/in/vladyslav-plaksa-071b20238/)
- 📧 Email: vladyslavplaksa@gmail.com

**Design**
- 🎨 Designer: Liza Tkachenko

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [TypeScript](https://www.typescriptlang.org/) - Typed JavaScript
- [next-intl](https://next-intl-docs.vercel.app/) - Internationalization
- [next-themes](https://github.com/pacocoursey/next-themes) - Theme management
- [Vercel](https://vercel.com) - Hosting & deployment

## 📞 Support & Feedback

Found a bug or have a suggestion? Open an issue on [GitHub Issues](https://github.com/vladyslavPlaksa/portfolio/issues).

---

**Made with ❤️ and ☕ by Vladyslav Plaksa**

Last Updated: March 2026
