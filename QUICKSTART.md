# ⚡ Quick Start Guide

## For VS Code (Local Development)

### 1️⃣ Install Node.js
Download and install from: https://nodejs.org/ (Choose LTS version)

### 2️⃣ Open Project in VS Code
- Open VS Code
- File → Open Folder
- Select this project folder

### 3️⃣ Install Dependencies
Open terminal in VS Code (Ctrl + ` or View → Terminal) and run:
```bash
npm install
```

### 4️⃣ Start Development Server
```bash
npm run dev
```

### 5️⃣ Open in Browser
Click the link in terminal: http://localhost:5173/

**That's it! Your portfolio is running! 🎉**

---

## For GitHub Pages (Live Website)

### 1️⃣ Create GitHub Repository
- Go to https://github.com/new
- Name your repository
- Click "Create repository"

### 2️⃣ Push Your Code
Open terminal in VS Code:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
git push -u origin main
```

### 3️⃣ Enable GitHub Pages
- Go to your repo on GitHub
- Settings → Pages
- Source: Select "GitHub Actions"

### 4️⃣ Wait for Deployment
- Go to "Actions" tab
- Wait for green checkmark ✅
- Your site is live at: https://YOUR-USERNAME.github.io/YOUR-REPO/

**Your portfolio is now online! 🌐**

---

## 🆘 Having Issues?

### Error: "npm: command not found"
→ Install Node.js from https://nodejs.org/

### Error: "Port 5173 already in use"
→ Run: `npm run dev -- --port 3000`

### Site not loading on GitHub Pages
→ Check that:
- Workflow ran successfully (Actions tab)
- Repository is public
- GitHub Pages is enabled in Settings

### Need more help?
→ Check SETUP.md for detailed troubleshooting

---

## 📝 Quick Commands Reference

| Command | What it does |
|---------|-------------|
| `npm install` | Install all dependencies |
| `npm run dev` | Start local development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `git add .` | Stage all changes |
| `git commit -m "message"` | Commit changes |
| `git push` | Push to GitHub |

---

**Need detailed instructions? See SETUP.md** 📖
