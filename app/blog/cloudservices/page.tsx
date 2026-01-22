import { Metadata } from 'next';
import CloudservicesblogComponent from '../../pages/blog/Cloudservicesblog';
import { getMetadataForPath } from '../../pages/utils/metadata';

export const metadata: Metadata = getMetadataForPath('/blog/cloudservices');

export default function CloudServicesBlogPage() {
  return <CloudservicesblogComponent />;
}
