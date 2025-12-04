# Development Environment Setup Guide

## 🚀 Quick Start

### Prerequisites
- **Node.js:** Version 16.0 or higher
- **npm:** Version 7.0 or higher (comes with Node.js)
- **Git:** For version control
- **Code Editor:** VS Code recommended

### System Requirements
- **RAM:** Minimum 4GB, Recommended 8GB
- **Storage:** 2GB free space
- **OS:** Windows 10+, macOS 10.15+, or Linux

---

## 📦 Installation Steps

### 1. Clone Repository
```bash
git clone <repository-url>
cd lavanya-infra
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```

### 4. Access Application
Open your browser and navigate to: `http://localhost:5173`

---

## 🛠️ Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint (if configured) |
| `npm run format` | Format code with Prettier (if configured) |

---

## 📁 Project Structure Deep Dive

```
lavanya-infra/
├── public/                     # Static assets
│   ├── images/                 # Website images
│   │   ├── hero.jpg           # Hero section background
│   │   ├── image1-16.jpg      # Portfolio images
│   │   └── blueprint-bg.jpg   # Blueprint background
│   ├── assets/                # Organized assets
│   │   ├── icons/            # SVG icons
│   │   ├── images/           # Categorized images
│   │   │   ├── backgrounds/  # Background images
│   │   │   ├── logos/        # Company logos
│   │   │   ├── projects/     # Project images
│   │   │   └── team/         # Team photos
│   │   └── README.md         # Asset organization guide
│   ├── logo.png              # Main logo
│   ├── logo-lavanya.png      # Alternative logo
│   └── vite.svg              # Vite favicon
│
├── src/                       # Source code
│   ├── components/           # Vue components
│   │   ├── About.vue         # About section
│   │   ├── Contact.vue       # Contact form
│   │   ├── Footer.vue        # Site footer
│   │   ├── Hero.vue          # Landing section
│   │   ├── Navbar.vue        # Navigation
│   │   ├── Preloader.vue     # Loading screen
│   │   ├── Projects.vue      # Portfolio section
│   │   └── Services.vue      # Services section
│   │
│   ├── assets/              # Compiled assets
│   │   ├── css/             # Compiled CSS
│   │   ├── fonts/           # Font files
│   │   │   ├── fonts.css    # Font declarations
│   │   │   └── nothing-font-5x7.otf
│   │   ├── scss/            # SCSS source files
│   │   │   ├── _reset.scss  # CSS reset
│   │   │   └── main.scss    # Main stylesheet
│   │   └── vue.svg          # Vue logo
│   │
│   ├── utils/               # Utility functions
│   │   └── security.js      # Security helpers
│   │
│   ├── middleware/          # Middleware functions
│   │   └── security.js      # Security middleware
│   │
│   ├── App.vue              # Root component
│   ├── main.js              # Application entry point
│   └── style.css            # Global styles
│
├── node_modules/            # Dependencies (auto-generated)
├── package.json             # Project configuration
├── package-lock.json        # Dependency lock file
├── vite.config.js           # Vite configuration
├── README.md               # Basic project info
├── HANDOVER_DOCUMENTATION.md # Complete handover guide
├── API_SPECIFICATION.md     # Backend API requirements
└── DEVELOPMENT_SETUP.md     # This file
```

---

## ⚙️ Configuration Files

### package.json
```json
{
  "name": "lavanya-infra",
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build", 
    "preview": "vite preview"
  },
  "dependencies": {
    "@fortawesome/fontawesome-free": "^7.0.1",
    "@mdi/font": "^7.4.47",
    "bootstrap": "^5.3.8",
    "vue": "^3.5.21"
  }
}
```

### vite.config.js
```javascript
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'node:url';

export default defineConfig(() => {
  return {
    plugins: [vue()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    server: {
      https: false,  // Set to true for HTTPS
      port: 5173     // Custom port if needed
    }
  };
});
```

---

## 🎨 Styling System

### SCSS Architecture
- **Main File:** `src/assets/scss/main.scss`
- **Reset:** `src/assets/scss/_reset.scss`
- **Bootstrap:** Integrated Bootstrap 5.3.8
- **Custom Variables:** Apple-inspired design system

### Theme System
```scss
// Light Theme (Current Default)
:root {
  --primary-color: #007AFF;
  --background-color: #FFFFFF;
  --text-primary: #1C1C1E;
  --text-secondary: #3A3A3C;
}

// Dark Theme (Available but not default)
[data-theme="dark"] {
  --background-color: #000000;
  --text-primary: #FFFFFF;
}
```

### Font System
- **Primary:** Apple System Fonts (SF Pro Display/Text)
- **Fallback:** Helvetica Neue, Arial, sans-serif
- **Custom Font:** nothing-font-5x7.otf (for special use cases)

---

## 🔧 Development Tools Setup

### VS Code Extensions (Recommended)
```json
{
  "recommendations": [
    "vue.volar",                    // Vue language support
    "vue.vscode-typescript-vue-plugin",
    "bradlc.vscode-tailwindcss",   // CSS support
    "esbenp.prettier-vscode",      // Code formatting
    "dbaeumer.vscode-eslint",      // Linting
    "ms-vscode.vscode-json",       // JSON support
    "redhat.vscode-yaml",          // YAML support
  ]
}
```

### VS Code Settings
```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "files.associations": {
    "*.vue": "vue"
  }
}
```

---

## 🌐 Browser Support

### Supported Browsers
- **Chrome:** 88+
- **Firefox:** 85+
- **Safari:** 14+
- **Edge:** 88+

### Mobile Support
- **iOS Safari:** 14+
- **Chrome Mobile:** 88+
- **Samsung Internet:** 13+

---

## 📱 Responsive Breakpoints

```scss
// Mobile First Approach
@media (max-width: 360px)   { /* iPhone SE */ }
@media (max-width: 393px)   { /* iPhone 14 Pro */ }
@media (max-width: 430px)   { /* iPhone 14 Pro Max */ }
@media (max-width: 734px)   { /* Tablet Portrait */ }
@media (max-width: 1068px)  { /* Tablet Landscape */ }
@media (min-width: 1200px)  { /* Desktop */ }
```

---

## 🚀 Build Process

### Development Build
```bash
npm run dev
```
- **Hot Module Replacement:** Enabled
- **Source Maps:** Enabled
- **Optimization:** Minimal for fast rebuilds

### Production Build
```bash
npm run build
```
- **Output Directory:** `dist/`
- **Asset Optimization:** Enabled
- **Code Splitting:** Automatic
- **Tree Shaking:** Enabled

### Build Output Structure
```
dist/
├── index.html              # Main HTML file
├── assets/
│   ├── index-[hash].js     # Main JavaScript bundle
│   ├── index-[hash].css    # Main CSS bundle
│   ├── fonts/              # Font files
│   └── images/             # Optimized images
```

---

## 🔍 Debugging

### Vue DevTools
1. Install Vue DevTools browser extension
2. Enable "Vue" tab in browser dev tools
3. Inspect component state and props

### Console Debugging
```javascript
// Add to any component
console.log('Component mounted:', this);
```

### Network Debugging
- Use browser dev tools Network tab
- Monitor API calls and asset loading
- Check for 404 errors

---

## 📊 Performance Monitoring

### Lighthouse Audit
```bash
# Install Lighthouse CLI
npm install -g lighthouse

# Run audit
lighthouse http://localhost:5173 --output html --output-path ./lighthouse-report.html
```

### Bundle Analysis
```bash
# Install bundle analyzer
npm install --save-dev rollup-plugin-visualizer

# Add to vite.config.js and run build
npm run build
```

---

## 🐛 Troubleshooting

### Common Issues

#### 1. Port Already in Use
```bash
# Error: Port 5173 is already in use
# Solution: Kill process or use different port
lsof -ti:5173 | xargs kill -9
# OR
npm run dev -- --port 3000
```

#### 2. Node Modules Issues
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

#### 3. SCSS Compilation Errors
```bash
# Check SCSS syntax
# Ensure proper imports in main.scss
# Verify Bootstrap imports
```

#### 4. Font Loading Issues
```bash
# Check font file paths
# Verify font declarations in fonts.css
# Ensure proper MIME types
```

### Debug Mode
```bash
# Enable debug mode
DEBUG=vite:* npm run dev
```

---

## 🔒 Security Considerations

### Development Security
- Never commit sensitive data to repository
- Use environment variables for API keys
- Validate all user inputs
- Keep dependencies updated

### Production Security
- Enable HTTPS
- Implement proper CORS
- Add security headers
- Use Content Security Policy

---

## 📈 Performance Optimization

### Image Optimization
- Use WebP format when possible
- Implement lazy loading
- Optimize image sizes
- Use appropriate compression

### Code Splitting
- Automatic with Vite
- Manual splitting available
- Route-based splitting

### Caching Strategy
- Static assets cached
- API responses cached
- Service worker for offline support

---

## 🚀 Deployment Preparation

### Environment Variables
```bash
# Create .env file
VITE_API_URL=https://api.lavanyainfra.com
VITE_APP_NAME=Lavanya Infrastructure
VITE_APP_VERSION=1.0.0
```

### Build Optimization
```bash
# Analyze bundle size
npm run build
npm run preview
```

### Pre-deployment Checklist
- [ ] All tests passing
- [ ] Build successful
- [ ] No console errors
- [ ] Responsive design tested
- [ ] Performance optimized
- [ ] SEO meta tags added
- [ ] Analytics configured

---

## 📞 Support & Resources

### Documentation Links
- [Vue 3 Documentation](https://vuejs.org/)
- [Vite Documentation](https://vitejs.dev/)
- [Bootstrap Documentation](https://getbootstrap.com/)
- [FontAwesome Documentation](https://fontawesome.com/)

### Community Resources
- [Vue Discord](https://discord.gg/vue)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/vue.js)
- [Vue Forum](https://forum.vuejs.org/)

---

**Last Updated:** $(date)  
**Version:** 1.0.0  
**Maintained By:** Frontend Development Team
