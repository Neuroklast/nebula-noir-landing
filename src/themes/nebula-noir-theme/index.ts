import Hero from './Hero'
import Navigation from './Navigation'
import Card from './Card'
import BackgroundEffects from './BackgroundEffects'
import SectionDivider from './SectionDivider'
import LoadingScreen from './LoadingScreen'
import './styles.css'

export const sparkTheme = {
  id: 'nebula-noir-theme',
  name: 'Nebula Noir - Cybergoth Industrial',
  description: 'Dark industrial chrome, CRT overlay, neon-violet glow. Visual class names stay; brand copy is Cybergoth / Industrial / Cyberpunk / Dark Alternative.',
  version: '1.0.0',
  author: 'Nebula Noir',
  
  colors: {
    primary: 'oklch(0.50 0.18 295)',
    accent: 'oklch(0.50 0.18 295)',
    background: 'oklch(0.08 0 0)',
    foreground: 'oklch(0.98 0 0)',
    card: 'oklch(0.10 0 0)',
    'card-foreground': 'oklch(0.98 0 0)',
    muted: 'oklch(0.20 0 0)',
    'muted-foreground': 'oklch(0.75 0 0)',
    border: 'oklch(0.35 0 0)',
    input: 'oklch(0.25 0 0)',
    ring: 'oklch(0.50 0.18 295)',
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
  },
  
  metadata: {
    tags: ['art-deco', 'gothic', 'cosmic', 'dark', 'elegant', 'luxury'],
    category: 'E-commerce',
    previewImage: '/preview-nebula-noir.png',
  }
}

export default sparkTheme

export {
  Hero,
  Navigation,
  Card,
  BackgroundEffects,
  SectionDivider,
  LoadingScreen,
}
