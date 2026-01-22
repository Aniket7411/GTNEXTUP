import { Metadata } from 'next';
import CookiesPolicy from '../pages/CookiesPolicy';
import { getMetadataForPath } from '../pages/utils/metadata';

export const metadata: Metadata = getMetadataForPath('/cookies_policy');

export default function CookiesPolicyPage() {
  return <CookiesPolicy />;
}
