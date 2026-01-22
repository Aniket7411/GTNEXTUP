import { Metadata } from 'next';
import MortgageServicesPage from '../pages/MortgageServicesPage';
import { getMetadataForPath } from '../pages/utils/metadata';

export const metadata: Metadata = getMetadataForPath('/mortgage-services');

export default function MortgageServicesPageRoute() {
  return <MortgageServicesPage />;
}
