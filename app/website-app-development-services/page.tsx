import { Metadata } from 'next';
import WebnAppDev from '../pages/WebnAppDev';
import { getMetadataForPath } from '../pages/utils/metadata';

export const metadata: Metadata = getMetadataForPath('/website-app-development-services');

export default function WebsiteAppDevelopmentPage() {
  return <WebnAppDev />;
}
