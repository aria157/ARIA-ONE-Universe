# 🚀 ARIA KEYX Brand Asset Drop - Phase 1
## Complete Asset Inventory & Usage Guide

---

## 📦 **COMPLETE ASSET LIST**

### 🛡️ Identity & Verification

#### 1. KeyX Verified Shield Badge (128×144)
**File:** `icons/keyx-shield-badge.svg`
- Shield-style plasma glow
- Triangle + Digital X circuit
- Verified checkmark
- **Use for:** Profile verification, SBT badges, trust indicators

#### 2. Verified Badge Icon (40×40)
**File:** `icons/ui-verified-badge.svg`
- Clean checkmark in circle
- Yellow border, green check
- **Use for:** User profiles, verified accounts, UI elements

---

### 🎨 Primary Branding Icons

#### 3. KeyX Primary Logo (512×512)
**File:** `icons/keyx-primary.svg`
- Dark coin, neon edge, full text
- Triangle A + horizontal bar + KeyX notch
- **Use for:** Main branding, app icons, token listings

#### 4. KeyX Light Mode (512×512)
**File:** `icons/keyx-light.svg`
- Neon on white, wallet-style
- Clean professional look
- **Use for:** Light mode UI, documentation, presentations

#### 5. KeyX Pastel Plasma (512×512)
**File:** `icons/keyx-pastel.svg`
- Pink→Aqua→Space gradient
- Glow strokes
- **Use for:** Marketing, social media, hero sections

#### 6. KeyX Badge (320×320)
**File:** `icons/keyx-badge.svg`
- Circular verified ID badge
- Checkmark indicator
- **Use for:** Profile badges, certification display

---

### 📱 Mobile & Compact Icons

#### 7. Mobile Nav Icon (32×32)
**File:** `icons/keyx-mobile-32.svg`
- Simplified triangle + bar
- Neon yellow accent
- **Use for:** Navigation bars, mobile menus

#### 8. Mobile Button Icon (24×24)
**File:** `icons/keyx-mobile-24.svg`
- Ultra-compact symbol
- Tab/button optimized
- **Use for:** Tabs, small buttons, favicons

---

### 💎 Premium Wallet Icons

#### 9. Neon White Wallet Icon (64×64)
**File:** `icons/keyx-neon-white.svg`
- White glow on transparent
- Digital X circuit
- **Use for:** Light mode wallets, integration icons

#### 10. Pastel Plasma Wallet Icon (64×64)
**File:** `icons/keyx-pastel-plasma.svg`
- Aurora gradient background
- Professional finish
- **Use for:** Premium wallet displays, featured listings

---

### 🧩 UI Icon Pack

#### 11. Wallet Icon (40×40)
**File:** `icons/ui-wallet-icon.svg`
- Stylized wallet with yellow accents
- **Use for:** Connect wallet buttons, wallet UI

#### 12. KeyX Symbol Icon (40×40)
**File:** `icons/ui-keyx-symbol.svg`
- Pure KeyX symbol (triangle + X)
- **Use for:** Token indicators, brand marks

---

### 🖼️ Banners & Marketing

#### 13. DEXTools Listing Banner (1280×320)
**File:** `banners/keyx-dextools-banner.svg`
- Professional DEX listing format
- Coin symbol + "ARIA KEYX" text
- Official tagline
- **Use for:** DEXTools, CoinGecko, CMC listings

#### 14. Hero Banner (1920×480)
**File:** `banners/keyx-hero-banner-1920x480.svg`
- Full website hero section
- Animated pulse circles
- "Future of Digital Identity" tagline
- Verified/Secure/Web3 badges
- **Use for:** Website headers, landing pages

#### 15. Background PNG Banners (10 files)
**Files:** `banners/*.png`
- Various design concepts
- Ready for background use
- **Use for:** Social media, presentations, backgrounds

---

### 🪙 3D Coin Assets

#### 16. Static 3D Coin (512×512)
**File:** `animation/keyx-3d-coin-static.svg`
- Metallic coin with embossed KeyX symbol
- Shadow and highlight effects
- 3D perspective
- **Use for:** Immediate deployment, hero images

#### 17. 3D Coin Animation Guide
**File:** `animation/3D-COIN-GUIDE.md`
- Complete Blender instructions
- Spline.design tutorial
- Three.js React component
- Export specifications
- **Use for:** Creating animated spinning coin

---

### 📚 Additional Assets

#### 18. AURX Logo
**File:** `icons/aurx-logo.svg`
- AURX ecosystem branding

#### 19. ARIA ONE Font Logo
**File:** `icons/ariaone-font.svg`
- Text-based logo

#### 20. Eos Image
**File:** `icons/eos-image.webp`
- Eos-related imagery

#### 21. Legacy Icons
- `icons/keyx-dark.svg`
- `icons/keyx-gradient.svg`
- `icons/keyx-token-512.png`

---

## 🎨 **COLOR SYSTEM**

```css
/* Neon Yellow - Primary Accent */
--keyx-neon-yellow: #FFF700;

/* Pastel Aqua - Tech Glow */
--keyx-aqua: #62f7fe;

/* Pastel Pink - Soft Highlight */
--keyx-pink: #ff8ed6;

/* Deep Space - Background */
--keyx-space: #050510;

/* Soft White - Text */
--keyx-white: #FDFDFD;

/* Success Green - Verification */
--keyx-verified: #39FF7A;
```

---

## 📋 **QUICK USAGE GUIDE**

### HTML Image Tag
```html
<!-- Primary logo -->
<img src="/icons/keyx-primary.svg" alt="ARIA KEYX" width="128">

<!-- Mobile icon -->
<img src="/icons/keyx-mobile-32.svg" alt="KeyX" width="32">

<!-- Hero banner -->
<img src="/banners/keyx-hero-banner-1920x480.svg" alt="ARIA KEYX - Future of Digital Identity">
```

### React Component
```jsx
import KeyXLogo from '../public/icons/keyx-primary.svg';
import KeyXBadge from '../public/icons/keyx-shield-badge.svg';

function Header() {
  return (
    <header>
      <img src={KeyXLogo} alt="ARIA KEYX" className="logo" />
      <img src={KeyXBadge} alt="Verified" className="badge" />
    </header>
  );
}
```

### CSS Background
```css
.hero-section {
  background-image: url('/banners/keyx-hero-banner-1920x480.svg');
  background-size: cover;
  background-position: center;
}

.token-icon {
  background-image: url('/icons/keyx-pastel-plasma.svg');
  width: 64px;
  height: 64px;
}
```

---

## 🌐 **PLATFORM-SPECIFIC USAGE**

### DEX Listings (DEXTools, Uniswap)
- **Banner:** `keyx-dextools-banner.svg` (1280×320)
- **Icon:** `keyx-primary.svg` (512×512)
- **Thumbnail:** `keyx-pastel-plasma.svg` (64×64)

### Social Media
- **Twitter/X Header:** `keyx-hero-banner-1920x480.svg`
- **Profile Picture:** `keyx-primary.svg` (512×512)
- **Discord Icon:** `keyx-mobile-32.svg` (32×32)

### Website
- **Favicon:** `keyx-mobile-24.svg` or `keyx-mobile-32.svg`
- **Hero Section:** `keyx-hero-banner-1920x480.svg`
- **Logo:** `keyx-light.svg` (light mode) / `keyx-primary.svg` (dark mode)

### Wallet Integration
- **Connect Button:** `ui-wallet-icon.svg` (40×40)
- **Token Display:** `keyx-neon-white.svg` or `keyx-pastel-plasma.svg` (64×64)
- **Verified Badge:** `ui-verified-badge.svg` (40×40)

---

## 📦 **EXPORT OPTIONS**

### Current Format: SVG
- ✅ Scalable to any size
- ✅ Small file sizes
- ✅ Perfect for web
- ✅ Easy to edit

### Available Conversions (On Request):
- **PNG** - Various sizes (128px, 256px, 512px, 1024px)
- **WebP** - Optimized for web
- **ICO** - Windows icons
- **ICNS** - macOS icons
- **GIF** - For platforms without WebM support

---

## 🎯 **RECOMMENDED USAGE BY CONTEXT**

| Context | Icon | Size | Format |
|---------|------|------|--------|
| App Launcher | keyx-primary.svg | 512×512 | SVG/PNG |
| Website Favicon | keyx-mobile-24.svg | 24×24 | SVG/ICO |
| DEX Listing | keyx-dextools-banner.svg | 1280×320 | SVG/PNG |
| Wallet UI | keyx-neon-white.svg | 64×64 | SVG |
| Mobile App | keyx-mobile-32.svg | 32×32 | SVG/PNG |
| Profile Badge | keyx-shield-badge.svg | 128×144 | SVG |
| Hero Section | keyx-hero-banner.svg | 1920×480 | SVG |
| Button Icon | ui-keyx-symbol.svg | 40×40 | SVG |

---

## 🚀 **NEXT STEPS**

### Phase 1 Complete ✅
- [x] 21 professional assets created
- [x] Full color system defined
- [x] Usage documentation complete
- [x] 3D coin guide provided

### Phase 2 Options:
- [ ] PNG exports (specify sizes)
- [ ] Animated GIF versions
- [ ] Social media template pack
- [ ] Email signature graphics
- [ ] Presentation slide deck
- [ ] Brand guidelines PDF
- [ ] Figma component library
- [ ] 3D coin render (MP4/WebM)

---

**Ready for deployment! 🎉**  
All assets are production-ready and optimized for Web3 platforms.

**Total Assets:** 21+ files  
**File Formats:** SVG (primary), PNG (legacy), WebP (Eos)  
**Total Size:** ~50KB (all SVGs combined)  
**Quality:** Professional, scalable, web-optimized

---

**Questions? Need custom sizes or formats?**  
Just ask: "Export [asset-name] as PNG 1024px" or "Create Twitter header"
