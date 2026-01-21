// Content Management File
// Edit this file to update website content without touching React components

export interface Service {
  id: string;
  title: string;
  slug: string;
  description: string;
  icon: 'upholstery' | 'flooring' | 'covers' | 'repairs';
  features: string[];
  bestFor: string[];
  materials: string[];
  timeline: string;
  ctaText: string;
}

export interface Testimonial {
  id: number;
  name: string;
  boat: string;
  quote: string;
  rating: number;
}

export interface FAQ {
  id: number;
  question: string;
  answer: string;
}

export interface GalleryItem {
  id: number;
  imageUrl: string;
  boat: string;
  services: string[];
  caption: string;
  category: 'full-interior' | 'flooring' | 'repairs' | 'covers' | 'before-after';
}

export interface ProcessStep {
  number: number;
  title: string;
  description: string;
}

export interface FacebookReel {
  id: number;
  title: string;
  description: string;
  embedUrl: string;
  thumbnail?: string;
}

// Services Data
export const services: Service[] = [
  {
    id: '1',
    title: 'Boat Upholstery',
    slug: 'upholstery',
    description: 'Revitalize your boat\'s interior with marine-grade vinyl, custom stitching, and precision foam work. From captain chairs to full interiors, we deliver show-quality results.',
    icon: 'upholstery',
    features: [
      'Complete interior redesigns',
      'Captain chairs and helm seating',
      'Bench seats and loungers',
      'Sun pads and bow cushions',
      'Custom stitching patterns',
      'Piping and accent details',
      'Interior panels and trim',
    ],
    bestFor: [
      'Worn or faded seats',
      'Sun damage repair',
      'Style upgrades and modernization',
      'Complete interior transformations',
    ],
    materials: [
      'Premium marine vinyl (UV-resistant)',
      'Marine-grade foam (closed-cell)',
      'Stainless steel hardware',
      'Weather-resistant thread',
    ],
    timeline: '5–7 working days for most projects',
    ctaText: 'Get a Custom Quote',
  },
  {
    id: '2',
    title: 'Marine Flooring',
    slug: 'flooring',
    description: 'Transform your boat\'s deck with custom foam flooring, snap-in systems, or carpet replacement. Precision-templated for perfect fit and lasting durability.',
    icon: 'flooring',
    features: [
      'EVA foam flooring (Seadek-style)',
      'Custom colors and patterns',
      'Logo integration',
      'Snap-in flooring systems',
      'Marine carpet replacement',
      'Precision templating',
      'Non-slip surfaces',
    ],
    bestFor: [
      'Replacing old or worn carpet',
      'Adding grip and comfort',
      'Modernizing boat appearance',
      'Easier cleaning and maintenance',
    ],
    materials: [
      'Premium EVA foam',
      'Marine-grade snap-in systems',
      'UV-resistant materials',
      'Custom color options',
    ],
    timeline: '3–5 working days',
    ctaText: 'Request Flooring Quote',
  },
  {
    id: '3',
    title: 'Boat Covers & Bimini Tops',
    slug: 'covers',
    description: 'Protect your investment with custom-fit covers and bimini tops. Built with premium materials to withstand the elements and extend your boat\'s life.',
    icon: 'covers',
    features: [
      'Custom mooring covers',
      'Bimini tops and extensions',
      'Tower covers',
      'Storage and travel covers',
      'Tonneau covers',
      'Cockpit covers',
      'Custom sizing and fit',
    ],
    bestFor: [
      'Weather protection',
      'UV damage prevention',
      'Extending boat lifespan',
      'Off-season storage',
    ],
    materials: [
      'Sunbrella marine fabric',
      'Marine-grade canvas',
      'Stainless steel fittings',
      'Heavy-duty zippers',
    ],
    timeline: '7–10 working days',
    ctaText: 'Discuss Your Needs',
  },
  {
    id: '4',
    title: 'Repairs & Restoration',
    slug: 'repairs',
    description: 'Extend the life of your existing upholstery with expert repairs. From seam fixes to complete restoration, we can make your interior look like new again.',
    icon: 'repairs',
    features: [
      'Seam repairs and re-stitching',
      'Tear and rip patching',
      'Foam replacement',
      'Vinyl color matching',
      'Zipper replacement',
      'Panel repairs',
      'Sun damage restoration',
    ],
    bestFor: [
      'Minor damage repair',
      'Extending upholstery life',
      'Budget-conscious fixes',
      'Quick turnaround needs',
    ],
    materials: [
      'Matched marine vinyl',
      'Marine-grade foam',
      'UV-resistant thread',
      'Quality replacement hardware',
    ],
    timeline: 'Often same-week turnaround',
    ctaText: 'Schedule Repair Consultation',
  },
];

// Testimonials Data
export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Mike R.',
    boat: 'Mastercraft X-Star',
    quote: 'The team completely transformed our boat\'s interior. The new seats look incredible and the Seadek flooring is a game-changer. Highly recommend!',
    rating: 5,
  },
  {
    id: 2,
    name: 'Sarah K.',
    boat: 'Malibu Wakesetter',
    quote: 'Professional work from start to finish. They helped us choose the perfect colors and the custom stitching looks amazing. Worth every penny!',
    rating: 5,
  },
  {
    id: 3,
    name: 'David L.',
    boat: 'Pontoon Boat',
    quote: 'Quick turnaround and quality work. Our pontoon looks brand new. The UV-resistant vinyl should last for years. Great local business!',
    rating: 5,
  },
  {
    id: 4,
    name: 'Jennifer M.',
    boat: 'Sea Ray Sundancer',
    quote: 'They repaired sun damage on our cabin cushions and made them look like new. Fair pricing and excellent craftsmanship.',
    rating: 5,
  },
];

// FAQ Data
export const faqs: FAQ[] = [
  {
    id: 1,
    question: 'How long does upholstery work typically take?',
    answer: 'Most projects are completed in 5–7 working days, though this can vary based on the scope of work. Flooring installations often take 3–5 days, while covers and bimini tops typically require 7–10 days. Simple repairs can often be completed within the same week. We\'ll provide you with a specific timeline during your consultation.',
  },
  {
    id: 2,
    question: 'Do you work on all types of boats?',
    answer: 'Yes! We work on wake boats, ski boats, pontoons, fishing boats, cruisers, and more. Whether you have a small fishing boat or a large cruiser, we have the expertise and equipment to handle your project.',
  },
  {
    id: 3,
    question: 'Can you match my boat\'s original colors and patterns?',
    answer: 'Absolutely. We carry a wide range of marine vinyl colors and can match most original patterns. We can also help you choose updated colors if you\'re looking for a fresh new look. Bring photos or samples, and we\'ll work to get the perfect match.',
  },
  {
    id: 4,
    question: 'What materials do you use?',
    answer: 'We use only marine-grade materials designed to withstand sun, water, and constant use. This includes UV-resistant vinyl, closed-cell marine foam, stainless steel hardware, and weather-resistant thread. For covers, we primarily use Sunbrella and other premium marine fabrics.',
  },
  {
    id: 5,
    question: 'Do you offer warranties on your work?',
    answer: 'We stand behind the quality of our craftsmanship and materials. Specific warranty details vary by project type and materials selected. We\'ll discuss warranty coverage during your consultation to ensure you understand what\'s included.',
  },
  {
    id: 6,
    question: 'How do I get a quote?',
    answer: 'Getting a quote is easy! You can call us at (801) 759-4524 or fill out our online quote request form. For the most accurate quote, we recommend bringing your boat by our shop in West Jordan so we can see the work firsthand and discuss your options.',
  },
  {
    id: 7,
    question: 'Can I visit your shop?',
    answer: 'Yes, we welcome visits by appointment! Stop by to see our work, discuss your project, and browse material samples. We\'re located at 1386 W 8040 S in West Jordan, Utah. Give us a call to schedule a convenient time.',
  },
  {
    id: 8,
    question: 'What areas do you serve?',
    answer: 'We\'re based in West Jordan and serve the entire Salt Lake Valley, Utah County, Weber and Davis Counties, and surrounding areas. We also work with boat owners from neighboring states including Idaho, Wyoming, Nevada, and Colorado. If you\'re not sure if we can service your area, give us a call!',
  },
  {
    id: 9,
    question: 'Do I need to bring my boat to your shop?',
    answer: 'For most projects, yes. Bringing your boat to our shop allows us to work efficiently with access to all our tools and materials. For certain large projects or covers, we may be able to make arrangements for on-site work. Contact us to discuss your specific situation.',
  },
  {
    id: 10,
    question: 'Can you work with my boat during the season?',
    answer: 'Absolutely! While many people schedule work during the off-season, we work year-round and can accommodate in-season projects. Keep in mind that summer months tend to be our busiest time, so booking in advance is recommended.',
  },
];

// Gallery Items Data
export const galleryItems: GalleryItem[] = [
  {
    id: 1,
    imageUrl: '/images/gallery/placeholder-01.jpg',
    boat: 'Mastercraft X-Star',
    services: ['Full Interior', 'Flooring'],
    caption: 'Complete interior refresh with custom navy/white stitching and teak-style foam flooring.',
    category: 'full-interior',
  },
  {
    id: 2,
    imageUrl: '/images/gallery/placeholder-02.jpg',
    boat: 'Malibu Wakesetter',
    services: ['Flooring'],
    caption: 'Custom teak and black EVA foam flooring with logo integration.',
    category: 'flooring',
  },
  {
    id: 3,
    imageUrl: '/images/gallery/placeholder-03.jpg',
    boat: 'Sea Ray Sundancer',
    services: ['Full Interior'],
    caption: 'Luxury cabin upholstery with custom piping and accent colors.',
    category: 'full-interior',
  },
  {
    id: 4,
    imageUrl: '/images/gallery/placeholder-04.jpg',
    boat: 'Pontoon Boat',
    services: ['Upholstery'],
    caption: 'New bench seating with marine-grade vinyl in sand and navy.',
    category: 'full-interior',
  },
  {
    id: 5,
    imageUrl: '/images/gallery/placeholder-05.jpg',
    boat: 'Centurion',
    services: ['Repairs'],
    caption: 'Restored sun pads and bow cushions - from faded to like-new.',
    category: 'repairs',
  },
  {
    id: 6,
    imageUrl: '/images/gallery/placeholder-06.jpg',
    boat: 'Axis Wake',
    services: ['Covers'],
    caption: 'Custom mooring cover with tower accommodation in Sunbrella fabric.',
    category: 'covers',
  },
  {
    id: 7,
    imageUrl: '/images/gallery/placeholder-07.jpg',
    boat: 'Supra',
    services: ['Before & After'],
    caption: 'Complete transformation - before and after full interior redesign.',
    category: 'before-after',
  },
  {
    id: 8,
    imageUrl: '/images/gallery/placeholder-08.jpg',
    boat: 'Nautique',
    services: ['Flooring'],
    caption: 'Gray and white foam flooring with non-slip texture.',
    category: 'flooring',
  },
  {
    id: 9,
    imageUrl: '/images/gallery/placeholder-09.jpg',
    boat: 'Chaparral',
    services: ['Full Interior'],
    caption: 'Captain chairs and cockpit seating with diamond stitching pattern.',
    category: 'full-interior',
  },
  {
    id: 10,
    imageUrl: '/images/gallery/placeholder-10.jpg',
    boat: 'Cobalt',
    services: ['Repairs'],
    caption: 'Seam repair and color-matched vinyl patch on helm seating.',
    category: 'repairs',
  },
  {
    id: 11,
    imageUrl: '/images/gallery/placeholder-11.jpg',
    boat: 'Tige',
    services: ['Before & After'],
    caption: 'Worn seats transformed with new foam and premium vinyl.',
    category: 'before-after',
  },
  {
    id: 12,
    imageUrl: '/images/gallery/placeholder-12.jpg',
    boat: 'Bayliner',
    services: ['Covers'],
    caption: 'Custom bimini top with matching tonneau cover.',
    category: 'covers',
  },
];

// Process Steps Data
export const processSteps: ProcessStep[] = [
  {
    number: 1,
    title: 'Tell Us Your Vision',
    description: 'Share details about your boat and goals. Whether it\'s a complete redesign, targeted repairs, or protective covers, we\'ll discuss your needs, timeline, and budget.',
  },
  {
    number: 2,
    title: 'Choose Materials & Colors',
    description: 'Browse our extensive selection of marine-grade vinyls, foams, and fabrics. We\'ll help you select colors, patterns, and stitching that match your vision and boat style.',
  },
  {
    number: 3,
    title: 'We Build With Precision',
    description: 'Our experienced team gets to work using marine-grade materials and proven techniques. We template, cut, sew, and install everything with meticulous attention to detail.',
  },
  {
    number: 4,
    title: 'Pickup & Enjoy',
    description: 'Pick up your boat with its stunning new interior. Get back on the water and enjoy your like-new boat with confidence in quality craftsmanship that lasts.',
  },
];

// Contact Information
export const contactInfo = {
  phone: '(801) 759-4524',
  phoneRaw: '8017594524',
  address: '1386 W 8040 S, West Jordan, UT 84088',
  email: 'info@toysservices.com', // Placeholder
  hours: 'Mon–Fri: 8 AM – 5 PM',
  hoursNote: 'Typical hours - call ahead to confirm',
};

// Facebook Reels Data
// To add more reels: Go to your Facebook reel → Click "..." → "Embed" → Copy the iframe src URL
export const facebookReels: FacebookReel[] = [
  {
    id: 1,
    title: 'Boat Interior Transformation',
    description: 'Watch the complete transformation of this boat interior',
    embedUrl: 'https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FToysServicesUpholstery%2Fvideos%2FYOUR_VIDEO_ID_1%2F',
  },
  {
    id: 2,
    title: 'Custom Upholstery Work',
    description: 'Behind the scenes of our custom upholstery process',
    embedUrl: 'https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FToysServicesUpholstery%2Fvideos%2FYOUR_VIDEO_ID_2%2F',
  },
  {
    id: 3,
    title: 'Marine Flooring Installation',
    description: 'See how we install custom marine flooring',
    embedUrl: 'https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FToysServicesUpholstery%2Fvideos%2FYOUR_VIDEO_ID_3%2F',
  },
  // Add more reels here following the same format
];

// Business Information
export const businessInfo = {
  name: 'TOYS SERVICES & UPHOLSTERY',
  altName: 'BOAT UPHOLSTERY / Toys Services',
  tagline: 'Premium Marine Upholstery & Flooring',
  description: 'Trusted marine upholstery and flooring based in West Jordan, Utah. Serving Utah and neighboring states with high-quality craftsmanship and custom boat interiors.',
  serviceArea: [
    'West Jordan, UT',
    'Salt Lake Valley',
    'Utah County',
    'Weber & Davis Counties',
    'Utah lakes (Bear Lake, Lake Powell, etc.)',
    'Neighboring states (Idaho, Wyoming, Nevada, Colorado)',
  ],
};
