import { Metadata } from 'next';
import AboutUs from '../pages/AboutUs';
import { getMetadataForPath } from '../pages/utils/metadata';

export const metadata: Metadata = getMetadataForPath('/about-getraise-technologies');

export default function AboutGetraiseTechnologiesPage() {
  return <AboutUs />;
}
