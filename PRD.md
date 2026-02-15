# Planning Guide

A striking Art Déco landing page for Nebula Noir, a handmade alternative jewelry brand, blending 1920s-30s geometric elegance with modern dark aesthetics to showcase luxury craftsmanship and prepare for future e-commerce integration.

**Experience Qualities**:
1. **Opulent** - Luxurious geometric patterns, metallic accents, and sophisticated animations evoke the glamour of the Art Déco era
2. **Mysterious** - Dark, moody color palette with dramatic lighting effects creates an enigmatic atmosphere befitting alternative jewelry
3. **Refined** - Clean lines, symmetrical layouts, and precise typography communicate exceptional craftsmanship and attention to detail

**Complexity Level**: Content Showcase (information-focused)
This is a brand presentation landing page designed to establish visual identity and showcase the jewelry brand's aesthetic before shop functionality is added.

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

The design should evoke the glamorous sophistication of 1920s-30s Art Déco - think Great Gatsby elegance meets modern alternative fashion. Geometric symmetry, metallic accents, dramatic contrasts, and luxurious details communicate that this is not mass-produced jewelry but carefully crafted art pieces. The dark palette creates mystery and exclusivity, while clean lines and precise typography ensure professionalism suitable for future e-commerce.

## Color Selection

A monochromatic palette with metallic accents creates dramatic elegance and timeless sophistication.

- **Primary Color**: Deep Black `oklch(0.15 0 0)` - Represents mystery, luxury, and the alternative aesthetic; used for backgrounds and creating depth
- **Secondary Colors**: 
  - Soft Gray `oklch(0.55 0 0)` - Mid-tone for secondary text and subtle UI elements
  - Charcoal `oklch(0.25 0 0)` - Dark gray for cards and layered elements
  - Silver `oklch(0.85 0 0)` - Light gray for geometric patterns and dividers
- **Accent Color**: Pure White `oklch(0.98 0 0)` - Crisp white for primary text, borders, and geometric highlights to create sharp Art Déco contrast
- **Foreground/Background Pairings**:
  - Background Black (0.15): White text (0.98) - Ratio 12.5:1 ✓
  - Charcoal Cards (0.25): White text (0.98) - Ratio 10.8:1 ✓
  - Silver Accents (0.85): Deep Black text (0.15) - Ratio 12.5:1 ✓
  - Soft Gray (0.55): White text (0.98) - Ratio 4.9:1 ✓

## Font Selection

Typography should channel Art Déco's geometric precision and sophisticated elegance while maintaining modern readability.

- **Primary Font**: Playfair Display - Elegant serif with Art Déco sensibility for headings and brand name
- **Secondary Font**: Space Grotesk - Geometric sans-serif for body text and UI elements, echoes Art Déco's love of geometry

- **Typographic Hierarchy**:
  - Brand Name: Playfair Display Bold / 72px / Wide letter spacing (0.1em) / Uppercase
  - H1 (Section Headers): Playfair Display Bold / 48px / Medium letter spacing (0.05em)
  - H2 (Subsections): Space Grotesk Bold / 32px / Tight letter spacing
  - H3 (Card Titles): Space Grotesk Medium / 24px / Normal spacing
  - Body Text: Space Grotesk Regular / 16px / Line height 1.6 / Relaxed spacing
  - Small/Caption: Space Grotesk Light / 14px / Line height 1.5

## Animations

Animations should evoke Art Déco's geometric precision and the glamorous reveals of the era's cinema, with modern smoothness for a premium feel.

Key animation moments:
- Hero geometric patterns fade in with staggered delays (200-400ms intervals)
- Brand name letter-by-letter reveal with slight scale effect
- Section content slides up with fade on scroll intersection
- Hover states use subtle scale (1.02-1.05) with elegant easing
- Geometric frames draw in using clip-path or border animations
- Parallax scrolling on background patterns at 0.3-0.5 speed
- Smooth page transitions using ease-in-out curves mimicking vintage cinematography

## Component Selection

- **Components**:
  - Card: For product showcase items with custom Art Déco geometric overlays
  - Button: Primary CTAs with custom styling for sharp geometric edges
  - Input: Email capture field with clean lines and subtle focus states
  - Separator: Geometric dividers between sections using custom SVG patterns
  - Scroll Area: Smooth scrolling for long content sections
  
- **Customizations**:
  - Custom geometric SVG patterns for backgrounds (chevrons, zigzags, sunburst rays)
  - Art Déco frame components using CSS borders and pseudo-elements
  - Custom animated lines/dividers using gradient borders
  - Parallax scroll containers for depth
  - Custom hover overlays with geometric masks

- **States**:
  - Buttons: Rest (white border/text), Hover (filled white with black text + scale 1.03), Active (scale 0.98)
  - Cards: Rest (subtle border), Hover (elevated shadow + geometric frame appears + scale 1.02)
  - Inputs: Rest (gray border), Focus (white border + subtle glow), Filled (white text)
  - Links: Rest (white + underline), Hover (gray + thicker underline slide animation)

- **Icon Selection**:
  - Instagram: From Phosphor Icons, regular weight
  - Arrow/Chevron: For scroll indicators and navigation
  - Geometric shapes: Diamond, Triangle for decorative elements
  - Menu/Close: For potential mobile navigation

- **Spacing**:
  - Section padding: py-24 (desktop), py-16 (mobile)
  - Container max-width: 7xl (1280px)
  - Grid gaps: gap-8 (product grid), gap-6 (card internal)
  - Component spacing: space-y-12 (sections), space-y-6 (content blocks)
  - Micro spacing: p-6 (cards), px-8 py-3 (buttons)

- **Mobile**:
  - Hero: Reduced text size (brand name 48px → 36px), simplified geometric patterns
  - Product Grid: 1 column on mobile, 2 columns on tablet (md), 3 columns desktop (lg)
  - Navigation: Sticky top bar on mobile with hamburger if needed
  - Spacing: Reduced section padding (py-24 → py-12), smaller gaps
  - Typography: Scale down hierarchy (H1 48px → 32px, body 16px → 15px)
  - Touch targets: Minimum 44px for all interactive elements
  - Geometric patterns: Simplified or removed on smallest screens for clarity
