import { Metadata } from 'next';
import BusinessSection from '../pages/BusinessSection';
import { getMetadataForPath } from '../pages/utils/metadata';

export const metadata: Metadata = getMetadataForPath('/products');

export default function ProductsPage() {
  return <BusinessSection />;
}
