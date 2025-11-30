# ARIA ONE App - Visual Assets

## 🔑✨ Design System

**Color Palette:**
- Neon Yellow: `#F9FF3B` - Primary accent, energy
- Pastel Aqua: `#89F2FF` - Secondary glow, tech
- Pastel Pink: `#FFB6E6` - Tertiary highlight, soft
- Deep Space: `#050510` - Background, depth
- Soft White: `#FDFDFD` - Text, clarity

**Core Motifs:**
- **Circle** → Coin / Unity / "O" of ONE
- **Triangle** → A / Key-tip / Signal  
- **Horizontal Bar** → ARIA 7-line motif

---

## 🎨 Icons (`/icons`)

### ARIA KeyX Master Collection

#### Primary Logos (512×512)
- **keyx-primary.svg** - Dark coin with neon edge, full "ARIA KEYX" text  
  *Use for:* Main branding, app icons, token listings
  
- **keyx-light.svg** - Light/wallet icon, neon on white, clean  
  *Use for:* Light mode UI, documentation, presentations
  
- **keyx-pastel.svg** - Plasma gradient version (pink→aqua→space)  
  *Use for:* Marketing, social media, hero sections

- **keyx-badge.svg** - Verified Identity Badge (320×320) with checkmark  
  *Use for:* User profiles, SBT verification, trust indicators

#### Mobile Icons (Simplified)
- **keyx-mobile-32.svg** - 32×32 compact icon for nav bars
- **keyx-mobile-24.svg** - 24×24 minimal icon for buttons/tabs

#### Legacy Assets
- **keyx-dark.svg** - Original dark theme logo
- **keyx-gradient.svg** - Original gradient version
- **keyx-token-512.png** - 512×512 PNG fallback

### Additional Branding
- **aurx-logo.svg** - AURX ecosystem logo
- **ariaone-font.svg** - ARIA ONE text/font logo
- **eos-image.webp** - Eos-related imagery

## 🖼️ Banners (`/banners`)

10 banner images available for use in the app:
- 0a018dd1-a552-4d5d-9033-782acfe83899.png
- 1000000865.png through 1000000871.png
- 1000000875.png, 1000000876.png

## 🎬 Animation (`/animation`)

Ready for animation assets (currently empty - add GIF, Lottie JSON, or video files)

## 📌 Usage Examples

```jsx
// Import icons in React components
import keyxLogo from '../public/icons/keyx-primary.svg';
import aurxLogo from '../public/icons/aurx-logo.svg';

// Use in JSX
<img src={keyxLogo} alt="KEYX Token" />
<img src="/icons/keyx-badge.svg" alt="KEYX Badge" />

// Banners
<img src="/banners/1000000865.png" alt="Banner" className="hero-banner" />
```

## 🎯 Recommended Usage

- **Primary Logo**: Use `keyx-primary.svg` for main branding
- **Dark Mode**: Use `keyx-dark.svg` or `keyx-light.svg` for theme variants
- **Favicon**: `/favicon.svg` is set up for browser tab icon
- **Social Media**: Use `keyx-token-512.png` for social sharing
- **Hero Sections**: Use banner images for background/hero areas
