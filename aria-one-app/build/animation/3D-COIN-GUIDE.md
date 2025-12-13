# 🪙 ARIA KEYX 3D Spinning Coin Animation Guide

## Concept Overview

A professional 3D spinning coin animation for use on websites, DEX listings, and social media.

### Visual Design

**Front Face:**
- Circular coin with neon yellow rim (`#FFF700`)
- Plasma pastel glow background (yellow→aqua→pink gradient)
- KeyX symbol embossed in center:
  - Triangle (A/Key motif)
  - Circuit "X" pattern with neon accents
  - Horizontal bar (ARIA 7-line)

**Back Face:**
- Subtle ARIA ONE mandala pattern
- Pastel gradient background
- Embossed text: "ARIA ONE UNIVERSE"

**Dimensions:**
- 800x800px (square, transparent background)
- 4-second loop animation
- 60 FPS for smooth rotation
- WebM/MP4 formats for web compatibility

---

## Implementation Methods

### Option 1: Blender (Professional 3D)

**Steps:**

1. **Create Base Geometry**
   ```
   - Add Cylinder (32 vertices for smooth edges)
   - Scale: 4 units diameter, 0.3 units thick
   - Smooth shading enabled
   ```

2. **Material Setup**
   ```
   - Base: Principled BSDF
   - Emission shader for glow
   - Colors: #FFF700, #62f7fe, #ff8ed6
   - Metallic: 0.8, Roughness: 0.3
   ```

3. **Emboss KeyX Symbol**
   ```
   - Create triangle mesh (3 vertices)
   - Create X pattern (2 crossed lines)
   - Use Solidify + Boolean modifiers to emboss
   - Extrude depth: 0.05 units
   ```

4. **Lighting**
   ```
   - 3-point light setup
   - Key light: Neon yellow (#FFF700)
   - Fill light: Soft aqua (#62f7fe)
   - Rim light: Pastel pink (#ff8ed6)
   ```

5. **Animation**
   ```
   - Keyframe 1 (Frame 0): Rotation Y = 0°
   - Keyframe 2 (Frame 120): Rotation Y = 360°
   - Interpolation: Linear
   - Loop: Cyclic modifier
   ```

6. **Render Settings**
   ```
   - Resolution: 800x800px
   - Format: PNG sequence or direct MP4/WebM
   - Transparent background: Enabled
   - Sample count: 128 (for quality)
   - Frame rate: 60 FPS
   ```

**Export:**
```bash
# From Blender
File > Export > Video/Image Sequence
Format: MP4 (H.264) or WebM
```

---

### Option 2: Spline (Web-Based 3D)

**Steps:**

1. Visit [spline.design](https://spline.design)
2. Create new project
3. Add Cylinder primitive
4. Import KeyX SVG as texture/decal
5. Apply materials with emission
6. Set up rotation animation (Y-axis, 4s loop)
7. Export as WebM or embed code

**Advantages:**
- No software install required
- Easy browser-based editing
- Direct web embedding support

---

### Option 3: Three.js (Code-Based)

**JavaScript/React Component:**

```javascript
import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';

function KeyXCoin() {
  const coinRef = useRef();
  
  useFrame((state, delta) => {
    coinRef.current.rotation.y += delta * 0.5; // Rotate speed
  });
  
  return (
    <mesh ref={coinRef}>
      <cylinderGeometry args={[2, 2, 0.3, 32]} />
      <meshStandardMaterial 
        color="#FFF700"
        emissive="#62f7fe"
        emissiveIntensity={0.5}
        metalness={0.8}
        roughness={0.3}
      />
      {/* Add KeyX symbol texture/decal here */}
    </mesh>
  );
}

export default function KeyXCoinAnimation() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} color="#FFF700" />
      <pointLight position={[-10, -10, -10]} color="#62f7fe" />
      <KeyXCoin />
    </Canvas>
  );
}
```

---

### Option 4: Static 3D Mockup (Immediate Use)

**For quick deployment, use a static 3D-style SVG:**

See: `keyx-3d-coin-static.svg` (created alongside this guide)

---

## File Formats & Sizes

### Recommended Exports:

1. **Web Hero (Large)**
   - 800x800px MP4/WebM
   - Transparent background
   - 4s loop, 60 FPS

2. **Social Media**
   - 512x512px GIF
   - Optimized for Twitter/Discord
   - 2s loop, 30 FPS

3. **Mobile/Thumbnail**
   - 256x256px WebP
   - Static frame or short loop
   - 1s loop, 30 FPS

4. **DEX Listing**
   - 400x400px MP4
   - Professional quality
   - 4s loop, 30 FPS

---

## Usage Examples

### HTML
```html
<video autoplay loop muted playsinline>
  <source src="/animation/keyx-coin-spin.webm" type="video/webm">
  <source src="/animation/keyx-coin-spin.mp4" type="video/mp4">
</video>
```

### React
```jsx
<video 
  autoPlay 
  loop 
  muted 
  playsInline
  className="keyx-coin-animation"
>
  <source src="/animation/keyx-coin-spin.webm" type="video/webm" />
</video>
```

### CSS Styling
```css
.keyx-coin-animation {
  width: 200px;
  height: 200px;
  filter: drop-shadow(0 0 20px rgba(255, 247, 0, 0.5));
}
```

---

## Next Steps

**To get a rendered animation:**

1. **DIY Route:** Use Blender instructions above
2. **Quick Route:** Use Spline for web-based creation
3. **Custom Route:** Contact a 3D artist on Fiverr/Upwork
4. **AI Route:** Use AI tools like Midjourney → CapCut for quick mockups

**Estimated Time:**
- Blender: 2-4 hours (with experience)
- Spline: 30-60 minutes
- Three.js: 1-2 hours coding

---

**Status:** Concept ready ✅  
**Render:** Requires 3D software execution  
**Alternative:** Static 3D mockup created for immediate use
