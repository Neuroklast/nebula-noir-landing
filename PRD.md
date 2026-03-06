# Planning Guide

A luxurious one-page e-commerce showcase for Nebula Noir, a handcrafted occult and alternative jewelry brand that fuses Art Deco geometry, cosmic aesthetics, and gothic culture into wearable art.

**Experience Qualities**:
1. **Mystical** - The interface evokes the mystery of cosmic phenomena and occult symbolism through atmospheric visuals and deliberate pacing
2. **Elegant** - Every element reflects Art Deco sophistication with geometric precision, creating a refined shopping experience worthy of handcrafted artifacts
3. **Unapologetic** - Bold, high-contrast design that doesn't shy away from darkness, celebrating alternative aesthetics with confidence

**Complexity Level**: Light Application (multiple features with basic state)
This is an e-commerce showcase with product browsing, cart management, and checkout flow - straightforward state management with persistent shopping cart data.

## Essential Features

### Product Catalog Display
- **Functionality**: Grid display of handcrafted jewelry pieces with high-quality imagery, pricing, and category filtering
- **Purpose**: Showcase the unique handmade products and allow customers to browse the collection
- **Trigger**: Automatically loads on page scroll to catalog section
- **Progression**: Page loads → Hero section appears → User scrolls → Product grid reveals with staggered animation → User filters by category (optional) → Products update
- **Success criteria**: All products visible with clear imagery, filtering works smoothly, mobile-responsive grid

### Shopping Cart System
- **Functionality**: Add products to cart, view cart summary, adjust quantities, remove items, persist cart between sessions
- **Purpose**: Enable customers to select multiple products before checkout
- **Trigger**: User clicks "Add to Cart" button on any product
- **Progression**: User clicks Add to Cart → Item appears in cart icon with count → User opens cart drawer → Reviews items → Adjusts quantities or removes items → Proceeds to checkout
- **Success criteria**: Cart persists on page reload, quantity adjustments work correctly, cart total calculates accurately

### Contact/Inquiry Form
- **Functionality**: Allow customers to send custom order requests or inquiries about products
- **Purpose**: Enable communication for custom work and special requests
- **Trigger**: User clicks contact button or scrolls to contact section
- **Progression**: User opens form → Fills in name, email, message → Submits → Receives confirmation toast → Form clears
- **Success criteria**: Form validates inputs, provides clear feedback, integrates with brand aesthetic

### About Brand Section
- **Functionality**: Immersive storytelling section explaining the Cosmic Art Deco Goth philosophy
- **Purpose**: Build brand connection and communicate the handcrafted, occult aesthetic values
- **Trigger**: User scrolls to about section
- **Progression**: User scrolls → About section enters viewport → Text and imagery fade in with Art Deco frame animations → User reads mission and values
- **Success criteria**: Content clearly communicates brand identity, animations enhance without distracting

## Edge Case Handling

- **Empty Cart Checkout** - Display message prompting user to add products before proceeding to checkout
- **Out of Stock Items** - Mark products as "Made to Order" since all pieces are handcrafted, show estimated production time
- **Form Validation Failures** - Highlight invalid fields with clear error messages in brand colors
- **Slow Image Loading** - Show skeleton loaders with Art Deco geometric patterns while images load
- **Mobile Navigation** - Collapsible menu with smooth drawer animation for small screens
- **Extreme Product Names** - Truncate long product titles elegantly with ellipsis, show full name on hover/tap

## Design Direction

The design should evoke the infinite void of space illuminated by celestial light, framed by the geometric precision of 1920s Art Deco, all wrapped in gothic darkness. Users should feel they're entering a sophisticated occult boutique where every element—from typography to transitions—reflects handcrafted luxury and nonconformist elegance.

## Color Selection

High-contrast noir palette with cosmic violet accents, creating dramatic visual hierarchy and mystical atmosphere.

- **Primary Color**: Void Black `oklch(0.05 0 0)` - The infinite darkness of space, used for main backgrounds to create dramatic contrast and luxury
- **Secondary Colors**: 
  - Starlight White `oklch(0.99 0 0)` - Pure celestial light for typography and Art Deco frame elements
  - Moon Silver `oklch(0.88 0 0)` - Metallic shimmer for secondary text and decorative accents
- **Accent Color**: Nebula Violet `oklch(0.45 0.15 300)` - Cosmic purple for CTAs, links, and highlights - draws attention like a nebula in the void
- **Foreground/Background Pairings**:
  - Void Black (oklch(0.05 0 0)): Starlight White text (oklch(0.99 0 0)) - Ratio 19.8:1 ✓
  - Nebula Violet (oklch(0.45 0.15 300)): Starlight White text (oklch(0.99 0 0)) - Ratio 5.2:1 ✓
  - Moon Silver (oklch(0.88 0 0)): Void Black text (oklch(0.05 0 0)) - Ratio 16.1:1 ✓

## Font Selection

Typography bridges Art Deco geometric elegance with modern clarity, creating hierarchy through the contrast between decorative display and clean body text.

- **Display Font**: Cinzel (Serif, geometric, elevated) - Already loaded in index.html
  - Captures Art Deco sophistication with strong geometric forms
  - Used for brand name, section headings, and product titles
- **Body Font**: Cormorant Garamond (Serif, elegant, readable) - Already loaded in index.html
  - Provides elegance while maintaining excellent readability
  - Used for descriptions, prices, and body copy

**Typographic Hierarchy**:
- H1 (Brand Logo): Cinzel Bold / 48px / Tracking +0.15em / All-caps
- H2 (Section Titles): Cinzel Semibold / 36px / Tracking +0.12em / All-caps  
- H3 (Product Names): Cinzel Medium / 24px / Tracking +0.08em
- Body (Descriptions): Cormorant Garamond Regular / 18px / Line-height 1.6
- Small (Metadata): Cormorant Garamond Light / 14px / Moon Silver color

## Animations

Animations should feel like celestial movements—slow, inevitable, mysterious. Art Deco geometric frames draw in like constellations forming, products emerge from darkness like artifacts revealed by moonlight, and interactions pulse with cosmic energy.

- **Page Load**: Hero section fades in from void with Art Deco frame drawing animation (stroke-dashoffset)
- **Scroll Reveals**: Products and sections fade up from darkness with staggered delays (0.1s between items)
- **Hover States**: Products glow with subtle nebula-violet aura, scale slightly (1.02) to suggest floating
- **Cart Interactions**: Drawer slides from right with ease-out, items fade in sequentially
- **Button Presses**: Quick scale down (0.98) on click, cosmic violet glow expands
- **Background**: Subtle slow-moving gradient shift in void background to simulate nebula movement (60s duration)
- **Art Deco Corners**: Geometric corner accents fade in and rotate 360° on cards and forms, with subtle scaling
- **Art Deco Dividers**: Animated section dividers with drawing lines and central geometric shapes that expand
- **Geometric Expand**: Elements reveal with clip-path polygon animation from center outward
- **Mechanical Slides**: Left/right slide animations with scaling for authentic Art Deco mechanical feel
- **Card Hover Effects**: Gradient overlays that fade in on hover with Art Deco geometric patterns
- **Glow Pulse**: Subtle pulsing glow effects on accent elements and buttons (4s duration)
- **Button Hover**: Expanding border frames on buttons that grow outward on hover

## Component Selection

**Components**: 
- **Card** - Product display with image, title, price, description. Modified with sharp corners (radius: 0), Art Deco border treatment
- **Button** - Primary CTAs use Nebula Violet with white text, sharp corners, uppercase Cinzel font
- **Sheet/Drawer** - Shopping cart slides from right side, black background with violet accents
- **Dialog** - Checkout flow and custom order forms, centered with Art Deco frame overlay
- **Badge** - Category tags and "Made to Order" labels with minimal styling
- **Input/Textarea** - Contact forms with underline-only borders (no rounded corners), violet focus state
- **Separator** - Art Deco geometric dividers between sections (stylized lines and moon phase symbols)
- **Scroll Area** - Cart item list with custom scrollbar styled to match theme
- **Toast (Sonner)** - Notifications for cart actions with dark theme and violet accents

**Customizations**:
- Art Deco geometric frames as SVG overlays on hero and section dividers
- Custom moon phase bullet points for lists
- Metallic shimmer effect on hover states using CSS gradients
- Custom scrollbar with violet track on dark background

**States**:
- Buttons: Default (violet), Hover (lighter violet glow + scale), Active (darker violet + scale down), Disabled (dark gray)
- Inputs: Default (underlined white), Focus (violet underline glow), Error (red underline), Filled (maintained violet underline)
- Cards: Default (subtle border), Hover (violet glow shadow + lift), Selected (violet border)
- Cart Icon: Empty (white), Filled (violet with count badge), Pulsing (when item added)

**Icon Selection**: 
- Shopping cart: ShoppingCart from phosphor-icons
- Close/Remove: X from phosphor-icons
- Plus/Minus: Plus, Minus from phosphor-icons
- Moon phases: MoonStars for decorative elements
- Navigation: List for mobile menu
- Contact: EnvelopeSimple from phosphor-icons

**Spacing**:
- Sections: py-24 on desktop, py-16 on mobile
- Cards: p-6 for product cards, p-8 for dialogs
- Buttons: px-8 py-3 for primary, px-4 py-2 for secondary
- Grid gaps: gap-8 for product grid on desktop, gap-4 on mobile
- Container max-width: max-w-7xl with px-6 horizontal padding

**Mobile**:
- Product grid: 1 column on mobile (<640px), 2 columns on tablet (640-1024px), 3-4 columns on desktop
- Hero text: Reduce font sizes by 30% on mobile, stack elements vertically
- Navigation: Hamburger menu opening as full-screen drawer with large touch targets
- Cart drawer: Full screen on mobile, side drawer on desktop
- Spacing: Reduce section padding to py-12 on mobile, reduce gap values by half
- Touch targets: Minimum 44px height for all interactive elements
