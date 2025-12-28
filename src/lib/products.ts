import bpc157Image from '@/assets/products/bpc-157.jpg';
import tb500Image from '@/assets/products/tb-500.jpg';
import ipamorelinImage from '@/assets/products/ipamorelin.jpg';
import cjc1295Image from '@/assets/products/cjc-1295.jpg';
import epithaloneImage from '@/assets/products/epithalon.jpg';
import selankImage from '@/assets/products/selank.jpg';

export interface Product {
  id: string;
  name: string;
  shortName: string;
  description: string;
  shortDescription: string;
  price: number;
  originalPrice?: number;
  purity: string;
  category: string;
  benefits: string[];
  dosages: string[];
  rating: number;
  reviews: number;
  inStock: boolean;
  stockCount: number;
  badge?: 'best-seller' | 'new' | 'sale';
  image: string;
  form: 'injection' | 'oral' | 'topical';
  forLevel: 'beginner' | 'intermediate' | 'advanced';
}

export const products: Product[] = [
  {
    id: 'bpc-157',
    name: 'BPC-157 Pro+',
    shortName: 'BPC-157',
    description: "BPC-157 Pro+ isn't just another peptide—it's your body's reset button. This pharmaceutical-grade formulation (99.9% pure, batch tested) accelerates tissue repair at the cellular level, helping you recover 40% faster from intense training. Backed by 15+ clinical studies and trusted by elite athletes worldwide.",
    shortDescription: 'Accelerated tissue repair & recovery',
    price: 89.99,
    originalPrice: 119.99,
    purity: '99.9%',
    category: 'Recovery',
    benefits: ['Tissue Repair', 'Gut Health', 'Muscle Recovery', 'Anti-Inflammatory'],
    dosages: ['5mg', '10mg', '15mg'],
    rating: 4.9,
    reviews: 248,
    inStock: true,
    stockCount: 45,
    badge: 'best-seller',
    image: bpc157Image,
    form: 'injection',
    forLevel: 'intermediate',
  },
  {
    id: 'tb-500',
    name: 'TB-500 Elite',
    shortName: 'TB-500',
    description: 'TB-500 Elite promotes systemic healing through thymosin beta-4, a naturally occurring peptide that regulates cell building, migration, and differentiation. Experience enhanced flexibility, reduced inflammation, and accelerated wound healing.',
    shortDescription: 'Systemic healing & flexibility',
    price: 94.99,
    purity: '99.8%',
    category: 'Recovery',
    benefits: ['Wound Healing', 'Flexibility', 'Cell Migration', 'Anti-Inflammatory'],
    dosages: ['2mg', '5mg', '10mg'],
    rating: 4.8,
    reviews: 186,
    inStock: true,
    stockCount: 32,
    badge: 'new',
    image: tb500Image,
    form: 'injection',
    forLevel: 'intermediate',
  },
  {
    id: 'ipamorelin',
    name: 'Ipamorelin Ultra',
    shortName: 'Ipamorelin',
    description: 'Ipamorelin Ultra is a selective growth hormone secretagogue that stimulates natural GH release without affecting cortisol or prolactin. Ideal for lean muscle gains, improved sleep quality, and enhanced recovery.',
    shortDescription: 'Natural GH release & muscle gains',
    price: 79.99,
    purity: '99.9%',
    category: 'Muscle Growth',
    benefits: ['Lean Muscle', 'Better Sleep', 'Fat Loss', 'Recovery'],
    dosages: ['2mg', '5mg', '10mg'],
    rating: 4.9,
    reviews: 312,
    inStock: true,
    stockCount: 58,
    badge: 'best-seller',
    image: ipamorelinImage,
    form: 'injection',
    forLevel: 'beginner',
  },
  {
    id: 'cjc-1295',
    name: 'CJC-1295 DAC',
    shortName: 'CJC-1295',
    description: 'CJC-1295 with DAC provides sustained growth hormone releasing hormone (GHRH) activity for up to 7 days per injection. Experience enhanced muscle growth, improved body composition, and accelerated recovery.',
    shortDescription: 'Extended GH release formula',
    price: 109.99,
    originalPrice: 129.99,
    purity: '99.7%',
    category: 'Muscle Growth',
    benefits: ['Extended GH Release', 'Muscle Growth', 'Body Composition', 'Deep Sleep'],
    dosages: ['2mg', '5mg'],
    rating: 4.7,
    reviews: 156,
    inStock: true,
    stockCount: 24,
    badge: 'sale',
    image: cjc1295Image,
    form: 'injection',
    forLevel: 'advanced',
  },
  {
    id: 'pt-141',
    name: 'PT-141 Vitality',
    shortName: 'PT-141',
    description: 'PT-141 Vitality works directly on the nervous system to enhance arousal and desire. This breakthrough peptide offers a natural approach to improved intimacy and confidence.',
    shortDescription: 'Enhanced vitality & wellness',
    price: 84.99,
    purity: '99.9%',
    category: 'Wellness',
    benefits: ['Vitality', 'Confidence', 'Well-being', 'Natural Enhancement'],
    dosages: ['5mg', '10mg'],
    rating: 4.8,
    reviews: 98,
    inStock: true,
    stockCount: 19,
    image: bpc157Image,
    form: 'injection',
    forLevel: 'intermediate',
  },
  {
    id: 'selank',
    name: 'Selank Cognitive',
    shortName: 'Selank',
    description: 'Selank Cognitive is a nootropic peptide that enhances memory, focus, and mental clarity while reducing anxiety. Experience peak cognitive performance without the jitters.',
    shortDescription: 'Focus, memory & mental clarity',
    price: 69.99,
    purity: '99.8%',
    category: 'Cognitive',
    benefits: ['Memory', 'Focus', 'Anxiety Relief', 'Mental Clarity'],
    dosages: ['5mg', '10mg'],
    rating: 4.7,
    reviews: 134,
    inStock: true,
    stockCount: 41,
    badge: 'new',
    image: selankImage,
    form: 'injection',
    forLevel: 'beginner',
  },
  {
    id: 'epithalon',
    name: 'Epithalon Longevity',
    shortName: 'Epithalon',
    description: 'Epithalon Longevity is the premier anti-aging peptide, promoting telomerase activation to protect and extend telomere length. Turn back the biological clock at the cellular level.',
    shortDescription: 'Cellular anti-aging & longevity',
    price: 149.99,
    purity: '99.9%',
    category: 'Longevity',
    benefits: ['Telomere Extension', 'Anti-Aging', 'Cellular Health', 'Sleep Quality'],
    dosages: ['10mg', '50mg', '100mg'],
    rating: 4.9,
    reviews: 89,
    inStock: true,
    stockCount: 15,
    badge: 'best-seller',
    image: epithaloneImage,
    form: 'injection',
    forLevel: 'advanced',
  },
  {
    id: 'ghk-cu',
    name: 'GHK-Cu Rejuvenate',
    shortName: 'GHK-Cu',
    description: 'GHK-Cu Rejuvenate harnesses the power of copper peptides for skin regeneration, collagen synthesis, and wound healing. The ultimate peptide for skin health and appearance.',
    shortDescription: 'Skin regeneration & collagen',
    price: 74.99,
    purity: '99.8%',
    category: 'Anti-Aging',
    benefits: ['Skin Health', 'Collagen Synthesis', 'Wound Healing', 'Hair Growth'],
    dosages: ['50mg', '100mg', '200mg'],
    rating: 4.8,
    reviews: 167,
    inStock: true,
    stockCount: 37,
    image: tb500Image,
    form: 'topical',
    forLevel: 'beginner',
  },
];

export const categories = [
  'All',
  'Recovery',
  'Muscle Growth',
  'Cognitive',
  'Longevity',
  'Anti-Aging',
  'Wellness',
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(p => p.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  if (category === 'All') return products;
  return products.filter(p => p.category === category);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(p => p.badge === 'best-seller').slice(0, 3);
};
