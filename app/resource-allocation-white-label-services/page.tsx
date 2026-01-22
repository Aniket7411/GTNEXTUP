import { Metadata } from 'next';
import ResourceAllocation from '../pages/ResourceAllocation';
import { getMetadataForPath } from '../pages/utils/metadata';

export const metadata: Metadata = getMetadataForPath('/resource-allocation-white-label-services');

export default function ResourceAllocationPage() {
  return <ResourceAllocation />;
}
