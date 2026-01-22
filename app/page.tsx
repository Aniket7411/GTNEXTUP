import { Metadata } from 'next';
import HomePagen from './pages/HomePagemain/HomePagen';
import { getMetadataForPath } from './pages/utils/metadata';

export const metadata: Metadata = getMetadataForPath('/');

export default function Home() {
  return <HomePagen />;
}
