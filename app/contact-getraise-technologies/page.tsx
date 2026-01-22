import { Metadata } from 'next';
import ContactForm from '../pages/ContactForm';
import { getMetadataForPath } from '../pages/utils/metadata';

export const metadata: Metadata = getMetadataForPath('/contact-getraise-technologies');

export default function ContactGetraiseTechnologiesPage() {
  return <ContactForm />;
}
