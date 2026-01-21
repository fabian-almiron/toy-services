# Customization Guide

Learn how to customize the look and feel of your website beyond just content updates.

## 🎨 Design Customization

### Colors

#### Primary Colors (Navy)

Edit `tailwind.config.ts`:

```typescript
primary: {
  DEFAULT: '#0A2540', // Main navy color
  dark: '#051220',    // Darker shade
  light: '#0F3558',   // Lighter shade
}
```

**Where it's used:**
- Navbar
- Headings
- Buttons (primary)
- Footer background

#### Accent Colors (Teal)

```typescript
accent: {
  DEFAULT: '#14B8A6', // Main teal color
  dark: '#0F9D8E',    // Darker shade
  light: '#2DD4BF',   // Lighter shade
}
```

**Where it's used:**
- CTA buttons
- Icons
- Links on hover
- Badges

#### Background Colors

```typescript
sand: {
  DEFAULT: '#F5F5F0', // Light neutral
  dark: '#E8E8DC',    // Slightly darker
}
```

**Where it's used:**
- Section backgrounds
- Card backgrounds
- Alternating sections

### Typography

#### Change Font Family

In `app/layout.tsx`:

```typescript
// Replace Inter with another Google Font
import { Roboto } from 'next/font/google';

const roboto = Roboto({ 
  weight: ['400', '700'],
  subsets: ['latin'] 
});

// Update the body tag
<body className={roboto.className}>
```

**Popular alternatives:**
- Montserrat (modern, geometric)
- Open Sans (clean, readable)
- Poppins (rounded, friendly)
- Lato (professional)

#### Change Font Sizes

In `app/globals.css`:

```css
h1 {
  @apply text-4xl md:text-5xl lg:text-6xl;
  /* Change to: */
  @apply text-3xl md:text-4xl lg:text-5xl; /* Smaller */
  @apply text-5xl md:text-6xl lg:text-7xl; /* Larger */
}
```

### Spacing

#### Change Section Padding

Find sections with `py-20` and adjust:

```tsx
// Current
<section className="py-20">

// Options
<section className="py-12"> // Less padding
<section className="py-16"> // Medium padding
<section className="py-24"> // More padding
<section className="py-32"> // Extra padding
```

#### Change Container Width

In `components/ui/Container.tsx`:

```typescript
sizeClasses = {
  sm: 'max-w-3xl',   // ~768px
  md: 'max-w-5xl',   // ~1024px
  lg: 'max-w-7xl',   // ~1280px (default)
  full: 'max-w-full', // No limit
};
```

### Borders & Corners

#### Change Border Radius

Global roundness can be adjusted:

```tsx
// Current rounded corners
className="rounded-xl" // Very rounded

// Options
className="rounded"     // Slightly rounded
className="rounded-lg"  // Medium rounded
className="rounded-2xl" // Extra rounded
className="rounded-none" // Sharp corners
```

### Shadows

#### Adjust Shadow Intensity

```tsx
// Current
className="shadow-sm"

// Options
className="shadow-none" // No shadow
className="shadow"      // Light shadow
className="shadow-md"   // Medium shadow
className="shadow-lg"   // Large shadow
className="shadow-xl"   // Extra large
```

## 🧭 Navigation

### Change Logo

In `components/layout/Navbar.tsx`:

**Option 1: Text-based (current)**
```tsx
<span className="text-xl font-bold text-primary">
  YOUR BUSINESS NAME
</span>
```

**Option 2: Image logo**
```tsx
<Image 
  src="/images/logo.png" 
  alt="Company Logo"
  width={200}
  height={60}
/>
```

### Rearrange Navigation Links

In `components/layout/Navbar.tsx`:

```typescript
const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/gallery', label: 'Gallery' },
  // Add, remove, or reorder as needed
];
```

### Change Navbar Behavior

#### Make it transparent on scroll

In `components/layout/Navbar.tsx`:

```tsx
// Change this:
className={`fixed top-0 left-0 right-0 z-50 ${
  isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-white'
}`}

// To this (transparent at top):
className={`fixed top-0 left-0 right-0 z-50 ${
  isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-transparent'
}`}
```

## 🏠 Home Page

### Reorder Sections

In `app/page.tsx`:

```tsx
// Current order
<Hero />
<Highlights />
<ServicesPreview />
<FeaturedGallery />
<ProcessSteps />
<Testimonials />
<FAQPreview />
<CTABand />

// Rearrange as needed - just move the components
```

### Remove a Section

Simply comment out or delete:

```tsx
// <ProcessSteps /> ← This section won't show
```

### Change Hero Background

In `components/home/Hero.tsx`:

**Add image background:**
```tsx
<section 
  className="relative bg-gradient-to-br from-primary to-primary-dark text-white py-24"
  style={{
    backgroundImage: 'url(/images/hero-bg.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>
  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black/50" />
  
  {/* Content stays the same */}
  <Container className="relative z-10">
    ...
  </Container>
</section>
```

## 🎯 Buttons

### Change Button Styles

In `components/ui/Button.tsx`:

**Adjust padding:**
```typescript
sizeClasses = {
  sm: 'px-4 py-2',  // Smaller
  md: 'px-6 py-3',  // Default
  lg: 'px-8 py-4',  // Larger
  xl: 'px-10 py-5', // Extra large (add this)
};
```

**Add new variant:**
```typescript
variantClasses = {
  primary: 'bg-primary text-white hover:bg-primary-light',
  secondary: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
  accent: 'bg-accent text-white hover:bg-accent-dark',
  ghost: 'text-primary hover:bg-primary/10', // New variant
};
```

## 📸 Gallery

### Change Grid Layout

In `components/GalleryGrid.tsx`:

```tsx
// Current: 3 columns on desktop
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

// Options:
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6"> // 2 columns
<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6"> // 4 columns
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> // Larger gaps
```

### Change Filter Pills Style

In `components/GalleryGrid.tsx`:

```tsx
// Change from pills to buttons
className={`px-4 py-2 rounded-full ...`} // Current
className={`px-4 py-2 rounded-lg ...`}   // Square buttons
className={`px-4 py-2 rounded ...`}      // Slightly rounded
```

## 📱 Footer

### Add Social Media Links

In `components/layout/Footer.tsx`:

Update the social media section:

```tsx
<a
  href="https://facebook.com/yourpage" // Add real URL
  className="text-gray-300 hover:text-accent"
  aria-label="Facebook"
  target="_blank"
  rel="noopener noreferrer"
>
  {/* Facebook SVG */}
</a>
```

### Change Footer Columns

Adjust the grid:

```tsx
// Current: 4 columns
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

// Options:
<div className="grid grid-cols-1 md:grid-cols-3 gap-8"> // 3 columns
<div className="grid grid-cols-1 md:grid-cols-2 gap-8"> // 2 columns
```

## 🎭 Animations

### Add More Animations

Install framer-motion:

```bash
npm install framer-motion
```

Example fade-in animation:

```tsx
'use client';
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Your content here
</motion.div>
```

### Adjust Transition Speed

In any component with transitions:

```tsx
// Current
className="transition-all duration-200"

// Options
className="transition-all duration-100" // Faster
className="transition-all duration-300" // Slower
className="transition-all duration-500" // Much slower
```

## 📐 Responsive Breakpoints

Tailwind breakpoints used:

- **sm**: 640px (mobile landscape)
- **md**: 768px (tablets)
- **lg**: 1024px (laptops)
- **xl**: 1280px (desktops)

Change any responsive class:

```tsx
// Mobile: 1 column, Tablet: 2 columns, Desktop: 3 columns
className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3"

// Adjust as needed:
className="grid-cols-1 md:grid-cols-3 lg:grid-cols-4" // Different breakpoints
```

## 🔤 Text & Copy

### Change Heading Styles

In `app/globals.css`:

```css
h1, h2, h3, h4, h5, h6 {
  @apply font-bold tracking-tight; /* Current */
  /* Change to: */
  @apply font-semibold tracking-normal; /* Less bold, more spacing */
  @apply font-black tracking-tighter;   /* Extra bold, tighter */
}
```

### Adjust Line Height

```tsx
// Current
<p className="leading-relaxed">

// Options
<p className="leading-tight">   // Less space
<p className="leading-normal">  // Default
<p className="leading-loose">   // More space
```

## 🖼️ Images

### Change Image Aspect Ratios

```tsx
// Current gallery images
className="aspect-[4/3]" // 4:3 ratio

// Options
className="aspect-square"  // 1:1 (square)
className="aspect-[16/9]" // 16:9 (widescreen)
className="aspect-[3/2]"  // 3:2 (landscape)
```

## ⚡ Performance

### Lazy Load More Aggressively

In any Image component:

```tsx
<Image
  loading="lazy"
  placeholder="blur" // Add blur placeholder
  blurDataURL="..." // Add blur data
/>
```

## 🎨 Quick Theme Changes

### Preset 1: Modern Blue
```typescript
primary: '#1E40AF',  // Bright blue
accent: '#10B981',   // Green
sand: '#F3F4F6',     // Light gray
```

### Preset 2: Elegant Purple
```typescript
primary: '#6B21A8',  // Purple
accent: '#EC4899',   // Pink
sand: '#FAF5FF',     // Light purple
```

### Preset 3: Bold Red
```typescript
primary: '#991B1B',  // Dark red
accent: '#F59E0B',   // Orange
sand: '#FEF2F2',     // Light red
```

---

## 💡 Tips

1. **Test changes locally** before deploying
2. **Use browser dev tools** to experiment with CSS
3. **Keep backups** before major customization
4. **Check mobile** after every change
5. **Maintain consistency** across all pages

Need help? Refer to:
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Next.js Docs](https://nextjs.org/docs)

---

**Happy customizing! 🎨**
