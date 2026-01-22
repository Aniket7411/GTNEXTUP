# Update Node.js to Version 20+

Next.js 16 requires **Node.js >=20.9.0**, but you're currently using **18.20.8**.

## Quick Fix: Download Node.js 20

### Option 1: Direct Download (Easiest)

1. **Visit:** https://nodejs.org/
2. **Download:** Node.js 20.x LTS (Long Term Support)
3. **Install:** Run the installer
4. **Verify:** Open a new terminal and run:
   ```bash
   node --version
   ```
   Should show: `v20.x.x` or higher

### Option 2: Using nvm-windows (If Installed)

If you have `nvm-windows` installed:

```bash
# Install Node.js 20
nvm install 20

# Use Node.js 20
nvm use 20

# Verify
node --version
```

### Option 3: Using Chocolatey (If Installed)

```bash
choco install nodejs-lts --version=20.11.0
```

---

## After Installing Node.js 20

1. **Close all terminals** (important!)
2. **Open a new terminal**
3. **Verify version:**
   ```bash
   node --version
   ```
4. **Navigate to your project:**
   ```bash
   cd my-app
   ```
5. **Reinstall dependencies** (recommended):
   ```bash
   npm install
   ```
6. **Build your app:**
   ```bash
   npm run build
   ```

---

## Verify Installation

Run these commands to confirm:

```bash
node --version   # Should show v20.x.x
npm --version    # Should show v10.x.x or higher
```

---

## Troubleshooting

**If `node --version` still shows 18.x:**
- Close ALL terminal windows
- Restart your computer (if needed)
- Open a fresh terminal
- Run `node --version` again

**If you have multiple Node.js versions:**
- Use `nvm-windows` to switch between versions
- Or uninstall old versions from Control Panel

---

## For Hostinger Deployment

Make sure Hostinger is configured to use **Node.js 20**:
- In Hostinger panel, set Node.js version to **20.x**
- Or update your `nvmrc` file (already done ✅)
