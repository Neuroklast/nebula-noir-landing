# Nebula Noir Theme Integration Guide

This document describes how the Nebula Noir theme components are integrated into the main application.

## Theme Components Location

All theme components are located in `/src/themes/nebula-noir-theme/` and follow the Spark theme architecture:

```
src/themes/nebula-noir-theme/
├── index.ts                    # Theme registry and exports
├── styles.css                  # Theme-specific CSS with namespaced classes
├── Hero.tsx                    # Hero section component
├── Navigation.tsx              # Navigation component
├── Card.tsx                    # Card wrapper component
├── BackgroundEffects.tsx       # Background visual effects
├── SectionDivider.tsx          # Section divider component
├── LoadingScreen.tsx           # Loading screen component
└── README.md                   # Theme documentation
```

## Integration Status

### ✅ Integrated Components

1. **Theme Styles** - Imported in `App.tsx`
   - All theme CSS classes are now available app-wide
   - Classes are prefixed with `spark-theme-` to avoid conflicts

2. **ProductCard** - Updated to use theme classes
   - `spark-theme-card-wrapper` for card container
   - `spark-theme-card-corners` for corner decorations
   - `spark-theme-bioshock-glow` for text glow effects
   - `spark-theme-art-deco-button` for button styling

3. **SectionTransition** - Replaced with theme divider
   - Uses theme's animated section divider
   - Includes moon symbol (☾) with proper rotation
   - Smooth reveal animations with parallax

4. **Navigation** - Updated branding text
   - Logo text uses `spark-theme-bioshock-glow-animated`
   - Maintains existing navigation functionality

5. **Global Styles** - Extended in `index.css`
   - Added `spark-theme-bioshock-glow` alias for existing `.bioshock-glow`
   - Added `spark-theme-bioshock-glow-animated` alias for `.bioshock-glow-animated`
   - Ensures backward compatibility with existing components

### 🔄 Available Theme Components (Not Yet Used)

These components are available but not currently integrated into the main app:

- **Theme Hero** (`Hero.tsx`) - Alternative hero section with parallax
- **Theme Navigation** (`Navigation.tsx`) - Alternative navigation with mobile menu
- **Theme Card** (`Card.tsx`) - Standalone card component
- **BackgroundEffects** (`BackgroundEffects.tsx`) - Canvas-based Art Deco lines
- **LoadingScreen** (`LoadingScreen.tsx`) - Branded loading screen

## Theme CSS Classes

### Visual Effects

```css
.spark-theme-bioshock-glow          /* Static glow effect for text */
.spark-theme-bioshock-glow-animated /* Pulsing glow animation */
.spark-theme-moon-symbol            /* Rotates moon symbols upward (U-shape) */
```

### Layout Components

```css
.spark-theme-card-wrapper           /* Card container with hover effects */
.spark-theme-card-corners           /* Corner decorations for cards */
.spark-theme-art-deco-button        /* Button with Art Deco styling */
.spark-theme-nav-link               /* Navigation link with underline animation */
```

### Decorative Elements

```css
.spark-theme-deco-line-wrapper      /* Container for decorative lines */
.spark-theme-deco-line              /* Decorative horizontal line */
```

### Animation Helpers

```css
.spark-theme-fade-in                /* Fade in animation */
.spark-theme-slide-up               /* Slide up animation */
.spark-theme-stagger-1 through .spark-theme-stagger-5  /* Stagger delays */
```

### Effects (not yet used)

```css
.spark-theme-crt-overlay            /* CRT screen effect overlay */
.spark-theme-scanline               /* Animated scanline effect */
.spark-theme-progress-glow          /* Glowing progress bar */
```

## How to Use Theme Components

### Using Theme Classes

Simply add theme classes to your existing components:

```tsx
// Add glow to headings
<h1 className="spark-theme-bioshock-glow">NEBULA NOIR</h1>

// Add animated glow
<h2 className="spark-theme-bioshock-glow-animated">Cosmic Art Deco</h2>

// Wrap cards with theme styling
<div className="spark-theme-card-wrapper">
  <div className="spark-theme-card-corners" />
  {/* card content */}
</div>

// Style buttons
<button className="spark-theme-art-deco-button">
  Explore Collection
</button>
```

### Using Theme Components

Import theme components directly:

```tsx
import { SectionDivider } from '@/themes/nebula-noir-theme'

// In your component
<SectionDivider symbol="☾" />
```

### Using BackgroundEffects

To add the parallax Art Deco lines background:

```tsx
import { BackgroundEffects } from '@/themes/nebula-noir-theme'

// Add to main layout
<BackgroundEffects />
```

### Using Theme Card Component

```tsx
import { Card } from '@/themes/nebula-noir-theme'

<Card hoverable delay={0.2}>
  <h3>Product Name</h3>
  <p>Description</p>
</Card>
```

## Theme Configuration

The theme is configured in `/src/themes/nebula-noir-theme/index.ts`:

```typescript
export const sparkTheme = {
  id: 'nebula-noir-theme',
  name: 'Nebula Noir - Cosmic Art Deco Goth',
  
  colors: {
    primary: 'oklch(0.50 0.18 295)',     // Nebula Violet
    accent: 'oklch(0.50 0.18 295)',      // Nebula Violet
    background: 'oklch(0.08 0 0)',       // Void Black
    foreground: 'oklch(0.98 0 0)',       // Starlight White
    // ... more colors
  },
  
  fonts: {
    display: "'Poiret One', cursive",
    body: "'Montserrat', sans-serif",
    heading: "'Cinzel', serif",
  },
  
  effects: {
    crtFlicker: true,
    scanline: true,
    cursorGlow: true,
    parallaxBackground: true,
  },
  
  slots: {
    Hero,
    Navigation,
    Card,
    BackgroundEffects,
    SectionDivider,
    LoadingScreen,
  }
}
```

## Design Philosophy

The Nebula Noir theme implements:

1. **Art Deco Geometry** - Clean lines, geometric shapes, stepped forms
2. **Cosmic Aesthetics** - Deep space colors, nebula-inspired gradients
3. **Gothic Sensibilities** - Dark backgrounds, minimal palette, elegant typography
4. **BioShock-Inspired** - Mechanical animations, glowing text, vintage-future aesthetic
5. **CRT Effects** - Subtle scanlines, flicker animations for retro-tech feel

## Moon Symbol Orientation

All moon symbols (☾) in the theme are oriented upward (U-shape) using the `spark-theme-moon-symbol` class, which applies `transform: rotate(180deg)`.

## Backward Compatibility

The integration maintains full backward compatibility:

- All existing CSS classes continue to work
- Theme classes use `spark-theme-` prefix to avoid conflicts
- Existing components can optionally adopt theme classes gradually
- No breaking changes to existing functionality

## Next Steps

To further integrate the theme:

1. **Replace ArtDecoBackground** with `BackgroundEffects` for canvas-based parallax lines
2. **Add LoadingScreen** for initial page load
3. **Update more buttons** to use `spark-theme-art-deco-button`
4. **Apply theme animations** using stagger classes for sequential reveals
5. **Consider using Theme Hero** as alternative hero section

## Support

For questions or issues with theme integration, refer to:
- Theme README: `/src/themes/nebula-noir-theme/README.md`
- Main PRD: `/PRD.md`
