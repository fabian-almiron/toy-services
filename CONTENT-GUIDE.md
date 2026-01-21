# Content Management Guide

This guide will help you update the website content without needing to know how to code.

## 📍 Where to Find Content

All editable content is located in one file: **`lib/content.ts`**

## 📝 What You Can Edit

### 1. Services

Update service information including descriptions, features, materials, and timelines.

**Location in file:** `export const services: Service[] = [`

**Example:**
```typescript
{
  id: '1',
  title: 'Boat Upholstery',
  description: 'Your description here...',
  features: [
    'Complete interior redesigns',
    'Captain chairs and helm seating',
    // Add or remove features
  ],
  timeline: '5–7 working days for most projects',
}
```

### 2. Testimonials

Add, edit, or remove customer testimonials.

**Location in file:** `export const testimonials: Testimonial[] = [`

**Example:**
```typescript
{
  id: 1,
  name: 'Mike R.',
  boat: 'Mastercraft X-Star',
  quote: 'The team completely transformed our boat...',
  rating: 5,
}
```

**To add a new testimonial:**
1. Copy an existing testimonial block
2. Change the `id` to a new unique number
3. Update the `name`, `boat`, `quote`, and `rating`
4. Add a comma after the previous testimonial

### 3. FAQs

Update frequently asked questions and answers.

**Location in file:** `export const faqs: FAQ[] = [`

**Example:**
```typescript
{
  id: 1,
  question: 'How long does upholstery work typically take?',
  answer: 'Most projects are completed in 5–7 working days...',
}
```

### 4. Gallery Items

Update gallery image information and captions.

**Location in file:** `export const galleryItems: GalleryItem[] = [`

**Example:**
```typescript
{
  id: 1,
  imageUrl: '/images/gallery/your-image.jpg',
  boat: 'Mastercraft X-Star',
  services: ['Full Interior', 'Flooring'],
  caption: 'Complete interior refresh...',
  category: 'full-interior', // Options: 'full-interior', 'flooring', 'repairs', 'covers', 'before-after'
}
```

**Categories available:**
- `'full-interior'` - Full Interior work
- `'flooring'` - Flooring projects
- `'repairs'` - Repair work
- `'covers'` - Covers and Bimini tops
- `'before-after'` - Before and after comparisons

### 5. Contact Information

Update phone, address, hours, and email.

**Location in file:** `export const contactInfo = {`

**Example:**
```typescript
export const contactInfo = {
  phone: '(801) 759-4524',
  phoneRaw: '8017594524', // Same number without formatting
  address: '1386 W 8040 S, West Jordan, UT 84088',
  email: 'info@toysservices.com',
  hours: 'Mon–Fri: 8 AM – 5 PM',
  hoursNote: 'Typical hours - call ahead to confirm',
};
```

### 6. Business Information

Update company name, tagline, and service areas.

**Location in file:** `export const businessInfo = {`

**Example:**
```typescript
export const businessInfo = {
  name: 'TOYS SERVICES & UPHOLSTERY',
  tagline: 'Premium Marine Upholstery & Flooring',
  description: 'Trusted marine upholstery...',
  serviceArea: [
    'West Jordan, UT',
    'Salt Lake Valley',
    // Add or remove areas
  ],
};
```

## 🖼️ Adding Images

### Step 1: Prepare Your Images

1. **Resize** images to max 2000px width
2. **Optimize** using a tool like [TinyPNG](https://tinypng.com)
3. **Name** them descriptively (e.g., `mastercraft-interior-2024.jpg`)

### Step 2: Upload Images

1. Place images in the `public/images/gallery/` folder
2. For other images (logos, etc.), use `public/images/`

### Step 3: Update Content File

Edit `lib/content.ts` and update the `imageUrl` path:

```typescript
{
  id: 1,
  imageUrl: '/images/gallery/mastercraft-interior-2024.jpg', // ← Your new image path
  boat: 'Mastercraft X-Star',
  // ... rest of the fields
}
```

## ⚠️ Important Tips

### Do's ✅
- Always use straight quotes `"` not curly quotes `""`
- Keep comma (`,`) at the end of each item except the last one
- Test changes by refreshing your browser
- Keep backups of the content file before making major changes

### Don'ts ❌
- Don't remove the curly braces `{ }` or square brackets `[ ]`
- Don't forget commas between items
- Don't use special characters that aren't escaped
- Don't delete the type definitions at the top of the file

## 🔧 Common Tasks

### Add a New Service

1. Find the `services` array in `lib/content.ts`
2. Copy the last service block (including the comma before it)
3. Paste it after the last service
4. Update the `id` to the next number (e.g., `'5'`)
5. Edit all fields with your new service information

### Remove a Testimonial

1. Find the testimonial you want to remove
2. Delete the entire block from `{` to `},`
3. Make sure there's still a comma after each item except the last

### Change Phone Number Site-Wide

1. Edit `contactInfo` in `lib/content.ts`
2. Update both `phone` (formatted) and `phoneRaw` (numbers only)
3. Save the file - it will update everywhere automatically

## 🆘 Getting Help

If something breaks:

1. **Check for missing commas** - This is the most common issue
2. **Check for missing quotes** - All text should be in quotes
3. **Undo your changes** - Use Ctrl+Z (Windows) or Cmd+Z (Mac)
4. **Restore from backup** - If you saved a backup before editing

## 📞 Contact Developer

If you need help or something isn't working:

- Email your developer with:
  - What you were trying to do
  - What happened
  - Screenshot if possible

---

**Remember:** Changes to `lib/content.ts` take effect immediately when you refresh your browser. Always test after making changes!
