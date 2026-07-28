# Utsav Sutra Website — Detailed Implementation Plan

**Document Version:** 1.0  
**Date:** July 27, 2026  
**Project:** Utsav Sutra Wedding Planner Website  
**Tagline:** *We Plan. You Celebrate.*  
**References:** [Afterlife Events](https://afterlifeeventsandentertainment.com/) | [ABP OneStop Weddings](https://www.abponestopweddings.com/)

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Project Scope](#2-project-scope)
3. [Technology Stack](#3-technology-stack)
4. [Project Structure](#4-project-structure)
5. [Design System](#5-design-system)
6. [Routing & Navigation](#6-routing--navigation)
7. [Data Models & Schemas](#7-data-models--schemas)
8. [Page-by-Page Implementation](#8-page-by-page-implementation)
9. [Component Specifications](#9-component-specifications)
10. [Budget Calculator Logic](#10-budget-calculator-logic)
11. [Forms & Lead Capture](#11-forms--lead-capture)
12. [Gallery & Media](#12-gallery--media)
13. [Animations & Interactions](#13-animations--interactions)
14. [SEO & Meta](#14-seo--meta)
15. [Performance Requirements](#15-performance-requirements)
16. [Environment Variables](#16-environment-variables)
17. [Deployment Pipeline](#17-deployment-pipeline)
18. [Build Phases & Task Breakdown](#18-build-phases--task-breakdown)
19. [Asset Checklist](#19-asset-checklist)
20. [Testing Checklist](#20-testing-checklist)
21. [Out of Scope](#21-out-of-scope)

---

## 1. Executive Summary

Utsav Sutra is a Kolkata-based wedding planning company (founded 2024) offering end-to-end wedding services at every budget. This document defines the complete technical implementation for a 5-page marketing and lead-generation website built with React 19, Vite 7, Tailwind CSS 4, and React Router 7.

**Primary goals:**
- Showcase 12+ services and portfolio work
- Capture leads via quick quote forms and budget calculator
- Drive WhatsApp and phone inquiries
- Mobile-first, premium wedding aesthetic

**Primary references adopted:**
- **Afterlife Events:** Stats bar, packages, 6-step process, full quote form, testimonials
- **ABP OneStop Weddings:** Simple nav, hero mini-form, budget calculator, gallery, testimonial carousel, video section

**Not building:** Vendor marketplace (WedMeGood-style), user accounts, payments, CMS (Phase 2).

---

## 2. Project Scope

### 2.1 In Scope (MVP)

| Deliverable | Description |
|-------------|-------------|
| Home page | 15 sections (see Section 8.1) |
| Services page | 12 service cards from portfolio PDF |
| Gallery page | Filterable gallery with lightbox |
| Testimonials page | Carousel + video section |
| Book Us page | Full inquiry form |
| Budget calculator | Interactive estimator with lead capture |
| WhatsApp float | Persistent CTA button |
| Responsive design | Mobile, tablet, desktop breakpoints |
| SEO basics | Meta tags, Open Graph, sitemap |
| Form submission | EmailJS to utsavsutraevents@gmail.com |
| Vercel deployment | Production build + SSL |

### 2.2 Placeholder Content (Client to provide later)

- Logo (PNG/SVG) — use text logo interim
- High-res portfolio photos — use PDF samples interim
- Client testimonials — use 4 placeholder entries
- Confirmed package pricing — use proposed tiers
- Team/founder photo — omit or placeholder
- Instagram video embeds — placeholder thumbnails

---

## 3. Technology Stack

### 3.1 Core Dependencies

```json
{
  "dependencies": {
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "react-router-dom": "^7.0.0",
    "react-hook-form": "^7.54.0",
    "@hookform/resolvers": "^3.9.0",
    "zod": "^3.24.0",
    "framer-motion": "^11.15.0",
    "@emailjs/browser": "^4.4.0",
    "lucide-react": "^0.469.0",
    "clsx": "^2.1.1",
    "tailwind-merge": "^2.6.0"
  },
  "devDependencies": {
    "vite": "^6.0.0",
    "@vitejs/plugin-react": "^4.3.0",
    "typescript": "^5.7.0",
    "tailwindcss": "^4.0.0",
    "@tailwindcss/vite": "^4.0.0",
    "@types/react": "^19.0.0",
    "@types/react-dom": "^19.0.0"
  }
}
```

### 3.2 Tooling

| Tool | Purpose |
|------|---------|
| Vite 6 | Dev server, HMR, production build |
| TypeScript 5.7 | Type safety across components and data |
| Tailwind CSS 4 | Utility-first styling via `@tailwindcss/vite` |
| ESLint | Code quality (Vite default config) |
| Vercel CLI | Deployment |

### 3.3 Initialization Commands

```bash
cd "c:\Users\haslb\OneDrive\Desktop\Utsav Sutra"
npm create vite@latest . -- --template react-ts
npm install react-router-dom react-hook-form @hookform/resolvers zod framer-motion @emailjs/browser lucide-react clsx tailwind-merge
npm install -D tailwindcss @tailwindcss/vite
```

---

## 4. Project Structure

```
Utsav Sutra/
├── public/
│   ├── favicon.ico
│   ├── robots.txt
│   ├── sitemap.xml
│   └── images/
│       ├── logo-placeholder.svg
│       ├── hero-bg.webp
│       ├── gallery/
│       │   ├── garland-01.webp
│       │   ├── garland-02.webp
│       │   ├── decor-01.webp
│       │   ├── decor-02.webp
│       │   └── decor-03.webp
│       └── partners/
│           ├── boutique-fashion.webp
│           └── pixel-solution.webp
├── src/
│   ├── main.tsx
│   ├── App.tsx
│   ├── index.css
│   ├── vite-env.d.ts
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── WhatsAppFloat.tsx
│   │   │   └── Layout.tsx
│   │   ├── home/
│   │   │   ├── Hero.tsx
│   │   │   ├── StatsBar.tsx
│   │   │   ├── AboutSnippet.tsx
│   │   │   ├── ServicesPreview.tsx
│   │   │   ├── BudgetCalculator.tsx
│   │   │   ├── Packages.tsx
│   │   │   ├── PlanningProcess.tsx
│   │   │   ├── GalleryPreview.tsx
│   │   │   ├── WhyChooseUs.tsx
│   │   │   ├── Partners.tsx
│   │   │   ├── TestimonialsSlider.tsx
│   │   │   ├── VideoGallery.tsx
│   │   │   └── QuoteForm.tsx
│   │   ├── services/
│   │   │   ├── ServiceCard.tsx
│   │   │   └── ServiceDetailModal.tsx
│   │   ├── gallery/
│   │   │   ├── GalleryGrid.tsx
│   │   │   ├── GalleryFilter.tsx
│   │   │   └── Lightbox.tsx
│   │   ├── testimonials/
│   │   │   ├── TestimonialCard.tsx
│   │   │   └── TestimonialCarousel.tsx
│   │   └── shared/
│   │       ├── Button.tsx
│   │       ├── SectionHeading.tsx
│   │       ├── Input.tsx
│   │       ├── Select.tsx
│   │       ├── Textarea.tsx
│   │       ├── Checkbox.tsx
│   │       ├── Card.tsx
│   │       ├── ScrollReveal.tsx
│   │       └── SEOHead.tsx
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── Services.tsx
│   │   ├── Gallery.tsx
│   │   ├── Testimonials.tsx
│   │   ├── BookUs.tsx
│   │   └── NotFound.tsx
│   ├── data/
│   │   ├── site.ts
│   │   ├── services.ts
│   │   ├── packages.ts
│   │   ├── process.ts
│   │   ├── testimonials.ts
│   │   ├── gallery.ts
│   │   ├── partners.ts
│   │   └── whyChooseUs.ts
│   ├── hooks/
│   │   ├── useScrollTo.ts
│   │   ├── useMediaQuery.ts
│   │   └── useFormSubmit.ts
│   ├── lib/
│   │   ├── utils.ts
│   │   ├── budgetCalculator.ts
│   │   ├── emailService.ts
│   │   └── constants.ts
│   ├── types/
│   │   ├── service.ts
│   │   ├── package.ts
│   │   ├── testimonial.ts
│   │   ├── gallery.ts
│   │   └── form.ts
│   └── context/
│       └── QuoteContext.tsx
├── docs/
│   └── Utsav-Sutra-Implementation-Plan.md
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── vite.config.ts
├── vercel.json
└── .env.example
```

---

## 5. Design System

### 5.1 Color Tokens

```css
/* src/index.css */
@theme {
  --color-primary: #7B1E3A;
  --color-primary-dark: #5C1529;
  --color-primary-light: #9E2A4D;
  --color-accent: #C9A84C;
  --color-accent-light: #E0C878;
  --color-accent-dark: #A88A3A;
  --color-background: #FFF8F0;
  --color-background-alt: #F5EDE0;
  --color-surface: #FFFFFF;
  --color-text: #2D2D2D;
  --color-text-muted: #6B6B6B;
  --color-border: #E8DDD0;
  --color-whatsapp: #25D366;
}
```

### 5.2 Typography

| Element | Font | Weight | Size (mobile → desktop) |
|---------|------|--------|-------------------------|
| H1 (Hero) | Playfair Display | 700 | 2.25rem → 4rem |
| H2 (Section) | Playfair Display | 600 | 1.75rem → 2.5rem |
| H3 (Card) | Playfair Display | 600 | 1.25rem → 1.5rem |
| Body | Inter | 400 | 1rem → 1.125rem |
| Small/Caption | Inter | 400 | 0.875rem |
| Button | Inter | 600 | 0.875rem → 1rem |
| Nav links | Inter | 500 | 0.875rem → 1rem |

**Font loading (index.html):**
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@600;700&display=swap" rel="stylesheet">
```

### 5.3 Spacing Scale

| Token | Value | Usage |
|-------|-------|-------|
| section-py | py-16 md:py-24 | Section vertical padding |
| container | max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 | Page container |
| card-gap | gap-6 md:gap-8 | Grid gaps |
| card-padding | p-6 md:p-8 | Card internal padding |

### 5.4 Breakpoints

| Name | Min Width | Target |
|------|-----------|--------|
| sm | 640px | Large phones |
| md | 768px | Tablets |
| lg | 1024px | Small laptops |
| xl | 1280px | Desktops |
| 2xl | 1536px | Large screens |

### 5.5 Component Style Rules

- **Buttons:** `rounded-full` for primary CTAs, `rounded-lg` for secondary
- **Cards:** `rounded-2xl shadow-md hover:shadow-xl transition-shadow`
- **Images:** `rounded-xl object-cover`
- **Sections:** Alternate `bg-background` and `bg-background-alt`
- **Gold accent line:** `h-1 w-16 bg-accent mx-auto` under section headings

---

## 6. Routing & Navigation

### 6.1 Route Map

```tsx
// src/App.tsx
<Routes>
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="services" element={<Services />} />
    <Route path="gallery" element={<Gallery />} />
    <Route path="testimonials" element={<Testimonials />} />
    <Route path="book-us" element={<BookUs />} />
    <Route path="*" element={<NotFound />} />
  </Route>
</Routes>
```

### 6.2 Navbar Links

| Label | Path | Style |
|-------|------|-------|
| Home | `/` | Standard link |
| Services | `/services` | Standard link |
| Gallery | `/gallery` | Standard link |
| Testimonials | `/testimonials` | Standard link |
| Book Us Now | `/book-us` | Gold filled button |

### 6.3 Navbar Behavior

- **Desktop:** Horizontal links, sticky top, `bg-surface/95 backdrop-blur-sm`
- **Mobile:** Hamburger menu, slide-down overlay, full-width CTA button
- **Scroll:** Add `shadow-md` when `scrollY > 50`
- **Active state:** `text-primary border-b-2 border-accent` on current route

### 6.4 Footer Links

```
Column 1: Logo + tagline + social icons (Instagram, WhatsApp)
Column 2: Quick Links (Home, Services, Gallery, Testimonials, Book Us)
Column 3: Contact (+91 8334816333, +91 8240017974, utsavsutraevents@gmail.com)
Column 4: Partners (@boutiquefashionshop, @pixelsolutiondigitalmarketing)
Bottom bar: © 2026 Utsav Sutra. All rights reserved.
```

---

## 7. Data Models & Schemas

### 7.1 Site Config (`src/data/site.ts`)

```typescript
export const siteConfig = {
  name: "Utsav Sutra",
  tagline: "We Plan. You Celebrate.",
  founded: 2024,
  description: "Kolkata-based wedding planning company making beautiful, well-planned weddings accessible at every budget.",
  contact: {
    phones: ["+918334816333", "+918240017974"],
    phonesDisplay: ["+91 8334816333", "+91 8240017974"],
    email: "utsavsutraevents@gmail.com",
    whatsapp: "918334816333",
    instagram: "https://instagram.com/utsavsutraevents",
    instagramHandle: "@utsavsutraevents",
  },
  seo: {
    title: "Utsav Sutra | Wedding Planner in Kolkata",
    description: "End-to-end wedding planning, decor, catering, photography & more. Beautiful weddings at every budget. We Plan. You Celebrate.",
    keywords: "wedding planner kolkata, wedding decorator, bridal makeup, mehendi, haldi, sangeet, utsav sutra",
    ogImage: "/images/og-image.webp",
  },
};
```

### 7.2 Service Type (`src/types/service.ts`)

```typescript
export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: string; // lucide icon name
  category: ServiceCategory;
  features: string[];
  image: string;
}

export type ServiceCategory =
  | "planning"
  | "decor"
  | "bridal"
  | "photography"
  | "events"
  | "catering"
  | "transport"
  | "essentials";
```

### 7.3 Services Data (12 entries from PDF)

| ID | Title | Category |
|----|-------|----------|
| wedding-rituals | Wedding Rituals & Planning | planning |
| wedding-decor | Wedding Décor & Styling | decor |
| bridal-couture | Bridal Couture | bridal |
| bridal-beauty | Bridal Beauty | bridal |
| photography | Photography & Films | photography |
| totto-gifts | Totto & Luxury Gifts | essentials |
| mehendi-haldi | Mehendi, Haldi & Sangeet | events |
| catering | Catering & Hospitality | catering |
| bridal-car | Bridal Car Services | transport |
| wedding-essentials | Wedding Essentials | essentials |
| boutique-fashion | Boutique Fashion | bridal |
| pixel-solution | Pixel Solution (Digital) | essentials |

### 7.4 Package Type (`src/types/package.ts`)

```typescript
export interface Package {
  id: string;
  name: string;
  priceRange: string;
  priceMin: number;
  priceMax: number | null;
  description: string;
  features: string[];
  highlighted: boolean;
  cta: string;
}
```

### 7.5 Testimonial Type

```typescript
export interface Testimonial {
  id: string;
  couple: string;
  event: string;
  location: string;
  quote: string;
  image?: string;
}
```

### 7.6 Gallery Type

```typescript
export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  category: "garland" | "decor" | "all";
  width: number;
  height: number;
}
```

### 7.7 Form Schemas (Zod)

```typescript
// Quick quote (hero)
const quickQuoteSchema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z.string().regex(/^[6-9]\d{9}$/, "Enter valid 10-digit mobile"),
});

// Full quote (book us)
const fullQuoteSchema = z.object({
  name: z.string().min(2),
  phone: z.string().regex(/^[6-9]\d{9}$/),
  email: z.string().email().optional().or(z.literal("")),
  eventDate: z.string().optional(),
  location: z.string().min(2),
  budget: z.enum(["1.5-4", "5-12", "15+", "custom"]),
  services: z.array(z.string()).min(1, "Select at least one service"),
  message: z.string().optional(),
});

// Budget calculator
const budgetCalcSchema = z.object({
  guestCount: z.enum(["50-100", "100-200", "200-500", "500+"]),
  eventDays: z.enum(["1", "2", "3", "full"]),
  services: z.array(z.string()).min(1),
  location: z.string().min(2),
  name: z.string().min(2),
  phone: z.string().regex(/^[6-9]\d{9}$/),
});
```

---

## 8. Page-by-Page Implementation

### 8.1 Home Page (`src/pages/Home.tsx`)

Renders sections in this exact order:

| # | Section | Component | Background |
|---|---------|-----------|------------|
| 1 | Hero + mini form | `Hero` | Dark overlay on image |
| 2 | Stats bar | `StatsBar` | `bg-primary text-white` |
| 3 | About snippet | `AboutSnippet` | `bg-background` |
| 4 | Services preview (6 cards) | `ServicesPreview` | `bg-background-alt` |
| 5 | Budget calculator | `BudgetCalculator` | `bg-primary text-white` |
| 6 | Packages (3 tiers) | `Packages` | `bg-background` |
| 7 | Planning process (6 steps) | `PlanningProcess` | `bg-background-alt` |
| 8 | Gallery preview (6 images) | `GalleryPreview` | `bg-background` |
| 9 | Why choose us | `WhyChooseUs` | `bg-background-alt` |
| 10 | Partners | `Partners` | `bg-background` |
| 11 | Testimonials slider | `TestimonialsSlider` | `bg-background-alt` |
| 12 | Video gallery | `VideoGallery` | `bg-background` |
| 13 | Full quote form | `QuoteForm` | `bg-primary text-white` |
| — | Footer | `Footer` (in Layout) | `bg-primary-dark` |

### 8.2 Services Page

- **Hero banner:** "Our Services" + subtitle
- **Filter tabs:** All | Planning | Décor | Bridal | Photography | Events | Catering | Transport | Essentials
- **Grid:** 3 columns desktop, 2 tablet, 1 mobile
- **Each card:** Image, icon, title, short description, feature bullets (3 max), "Get Quote" button → `/book-us?service={id}`
- **Bottom CTA:** "Can't find what you need? Contact us" → Book Us

### 8.3 Gallery Page

- **Hero:** "Our Work" + "Every wedding we plan is unique, elegant and tailored"
- **Filter pills:** All | Garland | Décor
- **Masonry grid:** CSS columns or uniform grid with `aspect-square`
- **Lightbox:** Click image → fullscreen overlay, prev/next arrows, ESC to close, swipe on mobile
- **CTA:** "Plan Your Dream Wedding" → Book Us

### 8.4 Testimonials Page

- **Hero:** "What Our Clients Say"
- **Carousel:** Auto-play 5s, pause on hover, dots navigation
- **Grid below:** All testimonial cards (static)
- **Video section:** 2-3 embedded Instagram reels or YouTube iframes (placeholder until client provides)
- **CTA:** Get Free Quote

### 8.5 Book Us Page

- **Hero:** "Book Your Free Consultation"
- **Left column:** Contact info, phone click-to-call, WhatsApp link, email, Instagram
- **Right column:** Full quote form (all fields)
- **Pre-fill:** Read URL params `?service=`, `?budget=` from calculator/navigation

### 8.6 404 Page

- Simple centered message, link back to Home

---

## 9. Component Specifications

### 9.1 Navbar (`Navbar.tsx`)

**Props:** None (uses `useLocation`, `useState`)

**State:**
- `isOpen: boolean` — mobile menu
- `isScrolled: boolean` — shadow on scroll

**Structure:**
```
<header>
  <div container>
    <Link logo />
    <nav desktop links />
  <Button Book Us Now />
    <button hamburger mobile />
  </div>
  <mobile menu overlay />
</header>
```

### 9.2 Hero (`Hero.tsx`)

**Layout:** Full viewport min-h-[90vh], background image with `bg-black/50` overlay

**Content:**
- Subtitle: "Welcome to Utsav Sutra"
- H1: "We Plan. You Celebrate."
- Paragraph: 1-line value prop
- **Mini form (ABP style):** Name input + Phone input + "Get a Free Quote" button
- Secondary CTA: "Explore Services" → scroll to `#services`

**Form submit:** EmailJS template `quick_quote`, redirect toast success

### 9.3 StatsBar (`StatsBar.tsx`)

4 stat items in a row:

| Stat | Value | Label |
|------|-------|-------|
| 1 | 12+ | Services Offered |
| 2 | 2024 | Founded |
| 3 | 100% | Personalized Planning |
| 4 | Every Budget | Welcome |

**Animation:** Count-up on scroll into view (optional Framer Motion)

### 9.4 BudgetCalculator (`BudgetCalculator.tsx`)

See Section 10 for algorithm.

**UI:**
- Left: Form inputs
- Right: Result card with estimated range + "Get Detailed Quote" button
- On result CTA: Navigate to `/book-us` with query params

### 9.5 Packages (`Packages.tsx`)

3 cards in grid, middle card `highlighted: true` with gold border + "Most Popular" badge

### 9.6 PlanningProcess (`PlanningProcess.tsx`)

6 steps in horizontal timeline (desktop) or vertical (mobile):

1. Consultation & Concept
2. Budget & Vendor Planning
3. Design & Theme Finalization
4. Guest & Hospitality Planning
5. Production & Execution
6. Post-Event Wrap-Up

### 9.7 WhatsAppFloat (`WhatsAppFloat.tsx`)

- Fixed `bottom-6 right-6 z-50`
- Green circle with WhatsApp icon
- Link: `https://wa.me/918334816333?text=Hi%20Utsav%20Sutra%2C%20I%27d%20like%20to%20inquire%20about%20wedding%20planning.`
- Pulse animation on first load (subtle)

### 9.8 Button (`Button.tsx`)

```typescript
interface ButtonProps {
  variant: "primary" | "secondary" | "outline" | "ghost";
  size: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
}
```

**Variants:**
- primary: `bg-accent text-primary-dark hover:bg-accent-light`
- secondary: `bg-primary text-white hover:bg-primary-dark`
- outline: `border-2 border-accent text-accent hover:bg-accent hover:text-primary-dark`

### 9.9 Lightbox (`Lightbox.tsx`)

**Props:**
```typescript
interface LightboxProps {
  images: GalleryItem[];
  currentIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}
```

**Behavior:**
- `body overflow: hidden` when open
- Keyboard: ArrowLeft, ArrowRight, Escape
- Touch: swipe left/right on mobile
- Click outside image to close

---

## 10. Budget Calculator Logic

### 10.1 File: `src/lib/budgetCalculator.ts`

```typescript
const BASE_COSTS = {
  guestCount: {
    "50-100": 150000,
    "100-200": 300000,
    "200-500": 600000,
    "500+": 1000000,
  },
  eventDays: {
    "1": 1.0,
    "2": 1.6,
    "3": 2.2,
    "full": 2.8,
  },
  serviceMultipliers: {
    "decor": 0.25,
    "catering": 0.30,
    "photography": 0.15,
    "makeup": 0.08,
    "mehendi-haldi": 0.12,
    "car": 0.05,
    "totto-gifts": 0.05,
    "dj-anchor": 0.08,
    "priest": 0.02,
  },
  locationMultiplier: {
    kolkata: 1.0,
    "west-bengal": 1.1,
    "other-india": 1.3,
    destination: 1.8,
  },
};

export function calculateBudget(input: BudgetCalcInput): { min: number; max: number } {
  const base = BASE_COSTS.guestCount[input.guestCount];
  const dayMultiplier = BASE_COSTS.eventDays[input.eventDays];
  const serviceAdd = input.services.reduce(
    (sum, s) => sum + base * (BASE_COSTS.serviceMultipliers[s] ?? 0),
    0
  );
  const locKey = normalizeLocation(input.location);
  const locMultiplier = BASE_COSTS.locationMultiplier[locKey] ?? 1.2;

  const total = (base + serviceAdd) * dayMultiplier * locMultiplier;
  const min = Math.round(total * 0.85 / 50000) * 50000;
  const max = Math.round(total * 1.15 / 50000) * 50000;

  return { min, max };
}

export function formatIndianCurrency(amount: number): string {
  if (amount >= 10000000) return `₹${(amount / 10000000).toFixed(1)} Cr`;
  if (amount >= 100000) return `₹${(amount / 100000).toFixed(1)} L`;
  return `₹${amount.toLocaleString("en-IN")}`;
}
```

### 10.2 Calculator UI Fields

| Field | Type | Options |
|-------|------|---------|
| Guest Count | Select | 50-100, 100-200, 200-500, 500+ |
| Event Duration | Select | 1 Day, 2 Days, 3 Days, Full Wedding (5+ events) |
| Services | Checkbox group | Décor, Catering, Photography, Makeup, Mehendi/Haldi/Sangeet, Car, Totto & Gifts, DJ & Anchor, Priest |
| Location | Text input | Free text, normalized to multiplier |
| Name | Text | Required for lead capture |
| Phone | Tel | Required, 10-digit validation |

### 10.3 Result Display

```
Your Estimated Wedding Budget
₹4.5 Lakh — ₹6.5 Lakh
*This is an approximate range. Get a personalized quote for exact pricing.
[Get Detailed Quote →]
```

---

## 11. Forms & Lead Capture

### 11.1 EmailJS Setup

**Templates:**

| Template ID | Used In | Fields |
|-------------|---------|--------|
| `quick_quote` | Hero mini form | name, phone |
| `full_quote` | Book Us, QuoteForm | all fields |
| `budget_calc` | BudgetCalculator | all calc fields + result |

**Service file (`src/lib/emailService.ts`):**

```typescript
import emailjs from "@emailjs/browser";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export async function sendEmail(templateId: string, data: Record<string, string>) {
  return emailjs.send(SERVICE_ID, templateId, data, PUBLIC_KEY);
}
```

### 11.2 Form UX States

| State | UI |
|-------|-----|
| idle | Normal form |
| submitting | Button disabled, spinner |
| success | Green toast: "Thank you! We'll contact you within 24 hours." |
| error | Red toast: "Something went wrong. Please call us directly." |

### 11.3 QuoteContext (`src/context/QuoteContext.tsx`)

Stores pre-filled data from budget calculator and service navigation:

```typescript
interface QuotePrefill {
  service?: string;
  budgetMin?: number;
  budgetMax?: number;
  guestCount?: string;
  eventDays?: string;
  services?: string[];
  location?: string;
}
```

Book Us page reads from context + URL search params.

---

## 12. Gallery & Media

### 12.1 Image Requirements

| Asset | Dimensions | Format | Max Size |
|-------|------------|--------|----------|
| Hero background | 1920×1080 | WebP | 200KB |
| Service card | 800×600 | WebP | 80KB |
| Gallery item | 1200×1200 | WebP | 150KB |
| OG image | 1200×630 | WebP/JPG | 100KB |
| Logo | SVG or 512×512 PNG | SVG/PNG | 20KB |

### 12.2 Lazy Loading

```tsx
<img src={src} alt={alt} loading="lazy" decoding="async" className="..." />
```

### 12.3 Placeholder Strategy

Until client provides assets:
- Hero: Unsplash wedding decor image (licensed) or gradient placeholder
- Gallery: Extract images from PDF pages 17-19
- Service cards: Category-based gradient + icon

### 12.4 Video Gallery

```tsx
// Placeholder structure — replace with real Instagram embed URLs
const videos = [
  { id: "1", title: "Wedding Decor Showcase", embedUrl: "", thumbnail: "/images/video-thumb-1.webp" },
  { id: "2", title: "Mehendi Ceremony", embedUrl: "", thumbnail: "/images/video-thumb-2.webp" },
];
```

Use click-to-open modal with iframe when embedUrl is available.

---

## 13. Animations & Interactions

### 13.1 Framer Motion Patterns

**ScrollReveal wrapper:**
```tsx
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-50px" }}
  transition={{ duration: 0.6, ease: "easeOut" }}
>
```

**Apply to:** Section headings, cards, stats, process steps

### 13.2 Micro-interactions

| Element | Interaction |
|---------|-------------|
| Buttons | `hover:scale-105 active:scale-95 transition-transform` |
| Service cards | `hover:-translate-y-1` |
| Gallery images | `hover:scale-105` with overflow hidden |
| Nav links | Underline slide-in on hover |
| WhatsApp float | Subtle pulse ring animation |

### 13.3 Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 14. SEO & Meta

### 14.1 Per-Page Meta

| Page | Title | Description |
|------|-------|-------------|
| Home | Utsav Sutra \| Wedding Planner in Kolkata | We Plan. You Celebrate. End-to-end wedding planning at every budget. |
| Services | Our Services \| Utsav Sutra | Wedding decor, catering, photography, mehendi, haldi, bridal couture & more. |
| Gallery | Our Work \| Utsav Sutra | Browse our wedding decor, garland designs and celebration portfolio. |
| Testimonials | Client Reviews \| Utsav Sutra | Hear from couples who trusted Utsav Sutra for their special day. |
| Book Us | Book Free Consultation \| Utsav Sutra | Get a personalized wedding quote. Call +91 8334816333. |

### 14.2 Structured Data (JSON-LD)

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Utsav Sutra",
  "description": "Wedding planning and event management in Kolkata",
  "telephone": "+918334816333",
  "email": "utsavsutraevents@gmail.com",
  "url": "https://utsavsutra.com",
  "sameAs": ["https://instagram.com/utsavsutraevents"],
  "priceRange": "₹₹",
  "areaServed": "Kolkata, West Bengal, India"
}
```

### 14.3 robots.txt & sitemap.xml

```
# public/robots.txt
User-agent: *
Allow: /
Sitemap: https://utsavsutra.com/sitemap.xml
```

---

## 15. Performance Requirements

| Metric | Target |
|--------|--------|
| Lighthouse Performance | ≥ 90 |
| Lighthouse Accessibility | ≥ 95 |
| Lighthouse SEO | ≥ 95 |
| LCP | < 2.5s |
| CLS | < 0.1 |
| FID/INP | < 200ms |
| Total page weight (Home) | < 2MB |
| JS bundle (gzipped) | < 150KB |

### 15.1 Optimization Techniques

- Code splitting via React Router lazy imports for inner pages
- WebP images with fallback
- `font-display: swap` for Google Fonts
- Preload hero image: `<link rel="preload" as="image" href="/images/hero-bg.webp">`
- Tree-shake lucide-react (import individual icons)

---

## 16. Environment Variables

```env
# .env.example
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_EMAILJS_TEMPLATE_QUICK=template_quick_quote
VITE_EMAILJS_TEMPLATE_FULL=template_full_quote
VITE_EMAILJS_TEMPLATE_BUDGET=template_budget_calc
VITE_SITE_URL=https://utsavsutra.com
VITE_GA_ID=G-XXXXXXXXXX
```

**Note:** Never commit `.env` — add to `.gitignore`.

---

## 17. Deployment Pipeline

### 17.1 Vercel Configuration (`vercel.json`)

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" }
      ]
    },
    {
      "source": "/images/(.*)",
      "headers": [
        { "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }
      ]
    }
  ]
}
```

### 17.2 Deploy Steps

```bash
npm run build          # Output: dist/
npx vercel --prod      # Or connect GitHub repo to Vercel dashboard
```

### 17.3 Domain Setup

1. Purchase domain (e.g. utsavsutra.com or utsavsutraevents.com)
2. Add domain in Vercel project settings
3. Update DNS: A record → 76.76.21.21, CNAME www → cname.vercel-dns.com
4. SSL auto-provisioned by Vercel

### 17.4 Post-Deploy Checklist

- [ ] All forms send emails successfully
- [ ] WhatsApp link opens correctly on mobile
- [ ] Phone click-to-call works
- [ ] Instagram link opens app on mobile
- [ ] Google Search Console sitemap submitted
- [ ] Update Instagram bio with website URL

---

## 18. Build Phases & Task Breakdown

### Phase 1: Foundation (Days 1–2)

| Task ID | Task | Files | Est. Hours |
|---------|------|-------|------------|
| P1-01 | Init Vite + React + TS project | package.json, vite.config.ts | 1 |
| P1-02 | Configure Tailwind 4 + design tokens | index.css, vite.config.ts | 1 |
| P1-03 | Setup React Router + Layout shell | App.tsx, Layout.tsx | 1 |
| P1-04 | Create shared components (Button, Input, SectionHeading) | shared/* | 2 |
| P1-05 | Build Navbar with mobile menu | Navbar.tsx | 2 |
| P1-06 | Build Footer | Footer.tsx | 1 |
| P1-07 | Build WhatsAppFloat | WhatsAppFloat.tsx | 0.5 |
| P1-08 | Create all data files from PDF | data/* | 2 |
| P1-09 | Create TypeScript types | types/* | 1 |
| P1-10 | Setup QuoteContext | QuoteContext.tsx | 1 |

**Phase 1 total: ~12.5 hours**

### Phase 2: Home Page (Days 3–5)

| Task ID | Task | Est. Hours |
|---------|------|------------|
| P2-01 | Hero + mini quote form | 3 |
| P2-02 | StatsBar | 1 |
| P2-03 | AboutSnippet | 1 |
| P2-04 | ServicesPreview (6 cards) | 2 |
| P2-05 | BudgetCalculator (UI + logic) | 4 |
| P2-06 | Packages (3 tiers) | 2 |
| P2-07 | PlanningProcess (6 steps) | 2 |
| P2-08 | GalleryPreview | 1.5 |
| P2-09 | WhyChooseUs | 1 |
| P2-10 | Partners | 1 |
| P2-11 | TestimonialsSlider | 2 |
| P2-12 | VideoGallery (placeholder) | 1 |
| P2-13 | QuoteForm (full) | 3 |
| P2-14 | Home page assembly + responsive pass | 2 |

**Phase 2 total: ~26.5 hours**

### Phase 3: Inner Pages (Days 6–7)

| Task ID | Task | Est. Hours |
|---------|------|------------|
| P3-01 | Services page + filter + ServiceCard | 4 |
| P3-02 | Gallery page + filter + Lightbox | 4 |
| P3-03 | Testimonials page + carousel | 3 |
| P3-04 | Book Us page + prefill logic | 3 |
| P3-05 | 404 page | 0.5 |

**Phase 3 total: ~14.5 hours**

### Phase 4: Polish & Launch (Days 8–10)

| Task ID | Task | Est. Hours |
|---------|------|------------|
| P4-01 | EmailJS integration (all 3 forms) | 2 |
| P4-02 | Framer Motion scroll animations | 2 |
| P4-03 | SEOHead component + JSON-LD | 1.5 |
| P4-04 | Image optimization + placeholders | 2 |
| P4-05 | Performance audit + fixes | 2 |
| P4-06 | Cross-browser + device testing | 3 |
| P4-07 | Vercel deploy + domain config | 1 |
| P4-08 | Final QA + client handoff | 2 |

**Phase 4 total: ~15.5 hours**

**Grand total: ~69 hours (~9 working days)**

---

## 19. Asset Checklist

| Asset | Status | Source | Used In |
|-------|--------|--------|---------|
| Logo SVG/PNG | PENDING | Client | Navbar, Footer, Favicon |
| Hero background image | PLACEHOLDER | Stock/PDF | Hero |
| 12 service images | PLACEHOLDER | Stock gradients | Services |
| Garland gallery (3-5) | PDF extract | Portfolio PDF p.17 | Gallery |
| Decor gallery (5-8) | PDF extract | Portfolio PDF p.18-19 | Gallery |
| Partner logos (2) | PENDING | Client | Partners section |
| Testimonial photos | PLACEHOLDER | Stock | Testimonials |
| Video embed URLs | PENDING | Instagram | VideoGallery |
| OG image | GENERATE | From hero/gallery | SEO |
| Favicon | PENDING | From logo | Browser tab |

---

## 20. Testing Checklist

### 20.1 Functional

- [ ] All nav links route correctly
- [ ] Mobile hamburger opens/closes
- [ ] Hero quick form validates and submits
- [ ] Budget calculator returns correct range
- [ ] Budget calculator "Get Quote" pre-fills Book Us
- [ ] Full quote form validates all required fields
- [ ] Service "Get Quote" passes service ID to Book Us
- [ ] Gallery filter works (All/Garland/Décor)
- [ ] Lightbox open/close/navigate/keyboard
- [ ] Testimonial carousel auto-play + manual nav
- [ ] WhatsApp float opens correct chat
- [ ] Phone links trigger dialer on mobile
- [ ] Email link opens mail client

### 20.2 Responsive

- [ ] iPhone SE (375px)
- [ ] iPhone 14 (390px)
- [ ] iPad (768px)
- [ ] Laptop (1280px)
- [ ] Desktop (1920px)

### 20.3 Browsers

- [ ] Chrome (latest)
- [ ] Safari (latest)
- [ ] Firefox (latest)
- [ ] Samsung Internet (Android)

### 20.4 Performance

- [ ] Lighthouse audit ≥ 90 performance
- [ ] No layout shift on image load
- [ ] Fonts load without FOIT

---

## 21. Out of Scope

| Feature | Reason | Phase 2? |
|---------|--------|----------|
| Vendor marketplace | User decision | No |
| User login/accounts | Not needed for MVP | Maybe |
| Online payments | Not needed for MVP | Maybe |
| Blog | SEO boost later | Yes |
| CMS admin panel | Client self-update | Yes |
| Multi-language (BN/EN) | Nice to have | Yes |
| Google Reviews embed | Needs client Google profile | Yes |
| Awards section | No awards yet | When available |
| Live chat widget | WhatsApp sufficient | Maybe |

---

## Appendix A: Contact & Brand Reference

| Field | Value |
|-------|-------|
| Brand | Utsav Sutra |
| Tagline | We Plan. You Celebrate. |
| Founded | 2024 |
| Phone 1 | +91 8334816333 |
| Phone 2 | +91 8240017974 |
| Email | utsavsutraevents@gmail.com |
| Instagram | @utsavsutraevents |
| Partner 1 | @boutiquefashionshop |
| Partner 2 | @pixelsolutiondigitalmarketing |

## Appendix B: Package Content (Proposed)

### Essential (₹1.5L – ₹4L)
- Wedding planning & coordination
- Basic decor setup
- Vendor management
- Day-of event management
- Timeline planning

### Signature (₹5L – ₹12L) — Most Popular
- Everything in Essential
- Floral decor & stage design
- Photography coordination
- Guest hospitality management
- Mehendi / Haldi / Sangeet setup
- Invitation design support

### Grand (₹15L+)
- Everything in Signature
- End-to-end luxury planning
- Destination wedding support
- Premium vendor curation
- Custom totto & gift packaging
- 24/7 wedding day support

---

*End of Implementation Plan — Utsav Sutra Website v1.0*
