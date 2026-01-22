import { Metadata } from 'next';
import PerformanceMarketingComponent from '../../pages/blog/PerformanceMarketing';
import { getMetadataForPath } from '../../pages/utils/metadata';

export const metadata: Metadata = getMetadataForPath('/blog/performance_marketing');

export default function PerformanceMarketingPage() {
  return <PerformanceMarketingComponent />;
}
