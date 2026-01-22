import { Metadata } from 'next';
import UiUxSinglePage from '../pages/UiUxSinglePage';
import { getMetadataForPath } from '../pages/utils/metadata';

export const metadata: Metadata = getMetadataForPath('/ui-ux-design-services-india');

export default function UiUxDesignServicesPage() {
  return <UiUxSinglePage />;
}
