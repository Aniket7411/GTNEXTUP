import { Metadata } from 'next';
import CustomSalesforceSolutions from '../pages/CustomSalesforceSolutions';
import { getMetadataForPath } from '../pages/utils/metadata';

export const metadata: Metadata = getMetadataForPath('/salesforce-development-services-india');

export default function SalesforceDevelopmentServicesPage() {
  return <CustomSalesforceSolutions />;
}
