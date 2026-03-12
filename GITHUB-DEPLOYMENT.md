# 🌐 GitHub Pages Deployment Guide

Complete step-by-step guide to deploy your portfolio to GitHub Pages.

---

## 📋 Prerequisites

Before starting, make sure you have:
- [x] GitHub account (create at [github.com](https://github.com))
- [x] Git installed on your computer
- [x] Project files ready

---

## 🚀 Step-by-Step Deployment

### Step 1: Create GitHub Repository

1. **Go to GitHub** and sign in
2. **Click the "+" icon** in top right corner
3. **Select "New repository"**
4. **Fill in repository details:**
   - Repository name: `portfolio-website` (or any name you prefer)
   - Description: "Professional portfolio website"
   - Select: **Public** (required for free GitHub Pages)
   - **DO NOT** check "Initialize with README" (we already have files)
5. **Click "Create repository"**

**Keep this page open!** You'll need the commands shown.

---

### Step 2: Initialize Git (If Not Already Done)

Open your terminal/command prompt in your project folder:

**On Windows:**
- Right-click in project folder → "Open in Terminal" or "Git Bash Here"

**On Mac/Linux:**
- Navigate to project folder in Terminal

Then run:

```bash
git init
```

You should see: `Initialized empty Git repository in...`

---

### Step 3: Add All Files to Git

```bash
git add .
```

This stages all your files for commit.

---

### Step 4: Create Your First Commit

```bash
git commit -m "Initial commit: Professional portfolio website"
```

You should see a summary of files added.

---

### Step 5: Rename Branch to Main

```bash
git branch -M main
```

This ensures you're using the `main` branch (GitHub's default).

---

### Step 6: Connect to GitHub

**IMPORTANT:** Replace `YOUR-USERNAME` and `YOUR-REPO` with your actual values!

```bash
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
```

**Example:**
```bash
git remote add origin https://github.com/Ingoyee003/portfolio-website.git
```

---

### Step 7: Push to GitHub

```bash
git push -u origin main
```

**First time?** Git will ask for your credentials:
- Username: Your GitHub username
- Password: Use a **Personal Access Token** (not your password!)

#### How to Create Personal Access Token:
1. Go to GitHub → Settings (your profile) → Developer settings
2. Personal access tokens → Tokens (classic)
3. Generate new token (classic)
4. Select scopes: `repo` (all)
5. Generate token
6. **Copy the token** (you won't see it again!)
7. Use this as your password when pushing

---

### Step 8: Enable GitHub Pages

1. **Go to your repository** on GitHub
2. **Click "Settings"** tab (top right)
3. **Click "Pages"** in left sidebar (under "Code and automation")
4. **Under "Build and deployment":**
   - Source: Select **"GitHub Actions"**
5. **That's it!** The deployment will start automatically

---

### Step 9: Monitor Deployment

1. **Go to "Actions" tab** in your repository
2. You'll see **"Deploy to GitHub Pages"** workflow running
3. **Wait for completion** (2-5 minutes)
   - Yellow circle = Running
   - Green checkmark = Success ✅
   - Red X = Failed (check logs)

---

### Step 10: Access Your Live Site

Once deployment succeeds, your site will be live at:

```
https://YOUR-USERNAME.github.io/YOUR-REPO/
```

**Example:**
```
https://Ingoyee003.github.io/portfolio-website/
```

**🎉 Congratulations! Your portfolio is now live!**

---

## 🔄 Making Updates

Whenever you want to update your live site:

### 1. Make changes in VS Code
Edit your files, save changes

### 2. Check what changed
```bash
git status
```

### 3. Stage changes
```bash
git add .
```

### 4. Commit changes
```bash
git commit -m "Updated Projects section"
```

### 5. Push to GitHub
```bash
git push
```

**GitHub Pages will automatically rebuild and deploy!** ✨

---

## 🐛 Troubleshooting

### Issue: "Repository not found"
**Solution:** Check that you replaced `YOUR-USERNAME` and `YOUR-REPO` with actual values

### Issue: "Authentication failed"
**Solution:** Use a Personal Access Token, not your password
- See "How to Create Personal Access Token" above

### Issue: "Workflow not running"
**Solution:** 
1. Check that you selected "GitHub Actions" in Pages settings
2. Make sure repository is public
3. Check .github/workflows/deploy.yml exists

### Issue: "Build failed"
**Solution:** 
1. Click on failed workflow in Actions tab
2. Read error logs
3. Common fixes:
   ```bash
   # Ensure dependencies are in package.json
   npm install
   
   # Test build locally
   npm run build
   ```

### Issue: "Site shows 404"
**Solution:**
1. Wait 5 minutes after first deployment
2. Check that deployment succeeded (green checkmark)
3. Verify URL is correct
4. Clear browser cache (Ctrl+F5)

### Issue: "Site shows blank page"
**Solution:**
1. Open browser console (F12) and check for errors
2. Verify `base: './'` is set in vite.config.ts
3. Ensure all imports use correct paths
4. Check that Google Drive videos are public

### Issue: "CSS not loading"
**Solution:**
1. Check browser console for 404 errors
2. Rebuild: `npm run build`
3. Verify all CSS files are imported correctly

---

## 📁 Required Files for Deployment

Make sure these files exist:

```
✅ index.html
✅ package.json (with "build": "vite build" script)
✅ vite.config.ts
✅ .github/workflows/deploy.yml
✅ src/main.tsx
✅ src/app/App.tsx
✅ All page components in src/app/pages/
```

**Run validation:**
```bash
npm run validate
```

---

## 🔒 Repository Settings Checklist

Before deployment, verify:

- [ ] Repository is **Public** (Settings → General → Danger Zone)
- [ ] GitHub Pages source is set to **"GitHub Actions"** (Settings → Pages)
- [ ] Workflow file exists at `.github/workflows/deploy.yml`
- [ ] All code is pushed to `main` branch

---

## 🎨 Custom Domain (Optional)

Want to use your own domain like `yourname.com`?

### 1. Buy a domain
From providers like Namecheap, GoDaddy, Google Domains, etc.

### 2. Configure DNS
Add these DNS records:

```
Type: A
Name: @
Value: 185.199.108.153

Type: A
Name: @
Value: 185.199.109.153

Type: A
Name: @
Value: 185.199.110.153

Type: A
Name: @
Value: 185.199.111.153

Type: CNAME
Name: www
Value: YOUR-USERNAME.github.io
```

### 3. Configure GitHub Pages
1. Settings → Pages
2. Custom domain: Enter your domain
3. Save
4. Wait 24-48 hours for DNS propagation

---

## 📊 Deployment Status Badge (Optional)

Add a status badge to your README:

```markdown
[![Deploy](https://github.com/YOUR-USERNAME/YOUR-REPO/actions/workflows/deploy.yml/badge.svg)](https://github.com/YOUR-USERNAME/YOUR-REPO/actions/workflows/deploy.yml)
```

Shows deployment status in your repository!

---

## 🌟 Alternative Deployment Options

Don't want to use GitHub Pages? Try these:

### Vercel (Recommended!)
**Pros:** Faster, better preview, custom domain free, automatic HTTPS

1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Import repository
4. Click Deploy
5. Done! ✨

### Netlify
**Pros:** Form handling, serverless functions, split testing

1. Go to [netlify.com](https://netlify.com)
2. Sign in with GitHub
3. New site from Git
4. Select repository
5. Deploy settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Deploy!

### Cloudflare Pages
**Pros:** Fast CDN, DDoS protection, free

1. Go to [pages.cloudflare.com](https://pages.cloudflare.com)
2. Connect GitHub account
3. Select repository
4. Configure:
   - Framework preset: Vite
   - Build command: `npm run build`
   - Output directory: `dist`
5. Save and Deploy!

---

## 💡 Pro Tips

1. **Test locally before pushing:**
   ```bash
   npm run build
   npm run preview
   ```

2. **Use meaningful commit messages:**
   ```bash
   git commit -m "Added new project: E-commerce App"
   ```

3. **Check build logs if deployment fails:**
   - Go to Actions tab
   - Click on failed workflow
   - Read error messages

4. **Keep dependencies updated:**
   ```bash
   npm update
   ```

5. **Create branches for major changes:**
   ```bash
   git checkout -b feature/new-design
   # Make changes
   git commit -m "New design implementation"
   git push -u origin feature/new-design
   # Create Pull Request on GitHub
   ```

---

## 📞 Need Help?

### Common Commands Reference

| Command | What it does |
|---------|-------------|
| `git status` | Check what files changed |
| `git add .` | Stage all changes |
| `git commit -m "message"` | Save changes with message |
| `git push` | Upload to GitHub |
| `git pull` | Download latest from GitHub |
| `git log` | View commit history |
| `git remote -v` | Check remote URL |

### Resources
- [Git Documentation](https://git-scm.com/doc)
- [GitHub Pages Docs](https://docs.github.com/en/pages)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)

---

## ✅ Quick Checklist

Before deploying:
- [ ] All code works locally (`npm run dev`)
- [ ] Build succeeds (`npm run build`)
- [ ] No console errors (F12 in browser)
- [ ] All images load correctly
- [ ] Contact form works (EmailJS configured)
- [ ] Responsive on mobile, tablet, desktop
- [ ] Light and dark themes work
- [ ] All 10 pages are complete
- [ ] Google Drive videos are public
- [ ] Personal information updated
- [ ] Git repository initialized
- [ ] GitHub repository created
- [ ] Code pushed to GitHub
- [ ] GitHub Pages enabled
- [ ] Deployment workflow succeeded

---

**You're all set! 🚀 Deploy with confidence!**

If you run into issues, check SETUP.md for detailed troubleshooting.
