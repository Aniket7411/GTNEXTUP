import { Metadata } from 'next';
import GsapCarousel from '../pages/GsapCarousel';

export const metadata: Metadata = {
  title: 'GSAP Carousel - Getraise Technologies',
  description: 'GSAP Carousel demonstration page.',
};

export default function GsapCarPage() {
  return <GsapCarousel />;
}
