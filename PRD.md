# Planning Guide

An atmospheric Art Deco landing page for Nebula Noir, inspired by BioShock's underwater Rapture aesthetic—where 1920s-30s elegance meets dystopian grandeur. Dark, cinematic, and haunting, with glowing golden accents that evoke the beauty found in decay and shadow.

**Experience Qualities**:
1. **Atmospheric** - BioShock's underwater city ambiance with glowing art deco elements, subtle light rays, and cinematic depth creates an immersive environment
2. **Elegant Decay** - Golden-hued accents against deep darkness evoke Rapture's faded luxury—sophisticated yet haunting, beautiful yet mysterious
3. **Cinematic** - Slow, deliberate animations with dramatic reveals, film grain effects, and pulsing glows create a movie-like experience

**Complexity Level**: Content Showcase (information-focused)
This is an immersive brand presentation landing page designed to establish a unique visual identity inspired by BioShock's art direction, showcasing the jewelry brand's aesthetic before shop functionality is added.

## Essential Features

### Hero Section with Animated Overlay
- **Functionality**: Full-viewport hero with brand name, tagline, and geometric Art Déco pattern overlays
- **Purpose**: Immediately establish brand identity and aesthetic direction
- **Trigger**: Page load
- **Progression**: Page loads → Geometric patterns fade in with staggered animation → Brand name appears with elegant reveal → Subtle parallax on scroll
- **Success criteria**: Hero captures attention within 2 seconds, brand name clearly visible, animations enhance rather than distract

### About/Brand Story Section
- **Functionality**: Narrative section explaining Nebula Noir's handmade alternative jewelry philosophy
- **Purpose**: Build emotional connection and communicate brand values
- **Trigger**: User scrolls to section
- **Progression**: Scroll into view → Content fades in → Images reveal with Art Déco frame animations
- **Success criteria**: Text is readable, imagery complements story, section feels cohesive with overall design

### Product Showcase Grid
- **Functionality**: Visual grid displaying jewelry pieces with hover effects
- **Purpose**: Showcase craftsmanship and product variety
- **Trigger**: User scrolls to section
- **Progression**: Scroll into view → Grid items appear with staggered animation → Hover reveals detail overlay with geometric frame
- **Success criteria**: Grid is responsive, images are prominent, hover states feel luxurious

### Contact/Social Section
- **Functionality**: Links to Instagram and future shop notification signup
- **Purpose**: Drive social media engagement and capture interested customers
- **Trigger**: User scrolls to footer section
- **Progression**: Scroll to bottom → Social icons appear → Optional email input for shop launch notification
- **Success criteria**: Instagram link works, email capture is simple and elegant

### Animated Geometric Backgrounds
- **Functionality**: Subtle animated Art Déco patterns and lines throughout sections
- **Purpose**: Maintain visual interest and reinforce Art Déco aesthetic
- **Trigger**: Page load and scroll events
- **Progression**: Continuous subtle animations → Parallax effects on scroll → Geometric elements frame content
- **Success criteria**: Animations are smooth, don't impact performance, enhance readability

## Edge Case Handling

- **Slow Network**: Progressive loading with skeleton states showing Art Déco frames, hero visible immediately
- **No JavaScript**: All content remains accessible, animations gracefully degrade, core information visible
- **Small Screens**: Mobile-first responsive design, geometric patterns scale appropriately, touch-friendly targets
- **Image Loading Failures**: Elegant placeholder with geometric patterns maintains visual consistency
- **Long Text Content**: Typography scales appropriately, maintains readability, hierarchy preserved

## Design Direction

The design evokes BioShock's underwater city of Rapture—Art Deco architecture bathed in eerie golden light, viewed through deep ocean darkness. Imagine geometric patterns glowing like bioluminescence, elegant typography with a faded grandeur, and animations that feel like slow underwater movements. The aesthetic merges 1920s sophistication with dystopian atmosphere: glowing accents pierce through darkness, film grain adds texture, and subtle pulsing lights create the feeling of being in a submerged palace. This isn't bright luxury—it's beauty found in shadows, elegance in darkness, perfect for alternative jewelry that celebrates the unconventional.

## Color Selection

A dramatic palette inspired by Rapture's underwater ambiance—deep ocean darkness with warm golden accents that glow like Art Deco neon signs in the depths.

- **Primary Color**: Deep Ocean Blue-Black `oklch(0.12 0.01 240)` - The crushing darkness of the ocean depths; represents mystery and the alternative aesthetic; used for backgrounds
- **Secondary Colors**: 
  - Charcoal Blue `oklch(0.22 0.015 240)` - Slightly lighter darkness for cards and layered elements, maintaining underwater atmosphere
  - Twilight Gray `oklch(0.28 0.02 240)` - Mid-tone with subtle blue tint for muted elements
  - Warm Ivory `oklch(0.92 0.02 60)` - Aged white with warmth for primary text, like old paper in lamplight
- **Accent Color**: Golden Glow `oklch(0.75 0.04 65)` - Warm golden amber that evokes Art Deco lighting, neon signs, and the precious metal of jewelry; creates atmospheric glow effects
- **Foreground/Background Pairings**:
  - Deep Ocean (0.12): Warm Ivory (0.92) - Ratio 13.2:1 ✓
  - Charcoal Blue (0.22): Warm Ivory (0.92) - Ratio 9.8:1 ✓
  - Golden Glow (0.75): Deep Ocean (0.12) - Ratio 8.5:1 ✓
  - Twilight Gray (0.28): Warm Ivory (0.92) - Ratio 7.1:1 ✓

## Font Selection

Typography should channel BioShock's blend of classical elegance and haunting grandeur—fonts that feel like they belong in a 1920s underwater palace.

- **Primary Font**: Cinzel - A classical Roman-inspired serif with Art Deco elegance, perfect for headings that demand gravitas and timeless beauty
- **Secondary Font**: Cormorant Garamond - An elegant Garamond revival with old-world sophistication for body text, evoking vintage documents and literary refinement

- **Typographic Hierarchy**:
  - Brand Name: Cinzel Bold / 72-96px / Wide letter spacing (0.15em) / Uppercase / Text glow effect
  - H1 (Section Headers): Cinzel Bold / 56px / Medium letter spacing (0.05em) / Uppercase / Subtle glow
  - H2 (Subsections): Cinzel SemiBold / 36px / Light letter spacing / Title case
  - H3 (Card Titles): Cinzel Medium / 28px / Normal spacing
  - Body Text: Cormorant Garamond Regular / 18-20px / Line height 1.7 / Light weight for elegance
  - Small/Caption: Cormorant Garamond Light / 16px / Line height 1.6 / Wide letter spacing (0.3em) for labels

## Animations

Animations evoke BioShock's cinematic underwater atmosphere—slow, deliberate movements like objects floating in water, with dramatic lighting reveals and vintage film aesthetics.

Key animation moments:
- Hero entrance: Slow fade-in with blur effect (2-3 seconds), mimicking emergence from darkness
- Geometric patterns: Draw in like illuminated circuitry, staggered delays (300-500ms)
- Brand name: Letter-by-letter reveal with glow intensification and slight vertical drift
- Section reveals: Slow upward float (50px) with fade, triggered on scroll intersection
- Hover states: Gentle scale (1.02-1.03) with glow intensification, smooth ease-out timing
- Light effects: Pulsing glows on accent elements (4-6 second cycles) like distant underwater lights
- Film grain: Static overlay with subtle opacity variation for vintage cinematography feel
- Scroll indicators: Gentle bobbing animation with opacity fade (breathing effect)
- Background elements: Very slow rotation on geometric shapes (60+ seconds per rotation)
- Transition curves: Custom easing mimicking underwater resistance [0.22, 1, 0.36, 1]

## Component Selection

- **Components**:
  - Card: For product showcase with Art Deco borders, underwater glow effects, and geometric overlays
  - Button: CTAs with sharp edges, glowing borders on hover, and film-era elegance
  - Input: Email capture with clean lines, golden focus glow, and atmospheric backdrop blur
  - Custom SVG Graphics: Geometric Art Deco patterns that pulse and glow like bioluminescent elements
  
- **Customizations**:
  - Custom "underwater glow" effect using radial gradients with pulsing animation
  - Film grain overlay using SVG noise filter for vintage aesthetic
  - Art Deco border components with corner accents and glowing highlights
  - Geometric grid background patterns (Rapture-style) with subtle visibility
  - Custom flickering text effect for golden accents mimicking old neon
  - Backdrop blur effects on cards for depth and atmosphere
  - Custom SVG geometric animations (diamonds, lines, circles) that draw in slowly

- **States**:
  - Buttons: Rest (golden border + glow), Hover (intensified glow + subtle scale 1.05), Active (reduced glow)
  - Cards: Rest (subtle border), Hover (glowing Art Deco frame appears + underwater glow intensifies + scale 1.02)
  - Inputs: Rest (muted border), Focus (golden glow border + backdrop blur), Filled (warm ivory text)
  - Links: Rest (golden with subtle glow), Hover (brighter glow + slight scale)

- **Icon Selection**:
  - Instagram: Phosphor Icons, filled weight with golden glow
  - Envelope: For newsletter signup, filled weight
  - Caret Down: For scroll indicator with gentle animation
  - Geometric shapes: Diamond, Circle, Square for Art Deco decorative elements

- **Spacing**:
  - Section padding: py-32 md:py-40 (more breathing room for cinematic feel)
  - Container max-width: 6xl-7xl (1280px)
  - Grid gaps: gap-10 (product grid with more space)
  - Component spacing: space-y-16 (sections), space-y-8 (content blocks)
  - Generous padding: p-8 (cards), px-10 py-5 (buttons) for luxury feel

- **Mobile**:
  - Hero: Scaled text (96px → 48px), simplified geometric patterns, maintained glow effects
  - Product Grid: 1 column mobile, 2 columns tablet (md:), 3 columns desktop (lg:)
  - Reduced but maintained atmospheric effects on mobile for performance
  - Spacing: py-32 → py-24 on mobile, smaller gaps
  - Typography: Scaled hierarchy maintaining proportions
  - Touch targets: 44px minimum, larger interactive areas
  - Simplified animations on mobile (reduced blur, simpler glows) for performance
