import { Metadata } from 'next';
import WebdevelopmentblogComponent from '../../pages/blog/Webdevelopmentblog';
import { getMetadataForPath } from '../../pages/utils/metadata';

export const metadata: Metadata = getMetadataForPath('/blog/web_developement');

export default function WebDevelopmentBlogPage() {
  return <WebdevelopmentblogComponent />;
}
