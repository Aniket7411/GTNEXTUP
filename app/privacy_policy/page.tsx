import { Metadata } from 'next';
import Privacypolicies from '../pages/Privacypolicies';
import { getMetadataForPath } from '../pages/utils/metadata';

export const metadata: Metadata = getMetadataForPath('/privacy_policy');

export default function PrivacyPolicyPage() {
  return <Privacypolicies />;
}
