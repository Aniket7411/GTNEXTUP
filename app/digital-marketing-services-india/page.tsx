import { Metadata } from 'next';
import DataDrivenMarketing from '../pages/DataDrivenMarketing';
import { getMetadataForPath } from '../pages/utils/metadata';

export const metadata: Metadata = getMetadataForPath('/digital-marketing-services-india');

export default function DigitalMarketingServicesPage() {
  return <DataDrivenMarketing />;
}
