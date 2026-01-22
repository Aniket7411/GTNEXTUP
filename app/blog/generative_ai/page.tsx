import { Metadata } from 'next';
import GenerativeAIPageComponent from '../../pages/blog/GenerativeAIPage';
import { getMetadataForPath } from '../../pages/utils/metadata';

export const metadata: Metadata = getMetadataForPath('/blog/generative_ai');

export default function GenerativeAIPage() {
  return <GenerativeAIPageComponent />;
}
