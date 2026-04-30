import { NextResponse } from 'next/server'

import { HeaderItem } from '@/app/types/menu'
import { FeaturesType } from '@/app/types/features'
import { ExpertChiefType } from '@/app/types/expertchief'
import { FounderType } from '@/app/types/founder'
import { GalleryImagesType } from '@/app/types/ourowkimage'
import { FooterLinkType } from '@/app/types/footerlink'
import { FullMenuType } from '@/app/types/fullmenu'

const HeaderData: HeaderItem[] = [
  { label: 'About Us', href: '/#aboutus', className: 'text-white' },
  { label: 'Menu', href: '/#menu', className: 'text-white' },
  { label: 'Contact Us', href: '/#contactus', className: 'text-white' },
]

const FeaturesData: FeaturesType[] = [
  {
    imgSrc: '/images/Features/field-planning.png',
    heading: 'Field Planning',
    subheading:
      'Effective field planning is the foundation of a successful farm.',
  },
  {
    imgSrc: '/images/Features/growth-monitoring.png',
    heading: 'Growth Monitoring',
    subheading:
      'Growth monitoring is essential for ensuring healthy crops.',
  },
  {
    imgSrc: '/images/Features/plant-nurture.png',
    heading: 'Plant Nurture',
    subheading:
      'Plant nurture provides crops with care and resources to thrive.',
  },
  {
    imgSrc: '/images/Features/farm-delivery.png',
    heading: 'Farm Delivery',
    subheading:
      'Farm delivery brings fresh produce quickly and efficiently.',
  }
]

const ExpertChiefData: ExpertChiefType[] = [
  {
    profession: 'Senior Chef',
    name: 'John Doe',
    imgSrc: '/images/member/team-john-doe.png',
  },
  {
    profession: 'Junior Chef',
    name: 'Jane Doe',
    imgSrc: '/images/member/team-john-doe.png',
  },
  {
    profession: 'Junior Chef',
    name: 'Alex Smith',
    imgSrc: '/images/member/team-john-doe.png',
  },
]

const FounderData: FounderType[] = [
  {
    profession: 'Co-Founder & CEO',
    name: 'Marco Benton',
    imgSrc: '/images/founder/founder-img.png',
    outsideText:
      'Leads company vision and partnerships. Former hospitality director with 15+ years scaling guest-first brands.',
    outsideTextSide: 'left',
  },
  {
    profession: 'Co-Founder & Creative Director',
    name: 'Elena Rivera',
    imgSrc: '/images/founder/co-founder-img.png',
    outsideText:
      'Shapes brand, menu identity, and in-house experience — from plating to the stories guests take home.',
    outsideTextSide: 'right',
  },
]

const GalleryImagesData: GalleryImagesType[] = [
  {
    src: '/images/Gallery/urban-design.jpg',
    name: 'Urban Design',
    description:
      'Landscape and infrastructure design that blends productive green space with how communities live and work.',
  },
  {
    src: '/images/Gallery/dairy-farming.jpg',
    name: 'Dairy Farming',
    description:
      'Dairy farming is the practice of raising cattle to produce milk and other dairy products.',
  },
  {
    src: '/images/Gallery/fish-harvest.jpg',
    name: 'Fish Harvesting',
    description:
      'Fish harvesting is the process of catching fish from the water.',
  },
  {
    src: '/images/Gallery/golden-grain.jpg',
    name: 'Golden Grain',
    description:
      'Field-to-storage practices that protect yield, grade, and value across the grain supply chain.',
  },
  {
    src: '/images/Gallery/ldc-resto-img.jpg',
    name: 'Restaurant',
    description:
      'Food experiences rooted in freshness, execution, and the story behind each plate.',
  },
  {
    src: '/images/Gallery/ldc-coffee-shop.jpg',
    name: 'Coffee Shop',
    description:
      'Warm, repeatable café operations—from sourcing and training to everyday guest rituals.',
  },
]

const FullMenuData: FullMenuType[] = [
  {
    name: 'Grilled Salmon',
    price: '$18.99',
    description: 'Served with lemon butter sauce and grilled vegetables.',
  },
  {
    name: 'Caesar Salad',
    price: '$9.99',
    description: 'Crisp romaine with parmesan, croutons, and Caesar dressing.',
  },
  {
    name: 'Margherita Pizza',
    price: '$13.49',
    description: 'Classic pizza with tomato, mozzarella, and fresh basil.',
  },
  {
    name: 'Tomato Basil Soup',
    price: '$6.99',
    description: 'Creamy tomato soup with a hint of garlic and fresh basil.',
  },
  {
    name: 'Chocolate Lava Cake',
    price: '$7.99',
    description:
      'Warm chocolate cake with a molten center served with vanilla ice cream.',
  },
  {
    name: 'Spaghetti Carbonara',
    price: '$15.25',
    description:
      'Spaghetti tossed with eggs, pancetta, parmesan, and black pepper.',
  },
  {
    name: 'Tiramisu',
    price: '$8.50',
    description:
      'Layered espresso-soaked ladyfingers with mascarpone and cocoa.',
  },
]

const FooterLinkData: FooterLinkType[] = [
  {
    section: 'Company',
    links: [
      { label: 'Home', href: '/' },
      { label: 'About Us', href: '/#aboutus' },
      { label: 'Menu', href: '/#menu' },
      { label: 'Reserve Table', href: '/#reserve' },
    ],
  },
]

export const GET = () => {
  return NextResponse.json({
    HeaderData,
    FeaturesData,
    ExpertChiefData,
    FounderData,
    GalleryImagesData,
    FullMenuData,
    FooterLinkData,
  })
}
