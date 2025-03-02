# Art Detailing Service - Premium Car Detailing Website

A luxurious, showroom-inspired website for 'Art Detailing Service', a premium car detailing center. The site features a dark theme with gold and white accents, an elegant, minimalist layout, and sophisticated animations.

## Features

- Responsive design optimized for all devices
- Elegant animations and transitions
- Premium dark theme with gold accents
- Interactive service cards
- Before/after portfolio gallery
- Client testimonials slider
- Contact form with booking functionality

## Project Structure

```
/
├── public/
│   ├── assets/
│   │   └── images/
│   │       ├── luxury-car.jpg (Hero background)
│   │       ├── portfolio/
│   │       │   ├── before1.jpg
│   │       │   ├── after1.jpg
│   │       │   └── ...
│   │       └── reviews/
│   │           ├── review1.jpg
│   │           └── ...
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   ├── Portfolio.tsx
│   │   ├── Reviews.tsx
│   │   └── Services.tsx
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
└── package.json
```

## Adding Local Images

To add your own images to the project:

1. Create the necessary directories in the `public/assets/images/` folder:
   ```
   mkdir -p public/assets/images/portfolio public/assets/images/reviews
   ```

2. Add your images to the appropriate folders:
   - Main hero image: `public/assets/images/luxury-car.jpg`
   - Portfolio before/after images: `public/assets/images/portfolio/before1.jpg`, `public/assets/images/portfolio/after1.jpg`, etc.
   - Review images: `public/assets/images/reviews/review1.jpg`, etc.

3. The components are already set up to use these local image paths with fallbacks to external URLs if the local images aren't available.

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Swiper
- Lucide React