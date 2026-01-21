# Quick Start Guide

Get your website running in 5 minutes!

## 🚀 Fast Setup

### 1. Install Dependencies (2 minutes)

```bash
npm install
```

Wait for installation to complete...

### 2. Start Development Server (30 seconds)

```bash
npm run dev
```

### 3. Open Browser

Go to: **http://localhost:3000**

You should see your website! 🎉

## ✏️ Make Your First Edit

### Update the Phone Number

1. Open `lib/content.ts`
2. Find this section:

```typescript
export const contactInfo = {
  phone: '(801) 759-4524',
  phoneRaw: '8017594524',
```

3. Change the numbers to your actual phone
4. Save the file
5. Refresh your browser - it updates automatically!

### Add Your First Image

1. Save an image to `public/images/gallery/` 
   - Name it: `my-first-project.jpg`

2. Open `lib/content.ts`
3. Find the `galleryItems` section
4. Change the first item's `imageUrl`:

```typescript
imageUrl: '/images/gallery/my-first-project.jpg',
```

5. Save and refresh!

## 📱 Test on Mobile

1. While dev server is running, find your computer's IP:
   ```bash
   # On Mac/Linux:
   ifconfig | grep "inet "
   
   # On Windows:
   ipconfig
   ```

2. On your phone, visit: `http://YOUR-IP:3000`
   - Example: `http://192.168.1.100:3000`

## 🎨 Change Colors

Want different colors?

1. Open `tailwind.config.ts`
2. Find the `colors` section:

```typescript
colors: {
  primary: {
    DEFAULT: '#0A2540', // ← Change this
```

3. Use a color picker tool like [coolors.co](https://coolors.co)
4. Replace the hex codes
5. Save and see changes instantly!

## ✅ Next Steps

- [ ] Replace all placeholder content in `lib/content.ts`
- [ ] Add your actual boat project images
- [ ] Test the contact form
- [ ] Set up form email integration (see README)
- [ ] Deploy to Vercel (see DEPLOYMENT.md)

## 🆘 Problems?

### Port Already in Use

```bash
# Kill the process and try again
npx kill-port 3000
npm run dev
```

### Changes Not Showing

1. Hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
2. Clear browser cache
3. Restart dev server

### Can't Find a File

All main content is in `lib/content.ts` - that's the only file you need to edit for most changes!

## 📚 Full Guides

- **README.md** - Complete setup and features
- **CONTENT-GUIDE.md** - How to edit content
- **DEPLOYMENT.md** - How to go live

---

**That's it! You're ready to customize your website. 🚢**
