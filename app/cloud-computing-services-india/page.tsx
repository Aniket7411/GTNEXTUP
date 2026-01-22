import { Metadata } from 'next';
import CloudServicesPage from '../pages/CloudServicesPage';
import { getMetadataForPath } from '../pages/utils/metadata';

export const metadata: Metadata = getMetadataForPath('/cloud-computing-services-india');

export default function CloudComputingServicesPage() {
  return <CloudServicesPage />;
}
