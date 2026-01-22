import { Metadata } from 'next';
import JobsComponent from '../../pages/pages/Jobs/Jobs';
import { getMetadataForPath } from '../../pages/utils/metadata';

type Props = {
  params: {
    id: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const pathname = `/jobs/${params.id}`;
  return getMetadataForPath(pathname);
}

export default function JobPage({ params }: Props) {
  return <JobsComponent />;
}
