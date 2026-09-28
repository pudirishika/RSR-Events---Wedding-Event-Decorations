/**
 * =====================================================================
 * RSR EVENTS - BUSINESS CONFIGURATION & MEDIA DATA
 * =====================================================================
 * This file contains all business contact details, services list, photo gallery,
 * and video gallery data.
 * 
 * TO UPDATE CONTACT DETAILS:
 * - Change `phone`, `phoneDisplay`, and `whatsappNumber` below.
 * 
 * TO ADD / REPLACE PHOTOS:
 * - Add or edit items in the `GALLERY_ITEMS` array.
 * 
 * TO ADD / REPLACE VIDEOS:
 * - Add or edit items in the `VIDEO_ITEMS` array.
 * =====================================================================
 */

// Import generated local images
import heroBgImg from '../assets/images/hero_wedding_decor_1790613261550.jpg';
import stageImg from '../assets/images/stage_floral_decor_1790613278226.jpg';
import tentImg from '../assets/images/tent_seating_setup_1790613297929.jpg';
import lightingImg from '../assets/images/lighting_sound_setup_1790613312525.jpg';

export interface BusinessConfig {
  name: string;
  tagline: string;
  subTagline: string;
  locationPromise: string;
  phoneDisplay: string;
  phoneRaw: string;
  whatsappNumber: string;
  whatsappDisplay: string;
  whatsappDefaultMessage: string;
  email: string;
  serviceCoverage: string;
}

export const BUSINESS_CONFIG: BusinessConfig = {
  name: "RSR Events",
  tagline: "Beautiful Decorations for Your Special Moments",
  subTagline: "Wherever your function is, we come to you and make your celebration beautiful.",
  locationPromise: "Your Function. Your Place. Our Decoration.",
  
  // NOTE: Replace these with your real phone numbers
  phoneDisplay: "+91 XXXXX XXXXX",
  phoneRaw: "+919876543210", // Used for tel: link (replace X's when ready)
  whatsappNumber: "919876543210", // Numbers only with country code (91)
  whatsappDisplay: "+91 XXXXX XXXXX",
  whatsappDefaultMessage: "Hello RSR Events, I would like to know about your decoration services.",
  
  email: "rsrevents.decorations@gmail.com",
  serviceCoverage: "Available for functions at any location: banquet halls, homes, open grounds, temples, resorts, and farmhouses."
};

export interface ServiceItem {
  id: string;
  title: string;
  icon: string;
  shortDescription: string;
  details: string;
  category: string;
  suitableFor: string[];
}

export const SERVICES: ServiceItem[] = [
  {
    id: "marriage-wedding",
    title: "Marriage & Wedding Decorations",
    icon: "🌸",
    shortDescription: "Complete grand wedding setups including traditional mandaps, floral entrance arches, and royal aisle walkaways.",
    details: "From majestic traditional floral mandaps to contemporary palace-style stages, we design complete wedding decor that creates an unforgettable royal celebration.",
    category: "Wedding Decorations",
    suitableFor: ["Weddings", "Receptions", "Muhurtham"]
  },
  {
    id: "stage-decorations",
    title: "Stage Decorations",
    icon: "✨",
    shortDescription: "Elegant stage designs with plush sofa seating, decorative backdrops, chandeliers, and LED uplighting.",
    details: "Custom-built stage backgrounds tailored to your theme, featuring flower walls, geometric backdrops, crystal drapes, and couple thrones.",
    category: "Stage Decorations",
    suitableFor: ["Receptions", "Engagements", "Sangeet"]
  },
  {
    id: "lighting",
    title: "Lighting",
    icon: "💡",
    shortDescription: "Magical fairy lights, focus par lights, sharp dynamic stage lights, and grand outdoor ambient illumination.",
    details: "Professional illumination that turns any venue into a radiant spectacle. We supply fairy light canopies, warm tree wraps, pathway spot lighting, and power-efficient setups.",
    category: "Lighting",
    suitableFor: ["Night Receptions", "Outdoor Functions", "Home Illumination"]
  },
  {
    id: "speakers-sound-system",
    title: "Speakers & Sound System",
    icon: "🔊",
    shortDescription: "High-clarity sound systems, wireless microphones, and crystal-clear audio equipment for music and announcements.",
    details: "High-grade audio gear ensuring every auspicious mantra, background shehnai, welcoming announcement, and celebratory music is heard crisp and clear.",
    category: "Sound System",
    suitableFor: ["All Functions", "Engagements", "Family Gatherings"]
  },
  {
    id: "tents",
    title: "Tents",
    icon: "⛺",
    shortDescription: "Weatherproof luxury shamianas, decorative ceiling drapes, VIP canopies, and spacious outdoor marquee setups.",
    details: "Sturdy and elegant tents in various capacities with rich ceiling linings, side curtains, and weatherproof fabrics to comfortably host all your guests.",
    category: "Tents",
    suitableFor: ["Open Grounds", "Housewarming", "Garden Parties"]
  },
  {
    id: "chairs",
    title: "Chairs",
    icon: "🪑",
    shortDescription: "Comfortable banquet chairs with neat covers, satin ribbons, VIP Maharaja chairs, and plastic seating sets.",
    details: "Impeccably clean, matching chairs delivered in requested quantities with premium fabric slips and bows that harmonize with your decor colors.",
    category: "Event Setup",
    suitableFor: ["Dining Areas", "Auditoriums", "Guest Seating"]
  },
  {
    id: "mats-carpets",
    title: "Mats & Carpets",
    icon: "🧺",
    shortDescription: "Red carpet VIP runners, grand walkway passage rugs, clean floor mats, and dining area ground coverings.",
    details: "Fresh and clean carpets in red, green, royal blue, and gold tones to provide a welcoming red-carpet entry and hygienic seating floors.",
    category: "Event Setup",
    suitableFor: ["Entrance Aisles", "Stage Walkways", "Dining Halls"]
  },
  {
    id: "function-event-decorations",
    title: "Function & Event Decorations",
    icon: "🎉",
    shortDescription: "Festive decorations for birthdays, half-saree ceremonies, baby showers, cradle ceremonies, and housewarmings.",
    details: "Vibrant and joyful theme setups custom-crafted for family milestones, naming ceremonies, anniversaries, and community celebrations.",
    category: "Other Functions",
    suitableFor: ["Birthdays", "Baby Showers", "Anniversaries"]
  },
  {
    id: "flower-decorations",
    title: "Flower Decorations",
    icon: "🌺",
    shortDescription: "Fresh natural flowers, exotic orchids, fragrant jasmine, traditional marigold garlands, and artificial floral art.",
    details: "Master floral craftsmanship including fresh flower hangings, floral rangoli, fragrance arches, and artistic table centerpieces.",
    category: "Flower Decorations",
    suitableFor: ["Puja", "Weddings", "Traditional Rituals"]
  },
  {
    id: "custom-decorations",
    title: "Custom Decorations",
    icon: "🎊",
    shortDescription: "Tailored decorations built according to your personal vision, specific budget, and unique venue layout.",
    details: "Have a specific photo or theme in mind? Share your inspiration with us, and our team will customize every element to match your dreams.",
    category: "Custom Decorations",
    suitableFor: ["Bespoke Themes", "Destination Events", "Unique Venues"]
  }
];

export interface GalleryItem {
  id: string;
  title: string;
  category: "Wedding Decorations" | "Stage Decorations" | "Lighting" | "Flower Decorations" | "Tents" | "Other Functions";
  imageUrl: string;
  description: string;
  locationType: string;
}

export const GALLERY_CATEGORIES = [
  "All",
  "Wedding Decorations",
  "Stage Decorations",
  "Lighting",
  "Flower Decorations",
  "Tents",
  "Other Functions"
] as const;

export type GalleryCategory = typeof GALLERY_CATEGORIES[number];

/**
 * GALLERY_ITEMS:
 * Replace any image URL below with your own photo paths (e.g. `/my-photos/stage1.jpg`)
 * or add new items to this array.
 */
export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Grand Royal Wedding Mandap & Stage",
    category: "Wedding Decorations",
    imageUrl: heroBgImg,
    description: "Lavish floral mandap with fresh yellow & orange marigolds, golden pillars, and traditional brass lamps.",
    locationType: "Resort Wedding"
  },
  {
    id: "gal-2",
    title: "Floral Arch Reception Stage",
    category: "Stage Decorations",
    imageUrl: stageImg,
    description: "Multi-layered floral arch backdrop with red roses, white carnations, and royal golden carved couple seating.",
    locationType: "Banquet Hall"
  },
  {
    id: "gal-3",
    title: "Grand Celebratory Shamiana Tent",
    category: "Tents",
    imageUrl: tentImg,
    description: "Outdoor luxury marquee tent with pleated golden ceiling fabrics, chandeliers, and clean banquet chair rows.",
    locationType: "Open Ground Function"
  },
  {
    id: "gal-4",
    title: "Enchanted Fairy Lights & Audio Setup",
    category: "Lighting",
    imageUrl: lightingImg,
    description: "Warm golden fairy light canopy walkway with ambient tree spot lamps and crisp surround sound towers.",
    locationType: "Evening Lawn Reception"
  },
  {
    id: "gal-5",
    title: "Traditional Marigold & Jasmine Flower Decor",
    category: "Flower Decorations",
    imageUrl: heroBgImg,
    description: "Authentic temple-style floral pillars, fresh jasmine curtain strands, and marigold bell hangings.",
    locationType: "Muhurtham Ceremony"
  },
  {
    id: "gal-6",
    title: "Festive Birthday & Milestone Celebration Stage",
    category: "Other Functions",
    imageUrl: stageImg,
    description: "Joyful celebratory balloon and floral thematic backdrop with accent lighting and custom nameplate.",
    locationType: "Family Celebration Hall"
  },
  {
    id: "gal-7",
    title: "VIP Red Carpet Walkway & Chair Setup",
    category: "Tents",
    imageUrl: tentImg,
    description: "Pristine white chair covers with gold bows, bordered red aisle carpet, and illuminated entrance frame.",
    locationType: "Outdoor Marriage"
  },
  {
    id: "gal-8",
    title: "High-Clarity Speaker & Sound Truss System",
    category: "Lighting",
    imageUrl: lightingImg,
    description: "Professional sound system setup combined with dynamic color par lighting for music and speeches.",
    locationType: "Stage Setup"
  }
];

export interface VideoItem {
  id: string;
  title: string;
  event: string;
  duration: string;
  thumbnailUrl: string;
  videoUrl?: string; // Optional direct video file URL
  embedUrl?: string; // Optional YouTube/Vimeo embed
  description: string;
}

/**
 * VIDEO_ITEMS:
 * Replace or add video items below. You can use direct MP4 video URLs or YouTube embed links.
 */
export const VIDEO_ITEMS: VideoItem[] = [
  {
    id: "vid-1",
    title: "Grand Wedding Reception Walkthrough",
    event: "Marriage & Reception Setup",
    duration: "0:45",
    thumbnailUrl: stageImg,
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    description: "A 360-degree walkthrough showing the entrance flower arch, couple stage backdrop, and guest lighting ambiance."
  },
  {
    id: "vid-2",
    title: "Fairy Lights & Night Illumination Tour",
    event: "Evening Lawn Reception",
    duration: "0:30",
    thumbnailUrl: lightingImg,
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyBlazes.mp4",
    description: "Full nighttime walkthrough highlighting the canopy fairy light ceiling, trees wrapped in lights, and stage focus lamps."
  },
  {
    id: "vid-3",
    title: "Outdoor Shamiana Tent & Complete Seating",
    event: "Outdoor Event Setup",
    duration: "0:40",
    thumbnailUrl: tentImg,
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    description: "Complete outdoor event setup showing the luxury ceiling drapes, banquet seating, carpet walkways, and sound system."
  }
];

export const WHY_CHOOSE_US_POINTS = [
  {
    title: "Beautiful and creative decorations",
    description: "Every setup is artistically crafted with fresh designs, radiant color harmony, and attention to detail that delights your guests."
  },
  {
    title: "Complete event setup",
    description: "No need to coordinate with multiple vendors — we provide end-to-end decorations, staging, seating, and ambiance."
  },
  {
    title: "Chairs, tents, mats, lighting & sound available",
    description: "We own and supply all essential event equipment under one roof, keeping your planning smooth, hassle-free, and punctual."
  },
  {
    title: "Suitable for different types of functions",
    description: "Whether it is an intimate home puja, birthday, baby shower, or a grand wedding of 2,000+ guests, we adapt effortlessly."
  },
  {
    title: "Professional service",
    description: "On-time arrival, reliable crew, disciplined execution, and spotless cleanup after your function concludes."
  },
  {
    title: "We come to your location",
    description: "No matter where your venue, home, or outdoor ground is situated, our team travels to you with all required materials."
  },
  {
    title: "Customized according to your requirements",
    description: "We listen to your ideas, honor your cultural traditions, and tailor every detail to your preferred style and budget."
  }
];

export const HERO_BG_IMAGE = heroBgImg;
