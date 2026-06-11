import {
  Binoculars,
  Camera,
  Compass,
  HeartHandshake,
  Leaf,
  MapPinned,
  Mountain,
  Route,
  ShieldCheck,
  Sparkles,
  Sprout,
  UsersRound,
  Utensils,
} from 'lucide-react';

export const destinations = [
  {
    name: 'Mussoorie',
    image: 'https://images.unsplash.com/photo-1626621331169-5f34be280ed9?auto=format&fit=crop&w=1200&q=80',
    rating: '4.9',
    badge: 'Low-impact stays',
    description: 'Misty ridge walks, family-run hillside homes, and forest cafes above the Doon valley.',
  },
  {
    name: 'Rishikesh',
    image: 'https://images.unsplash.com/photo-1596021688656-35fdc9ed0274?auto=format&fit=crop&w=1200&q=80',
    rating: '4.8',
    badge: 'River conscious',
    description: 'Yoga retreats, rafting routes, and local guides who keep the Ganga experience respectful.',
  },
  {
    name: 'Manali',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80',
    rating: '4.9',
    badge: 'Verified hosts',
    description: 'Apple orchards, mountain cabins, and AI-planned slow travel through the Kullu valley.',
  },
  {
    name: 'Coorg',
    image: 'https://images.unsplash.com/photo-1609766857041-ed402ea8069a?auto=format&fit=crop&w=1200&q=80',
    rating: '4.7',
    badge: 'Farm stays',
    description: 'Coffee estate stays, spice trails, and Kodava food experiences led by local families.',
  },
  {
    name: 'Meghalaya',
    image: 'https://images.unsplash.com/photo-1625826418975-92904f664fd4?auto=format&fit=crop&w=1200&q=80',
    rating: '4.9',
    badge: 'Community first',
    description: 'Living-root bridges, village trails, and community-guided journeys through cloud forests.',
  },
  {
    name: 'Hampi',
    image: 'https://images.unsplash.com/photo-1616606484004-5ef3cc46e39d?auto=format&fit=crop&w=1200&q=80',
    rating: '4.8',
    badge: 'Heritage mindful',
    description: 'Sunrise boulder walks, heritage storytelling, and artisan-led slow travel experiences.',
  },
];

export const experiences = [
  { icon: Mountain, title: 'Trekking', text: 'Guided trails with verified safety checks and terrain-aware pacing.' },
  { icon: Utensils, title: 'Food Tours', text: 'Home kitchens, street stories, and regional meals hosted by locals.' },
  { icon: Camera, title: 'Photography Walks', text: 'Golden-hour routes curated for landscapes, culture, and portraits.' },
  { icon: HeartHandshake, title: 'Cultural Experiences', text: 'Respectful workshops, festivals, and living heritage encounters.' },
  { icon: Route, title: 'Cycling Tours', text: 'Low-carbon routes through farms, riverside lanes, and old towns.' },
  { icon: Sprout, title: 'Farm Stays', text: 'Hands-on stays supporting growers, families, and rural livelihoods.' },
];

export const benefits = [
  { icon: Sparkles, title: 'AI Recommendations', text: 'Personalized stays and routes tuned to budget, interests, pace, and impact.' },
  { icon: ShieldCheck, title: 'Verified Homestays', text: 'Trust signals for hosts, safety, sustainability practices, and guest fit.' },
  { icon: Binoculars, title: 'Hidden Gems Discovery', text: 'Less-crowded places surfaced through community knowledge and smart filters.' },
  { icon: MapPinned, title: 'Trip Planning', text: 'Itinerary, transport, budget, and timing suggestions in one calm workflow.' },
  { icon: UsersRound, title: 'Community Tourism', text: 'Travel choices that route value toward local guides, creators, and hosts.' },
  { icon: Compass, title: 'Safety Intelligence', text: 'Destination readiness, route context, and practical signals before you go.' },
];

export const impactStats = [
  { value: '5', label: 'Local Businesses Supported' },
  { value: '2', label: 'Women Entrepreneurs Empowered' },
  { value: '1', label: 'Artisan Workshop Supported' },
  { value: '100%', label: 'Community Driven Experiences' },
];

export const testimonials = [
  {
    name: 'Aarav Mehta',
    role: 'Product designer, Bengaluru',
    avatar: 'AM',
    review: 'EcoStay AI planned a quieter Rishikesh trip than anything I found on travel blogs. The homestay felt personal, verified, and genuinely local.',
    rating: '5.0',
  },
  {
    name: 'Nisha Rao',
    role: 'Family traveler, Pune',
    avatar: 'NR',
    review: 'The budget-aware planner helped us keep a Mussoorie trip under control without sacrificing comfort. The local food walk was the highlight.',
    rating: '4.9',
  },
  {
    name: 'Devika Sen',
    role: 'Creator, Kolkata',
    avatar: 'DS',
    review: 'I loved that the platform showed impact, safety, and sustainability in one place. It made choosing a trip feel much more intentional.',
    rating: '5.0',
  },
];

export const suggestions = ['Adventure Trip', 'Family Vacation', 'Hidden Gems', 'Workation', 'Photography Tour'];

export const footerLinks = {
  Product: ['Discover', 'Trip Planner', 'Verified Stays', 'Impact Score'],
  Community: ['Creator Hub', 'Local Hosts', 'Community Pins', 'Stories'],
  Support: ['Help Center', 'Safety', 'Cancellation', 'Contact'],
  Legal: ['Privacy', 'Terms', 'Trust Policy', 'Sustainability'],
};

export const heroMetrics = [
  { icon: Leaf, label: 'Sustainability score', value: '92/100' },
  { icon: ShieldCheck, label: 'Verified stays', value: '48' },
  { icon: Route, label: 'AI route fit', value: 'Excellent' },
];
