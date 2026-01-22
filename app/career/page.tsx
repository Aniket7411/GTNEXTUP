import { Metadata } from 'next';
import Career from '../pages/Career';
import { getMetadataForPath } from '../pages/utils/metadata';

export const metadata: Metadata = getMetadataForPath('/career');

export default function CareerPage() {
  return <Career />;
}
