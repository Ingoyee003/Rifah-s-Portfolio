# Complete Setup Guide

## 🖥️ Local Development Setup (VS Code)

### Step 1: Prerequisites

Install these before starting:
- **Node.js v18+**: [Download here](https://nodejs.org/)
- **VS Code**: [Download here](https://code.visualstudio.com/)
- **Git**: [Download here](https://git-scm.com/)

Verify installations:
```bash
node --version   # Should show v18 or higher
npm --version    # Should show v9 or higher
git --version    # Should show v2 or higher
```

### Step 2: Download & Open Project

1. Extract your project files to a folder (e.g., `portfolio-website`)
2. Open VS Code
3. Click **File → Open Folder**
4. Select your project folder

### Step 3: Install Dependencies

Open VS Code terminal (**Ctrl + `** or **View → Terminal**):

```bash
npm install
```

**Wait for completion** (2-5 minutes). You should see:
```
added XXX packages in XXs
```

### Step 4: Start Development Server

```bash
npm run dev
```

You should see:
```
  VITE v6.x.x  ready in XXX ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

### Step 5: View Your Site

- Hold **Ctrl** and click `http://localhost:5173/`
- OR open browser and go to `http://localhost:5173/`

🎉 **Your portfolio is now running!**

---

## 🌐 GitHub Pages Deployment

### Step 1: Create GitHub Repository

1. Go to [github.com](https://github.com)
2. Click **+** → **New repository**
3. Name: `portfolio-website` (or your choice)
4. Select **Public**
5. Click **Create repository**

### Step 2: Initialize Git & Push

In VS Code terminal:

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: Portfolio website"

# Rename branch to main
git branch -M main

# Add GitHub remote (REPLACE with your username and repo name!)
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git

# Push to GitHub
git push -u origin main
```

**Example:**
```bash
git remote add origin https://github.com/Ingoyee003/portfolio-website.git
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your GitHub repository
2. Click **Settings** tab
3. Click **Pages** in the left sidebar
4. Under **Source**, select **GitHub Actions**
5. The deployment will start automatically!

### Step 4: Wait for Deployment

1. Click **Actions** tab in your repository
2. You'll see "Deploy to GitHub Pages" workflow running
3. Wait for green checkmark ✅ (takes 2-5 minutes)
4. Your site will be live at:
   ```
   https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/
   ```

---

## 🔧 Troubleshooting

### "npm: command not found"
**Solution:** Node.js not installed. Download and install from [nodejs.org](https://nodejs.org/)

### "Port 5173 already in use"
**Solution:** Another app is using that port. Either:
- Stop the other app
- Or use different port:
  ```bash
  npm run dev -- --port 3000
  ```

### Module not found errors
**Solution:** Delete and reinstall dependencies:
```bash
rm -rf node_modules package-lock.json
npm install
```

### TypeScript errors in VS Code
**Solution:** Restart TypeScript server:
1. Press **Ctrl+Shift+P**
2. Type "TypeScript: Restart TS Server"
3. Press Enter

### Build fails on GitHub
**Solution:** Check these:
1. Make sure `package.json` has all dependencies
2. Check GitHub Actions logs for specific error
3. Ensure all imports use correct paths (case-sensitive!)

### Site shows blank page on GitHub Pages
**Solution:** 
1. Check browser console for errors (F12)
2. Ensure `base: './'` is set in `vite.config.ts`
3. Make sure Google Drive videos are set to "Anyone with link can view"

### GSAP or Three.js animations not working
**Solution:** Check:
1. Dependencies installed: `npm list gsap three`
2. No JavaScript errors in console (F12)
3. Canvas elements are rendering

---

## 📝 Making Updates

After making changes to your code:

```bash
# Stage changes
git add .

# Commit with message
git commit -m "Updated Projects section"

# Push to GitHub
git push
```

GitHub Pages will automatically rebuild and deploy! ✨

---

## 🚀 Alternative Deployment Options

### Option 1: Vercel (Easiest!)

1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click **Add New** → **Project**
4. Select your repository
5. Click **Deploy**
6. Done! 🎉

**Benefits:**
- Automatic HTTPS
- Global CDN
- Instant deployments
- No configuration needed

### Option 2: Netlify

1. Go to [netlify.com](https://netlify.com)
2. Sign in with GitHub
3. Click **Add new site** → **Import an existing project**
4. Select your repository
5. Build settings (auto-detected):
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click **Deploy**
7. Done! 🎉

**Benefits:**
- Automatic HTTPS
- Form handling
- Custom domains
- Analytics

---

## 📦 Project Structure

```
portfolio-website/
├── .github/
│   └── workflows/
│       └── deploy.yml         # GitHub Pages deployment
├── node_modules/              # Dependencies (auto-generated)
├── src/
│   ├── app/
│   │   ├── components/        # Reusable components
│   │   │   ├── Layout.tsx     # Main layout with navigation
│   │   │   ├── BackgroundAnimation.tsx
│   │   │   ├── GSAP3DCard.tsx
│   │   │   └── ...
│   │   ├── pages/            # Page components
│   │   │   ├── Home.tsx
│   │   │   ├── Resume.tsx
│   │   │   ├── Projects.tsx
│   │   │   └── ...
│   │   ├── App.tsx           # Root component
│   │   └── routes.tsx        # Route configuration
│   ├── styles/               # CSS files
│   │   ├── index.css         # Main styles
│   │   ├── tailwind.css      # Tailwind imports
│   │   └── theme.css         # Theme variables
│   └── main.tsx              # Entry point
├── index.html                # HTML template
├── package.json              # Dependencies
├── tsconfig.json             # TypeScript config
├── vite.config.ts            # Vite config
├── .gitignore                # Git ignore rules
└── README.md                 # Documentation
```

---

## 🎨 Customization Guide

### Update Personal Info

**Home Page** (`/src/app/pages/Home.tsx`):
- Name, title, bio
- Profile image
- Social media links

**Contact Page** (`/src/app/pages/Contact.tsx`):
- Email address (update EmailJS config)
- Phone number
- Social links

**Resume Page** (`/src/app/pages/Resume.tsx`):
- Work experience
- Education
- Timeline events

### Change Colors

Edit `/src/styles/theme.css` or update inline gradients in components:

```tsx
// Example: Change gradient from blue-purple to red-orange
from-blue-600 to-purple-600  →  from-red-600 to-orange-600
```

### Add/Remove Pages

1. **Create page component** in `/src/app/pages/`
2. **Update routes** in `/src/app/routes.tsx`
3. **Update navigation** in `/src/app/components/Layout.tsx`

---

## 💡 Tips & Best Practices

### VS Code Extensions (Recommended)

Install these for better experience:
1. **ES7+ React/Redux/React-Native snippets**
2. **Tailwind CSS IntelliSense**
3. **Prettier - Code formatter**
4. **ESLint**
5. **Auto Rename Tag**
6. **Path Intellisense**

### Keyboard Shortcuts

| Action | Windows/Linux | Mac |
|--------|--------------|-----|
| Open terminal | `Ctrl + `` | `Cmd + `` |
| Save file | `Ctrl + S` | `Cmd + S` |
| Quick open file | `Ctrl + P` | `Cmd + P` |
| Command palette | `Ctrl+Shift+P` | `Cmd+Shift+P` |
| Multi-cursor | `Alt + Click` | `Option + Click` |

### Development Workflow

1. **Make changes** in VS Code
2. **Save** (Ctrl+S) - page auto-refreshes!
3. **Check browser** for updates
4. **Commit** when feature is complete
5. **Push to GitHub** to deploy

---

## 📞 Need Help?

### Common Questions

**Q: How do I change the EmailJS configuration?**
A: Update the service ID, template ID, and public key in `/src/app/pages/Contact.tsx`

**Q: Can I use my own domain?**
A: Yes! Configure custom domain in GitHub Pages settings or your deployment platform.

**Q: How do I add more projects?**
A: Edit the `projects` array in `/src/app/pages/Projects.tsx`

**Q: The 3D animations are laggy on mobile**
A: Reduce particle count in canvas animations or disable on mobile using media queries.

---

## ✅ Checklist Before Deployment

- [ ] Update all personal information
- [ ] Replace placeholder images with your own
- [ ] Update EmailJS credentials
- [ ] Test all pages and links
- [ ] Check responsive design (mobile, tablet, desktop)
- [ ] Verify light and dark themes
- [ ] Test contact form
- [ ] Update README with your info
- [ ] Set Google Drive videos to public
- [ ] Test build locally: `npm run build && npm run preview`

---

**You're all set! 🚀 Happy coding!**
