# Bhagya Raju Nattala – Personal Portfolio

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Vercel-success?logo=vercel&logoColor=white)](https://personal-portfolio-n1le8ll2l.vercel.app/)
[![GitHub Repo](https://img.shields.io/badge/GitHub-personal--portfolio-blue?logo=github)](https://github.com/raju084/personal-portfolio)
[![Tech Stack](https://img.shields.io/badge/Stack-React%20%7C%20TypeScript%20%7C%20Tailwind-sky)](https://github.com/raju084/personal-portfolio)

> Production-grade personal portfolio of **Bhagya Raju Nattala**, Full-Stack Developer specializing in React.js, TypeScript, Django REST Framework, Node.js, PostgreSQL, Docker, and Machine Learning.

- **🌐 Live Portfolio:** [https://personal-portfolio-n1le8ll2l.vercel.app/](https://personal-portfolio-n1le8ll2l.vercel.app/)
- **📁 GitHub Repository:** [https://github.com/raju084/personal-portfolio](https://github.com/raju084/personal-portfolio)

---

## 🚀 Live Demo & Preview
- **Live URL:** [https://personal-portfolio-n1le8ll2l.vercel.app/](https://personal-portfolio-n1le8ll2l.vercel.app/)
- **Target Role:** Full-Stack Developer / Software Engineer
- **Core Stack:** React.js, TypeScript, Django REST Framework, Node.js, PostgreSQL, Docker

---

## ✨ Key Features
- **Dynamic Hero Section:** Animated multi-role text cycler, live availability status beacon, one-click copy email button with toast feedback, and quick action buttons.
- **Glassmorphic Navigation:** Sticky blurred header with scroll position tracking and active section highlights.
- **Interactive Project Showcase:** Category filter tabs (*All*, *React & Django*, *MERN Stack*, *Angular & .NET*) with expandable architectural details and GitHub links.
- **Visual Career Timeline:** Detailed enterprise internship highlights with quantifiable impact metrics.
- **Comprehensive Skills & Education:** Grouped technical competencies with proficiency badges, academic background, and professional certifications.
- **Interactive Contact Form:** Name, email, subject, and message fields with automatic mail client trigger and direct contact links.
- **Back-to-Top Navigation:** Smooth floating scroll-to-top button.
- **Full Type Safety:** Written in 100% strict TypeScript.

---

## 🛠️ Tech Stack
- **Frontend Framework:** [React 18](https://react.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Bundler & Build Tool:** [Vite 7](https://vitejs.dev/)

---

## 📂 Project Structure
```text
Portfolio/
├── public/
│   └── favicon.svg           # Custom BR logo favicon
├── src/
│   ├── components/
│   │   ├── About.tsx         # Overview, core values & capabilities
│   │   ├── BackToTop.tsx     # Smooth floating back-to-top button
│   │   ├── Contact.tsx       # Interactive message form & direct channels
│   │   ├── Experience.tsx    # Work history & filterable project cards
│   │   ├── Hero.tsx          # Dynamic role rotator & introduction
│   │   ├── Navbar.tsx        # Sticky glassmorphic navigation bar
│   │   ├── Reveal.tsx        # Intersection-observer scroll animations
│   │   ├── SectionHeading.tsx# Reusable typography heading
│   │   └── Skills.tsx        # Categorized skills, education & certifications
│   ├── data/
│   │   └── resume.ts         # Single source of truth for all content
│   ├── App.tsx               # Main layout root
│   ├── index.css             # Tailwind base & custom animations
│   └── main.tsx              # Application entry point
├── index.html                # HTML template with SEO & font imports
├── package.json              # Project scripts & dependencies
├── tailwind.config.js        # Tailwind configuration
├── tsconfig.json             # TypeScript root configuration
└── vite.config.ts            # Vite configuration
```

---

## 💻 Getting Started Locally

### 1. Install dependencies
```bash
npm install
```

### 2. Run local development server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

### 3. Verify TypeScript types
```bash
npm run typecheck
```

### 4. Build for production
```bash
npm run build
```
The optimized production bundle will be generated in the `dist/` directory.

### 5. Preview the production build
```bash
npm run preview
```

---

## 📝 How to Customize Content
All portfolio content (profile, bio, projects, experience, skills, education, contact links) is centralized in:
`src/data/resume.ts`

### Adding Your Resume PDF:
1. Place your PDF file in the `public/` directory (e.g., `public/Bhagya_Raju_Resume.pdf`).
2. Update `resumeUrl` in `src/data/resume.ts`:
   ```ts
   resumeUrl: "/Bhagya_Raju_Resume.pdf"
   ```

---

## 🚢 Deployment Guide

### Deploy to Vercel
1. Push your repository to GitHub.
2. Import the repository into [Vercel](https://vercel.com/).
3. Framework preset: **Vite**
4. Build command: `npm run build`
5. Output directory: `dist`

### Deploy to Netlify
1. Connect your repository on [Netlify](https://www.netlify.com/).
2. Build command: `npm run build`
3. Publish directory: `dist`

---

## 📄 License
This project is open source and available under the [MIT License](LICENSE).
