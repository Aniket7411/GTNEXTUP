import { Metadata } from 'next';
import CustomSofts from '../pages/CustomSofts';
import { getMetadataForPath } from '../pages/utils/metadata';

export const metadata: Metadata = getMetadataForPath('/custom-software-development-company');

export default function CustomSoftwareDevelopmentPage() {
  return <CustomSofts />;
}
