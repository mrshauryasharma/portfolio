# 🚀 Shaurya Sharma – Portfolio Website

A premium, modern portfolio website built with Next.js 14, TypeScript, Tailwind CSS, Framer Motion, Three.js, and GSAP.

## ✨ Features

- **Dark / Light Mode** toggle
- **3D Animated Background** with React Three Fiber
- **Smooth Scrolling** with Lenis
- **Typing Animation** in Hero section
- **Particle Background** effect
- **Custom Cursor** with glow effect
- **Scroll Progress Bar**
- **Animated Sections** with Framer Motion
- **Skill Bars** with progress animations
- **Timeline** for Experience & Education
- **3D Project Cards** with hover effects
- **Services Grid** with all service types
- **Animated Stats** counters
- **Testimonials** section
- **Contact Form** with mailto integration
- **Fully Responsive** – Mobile, Tablet, Laptop, Desktop
- **SEO Optimized** with Open Graph metadata

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion + GSAP
- **3D:** Three.js + React Three Fiber + Drei
- **Smooth Scroll:** Lenis
- **Icons:** React Icons + Lucide React
- **Theme:** next-themes

## 🚀 Getting Started (Local Development)

```bash
# 1. Clone the repository
git clone https://github.com/mrshauryasharma/portfolio.git
cd portfolio

# 2. Install dependencies
npm install

# 3. Run development server
npm run dev

# 4. Open in browser
# http://localhost:3000
```

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🌐 Deploy on Vercel (Recommended)

### Method 1: GitHub + Vercel (Easiest)

1. Push this code to your GitHub repository
2. Go to [vercel.com](https://vercel.com)
3. Click **"New Project"**
4. Import your GitHub repository
5. Click **"Deploy"** — Vercel auto-detects Next.js settings
6. Your site is live! 🎉

### Method 2: Vercel CLI

```bash
npm i -g vercel
vercel
```

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page
│   └── globals.css         # Global styles
├── components/
│   ├── ui/
│   │   ├── Navbar.tsx
│   │   ├── CustomCursor.tsx
│   │   ├── ScrollProgress.tsx
│   │   ├── ScrollToTop.tsx
│   │   ├── ParticleBackground.tsx
│   │   ├── LenisProvider.tsx
│   │   └── ThemeProvider.tsx
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── SkillsSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── WhyChooseMeSection.tsx
│   │   ├── EducationSection.tsx
│   │   ├── StatsSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   ├── ContactSection.tsx
│   │   └── Footer.tsx
│   └── 3d/
│       └── HeroCanvas.tsx
```

## 🎨 Customization

To update your personal info, edit the data in each section component:

- **Contact details:** `ContactSection.tsx`, `Footer.tsx`
- **Projects:** `ProjectsSection.tsx`
- **Skills:** `SkillsSection.tsx`
- **Education:** `EducationSection.tsx`
- **Experience:** `ExperienceSection.tsx`

## 📞 Contact

- 📧 Email: shauryaofficial.in@gmail.com
- 📱 WhatsApp: +91 9450057439
- 🐙 GitHub: [mrshauryasharma](https://github.com/mrshauryasharma)
- 📸 Instagram: [mr_shauryasharma](https://www.instagram.com/mr_shauryasharma)

---

Made with ❤️ by Shaurya Sharma
