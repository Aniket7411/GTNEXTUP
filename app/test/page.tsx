import { Metadata } from 'next';
import Testpage from '../pages/Testpage';

export const metadata: Metadata = {
  title: 'Test Page - Getraise Technologies',
  description: 'Test page for development purposes.',
};

export default function TestPage() {
  return <Testpage />;
}
