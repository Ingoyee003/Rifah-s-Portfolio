# Professional Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS featuring smooth animations, 3D effects, and a beautiful light/dark theme.

## 🚀 Quick Start

### Prerequisites
- Node.js 18 or higher
- npm or pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
cd YOUR-REPO-NAME
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build locally
```

## Features

### ✨ Core Features
- **Responsive Design**: Optimized for all devices (mobile, tablet, desktop)
- **Light/Dark Theme**: Toggle between light and dark modes with smooth transitions
- **Smooth Animations**: Page transitions and interactive elements using Motion (Framer Motion)
- **3D Background Effects**: Dynamic particle system on the home page
- **Modern UI**: Clean, professional design with gradient accents

### 📄 Pages
1. **Home**: Hero section with career summary, mission, education, and professional picture
2. **Resume**: Comprehensive work experience and education timeline
3. **Skills**: Interactive skill bars organized by category
4. **Projects**: Portfolio of featured projects with images and details
5. **Publications**: Academic and professional publications list
6. **Experience**: Detailed professional experience timeline
7. **Interests**: Personal hobbies and interests showcase
8. **Passions**: What drives professional growth and community involvement
9. **Certifications**: Professional certifications and credentials
10. **Contact**: Contact form and social media links

### 🎨 Design Highlights
- Gradient color schemes (blue-purple-pink)
- Glassmorphism effects
- Smooth page transitions
- Hover animations
- Custom scrollbar styling
- Professional typography
- Accessible color contrasts

### 🚀 Technologies Used
- React 18
- TypeScript
- React Router 7 (Data Mode)
- Motion (Framer Motion) for animations
- Tailwind CSS 4
- Lucide React for icons
- Vite for build tooling

## Customization

### Personal Information
Update the following files with your own information:
- `/src/app/pages/Home.tsx` - Name, title, bio
- `/src/app/pages/Resume.tsx` - Work history, education
- `/src/app/pages/Skills.tsx` - Technical and soft skills
- `/src/app/pages/Projects.tsx` - Project portfolio
- `/src/app/pages/Contact.tsx` - Contact information and social links

### Images
- Replace the professional photo in `Home.tsx` with your own
- Update project images in `Projects.tsx`
- Add your own images for interests in `Interests.tsx`

### Theme Colors
Modify the gradient colors in individual components or update the global theme in `/src/styles/theme.css`

### Navigation
Add or remove pages by updating:
- `/src/app/routes.tsx` - Add/remove routes
- `/src/app/components/Layout.tsx` - Update navigation items

## Performance Optimizations
- Lazy loading for images
- Code splitting with React Router
- Optimized animations (GPU-accelerated)
- Minimal bundle size
- Fast page transitions

## Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License
This project is open source and available under the MIT License.

## Contact
For questions or collaboration opportunities, please reach out through the contact page.