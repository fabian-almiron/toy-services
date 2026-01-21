# TOYS SERVICES & UPHOLSTERY

A modern, fast marketing website for a premium marine upholstery shop based in West Jordan, Utah.

## 🚀 Tech Stack

- **Next.js 15** (App Router) - React framework for production
- **React 19** - UI library
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS 4** - Utility-first CSS framework
- **Responsive Design** - Mobile-first approach
- **Accessible** - WCAG AA compliant with ARIA labels and keyboard navigation

## 📋 Features

- 🏠 **Home Page** - Hero, highlights, services preview, gallery, process, testimonials, FAQ
- 🛠️ **Services Page** - Detailed information about upholstery, flooring, covers, and repairs
- 🖼️ **Gallery** - Filterable portfolio with lightbox modal
- 📖 **About Page** - Company story, service area, and why choose us
- 📞 **Contact Page** - Contact cards and quote request form
- ❓ **FAQ Page** - Comprehensive frequently asked questions
- 🧭 **Navigation** - Sticky navbar with mobile menu
- 📱 **Fully Responsive** - Optimized for all device sizes

## 🛠️ Setup Instructions

### Prerequisites

- Node.js 18.x or higher
- npm, yarn, or pnpm

### Installation

1. **Clone or download the repository**

```bash
cd tt-upholstery
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Run the development server**

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. **Open your browser**

Navigate to [http://localhost:3000](http://localhost:3000) to see your website.

## 📝 Editing Content

All website content is centralized in a single file for easy editing:

### `lib/content.ts`

This file contains all editable content including:

- **Services** - Service details, features, materials, timelines
- **Testimonials** - Customer reviews and ratings
- **FAQs** - Frequently asked questions and answers
- **Gallery Items** - Gallery images with captions and categories
- **Process Steps** - Step-by-step process information
- **Contact Info** - Phone, address, hours
- **Business Info** - Company name, tagline, description

### Example: Adding a New Testimonial

```typescript
// In lib/content.ts, add to the testimonials array:
{
  id: 5,
  name: 'John D.',
  boat: 'Tige Z3',
  quote: 'Amazing work! The custom stitching looks incredible.',
  rating: 5,
}
```

### Example: Updating Contact Information

```typescript
// In lib/content.ts, update the contactInfo object:
export const contactInfo = {
  phone: '(801) 759-4524',
  phoneRaw: '8017594524',
  address: '1386 W 8040 S, West Jordan, UT 84088',
  email: 'info@toysservices.com',
  hours: 'Mon–Fri: 8 AM – 5 PM',
  hoursNote: 'Typical hours - call ahead to confirm',
};
```

## 🖼️ Adding Images

### Gallery Images

1. **Add your images** to the `public/images/gallery/` folder
2. **Update the gallery items** in `lib/content.ts`:

```typescript
{
  id: 1,
  imageUrl: '/images/gallery/your-image.jpg', // Update this path
  boat: 'Mastercraft X-Star',
  services: ['Full Interior', 'Flooring'],
  caption: 'Complete interior refresh with custom stitching.',
  category: 'full-interior',
}
```

### Other Images

- Place images in `public/images/`
- Reference them with `/images/your-image.jpg` in your code

### Image Recommendations

- **Format**: JPG or WebP for photos, PNG for logos
- **Size**: Max 2000px width for performance
- **Optimization**: Use tools like TinyPNG or ImageOptim before uploading

## 📧 Form Integration

The contact form is currently set up with a placeholder endpoint. Here's how to connect it to a real service:

### Option 1: Formspree (Easiest)

1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form and get your endpoint URL
3. Update `components/ContactForm.tsx`:

```typescript
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(formData),
});
```

### Option 2: Resend (Email API)

1. Sign up at [resend.com](https://resend.com)
2. Get your API key
3. Create `app/api/quote/route.ts`:

```typescript
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const data = await request.json();
  
  await resend.emails.send({
    from: 'website@yourdomain.com',
    to: 'info@toysservices.com',
    subject: 'New Quote Request',
    html: `<p>Name: ${data.name}</p><p>Phone: ${data.phone}</p>...`,
  });
  
  return NextResponse.json({ success: true });
}
```

4. Add `.env.local`:

```
RESEND_API_KEY=your_api_key_here
```

### Option 3: Custom Email Service

Use any email service (SendGrid, Mailgun, etc.) by creating a custom API route in `app/api/quote/route.ts`.

## 🎨 Customization

### Changing Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    DEFAULT: '#0A2540', // Deep navy
    dark: '#051220',
    light: '#0F3558',
  },
  accent: {
    DEFAULT: '#14B8A6', // Teal
    dark: '#0F9D8E',
    light: '#2DD4BF',
  },
  // Add more colors...
}
```

### Changing Fonts

Edit `app/layout.tsx`:

```typescript
import { Inter, Roboto } from 'next/font/google';

const roboto = Roboto({ 
  weight: ['400', '700'],
  subsets: ['latin'] 
});
```

### Updating Page Metadata

Each page has metadata for SEO. Edit in individual page files:

```typescript
export const metadata: Metadata = {
  title: 'Your Title | TOYS SERVICES',
  description: 'Your description',
};
```

## 🚀 Deployment

### Deploying to Vercel (Recommended)

1. **Push your code to GitHub**

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin your-repo-url
git push -u origin main
```

2. **Deploy to Vercel**

   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your GitHub repository
   - Click "Deploy"

3. **Configure Environment Variables** (if using form integration)

   - Go to your project settings in Vercel
   - Add environment variables (e.g., `RESEND_API_KEY`)

4. **Custom Domain** (Optional)

   - In Vercel project settings, go to "Domains"
   - Add your custom domain
   - Update DNS records as instructed

### Other Deployment Options

- **Netlify**: Similar to Vercel, great for Next.js
- **AWS Amplify**: Good for AWS ecosystem
- **DigitalOcean**: More control, requires more setup

## 📁 Project Structure

```
tt-upholstery/
├── app/                      # Next.js App Router pages
│   ├── layout.tsx           # Root layout (navbar + footer)
│   ├── page.tsx             # Home page
│   ├── services/page.tsx    # Services page
│   ├── gallery/page.tsx     # Gallery page
│   ├── about/page.tsx       # About page
│   ├── contact/page.tsx     # Contact page
│   └── faq/page.tsx         # FAQ page
├── components/
│   ├── ui/                  # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Badge.tsx
│   │   ├── Container.tsx
│   │   └── SectionHeading.tsx
│   ├── layout/
│   │   ├── Navbar.tsx       # Navigation bar
│   │   └── Footer.tsx       # Footer
│   ├── home/                # Home page sections
│   │   ├── Hero.tsx
│   │   ├── Highlights.tsx
│   │   ├── ServicesPreview.tsx
│   │   ├── FeaturedGallery.tsx
│   │   ├── ProcessSteps.tsx
│   │   ├── Testimonials.tsx
│   │   ├── FAQPreview.tsx
│   │   └── CTABand.tsx
│   ├── ServiceCard.tsx
│   ├── TestimonialCard.tsx
│   ├── GalleryGrid.tsx      # Gallery with filters & lightbox
│   ├── FAQAccordion.tsx
│   └── ContactForm.tsx      # Quote request form
├── lib/
│   └── content.ts           # ⭐ All editable content
├── public/
│   └── images/              # Static images
├── tailwind.config.ts       # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies
```

## 🔧 Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run TypeScript type checking
npm run lint
```

## 🎯 Key Features Implemented

### Accessibility
- ✅ ARIA labels on all interactive elements
- ✅ Keyboard navigation support
- ✅ Focus states with visible outlines
- ✅ Semantic HTML structure
- ✅ Alt text on images
- ✅ Color contrast WCAG AA compliant

### Performance
- ✅ Next.js Image optimization
- ✅ Lazy loading for images
- ✅ Static page generation
- ✅ Efficient component structure

### SEO
- ✅ Meta tags on all pages
- ✅ Open Graph tags
- ✅ Semantic heading structure
- ✅ Clean URLs

### User Experience
- ✅ Mobile-first responsive design
- ✅ Fast page loads
- ✅ Smooth animations
- ✅ Clear CTAs throughout
- ✅ Easy navigation

## 📞 Support

If you need help with this website:

1. **Content Updates**: Edit `lib/content.ts`
2. **Images**: Add to `public/images/` and update content file
3. **Styling**: Modify Tailwind classes or `tailwind.config.ts`
4. **Forms**: Follow the form integration guide above

## 📄 License

This project is proprietary and created for TOYS SERVICES & UPHOLSTERY.

---

**Built with ❤️ using Next.js and Tailwind CSS**

For questions about the website, contact: [info@toysservices.com](mailto:info@toysservices.com) | (801) 759-4524
