import ArchiveTemplate from 'components/templates/ArchiveTemplate';
import MainTemplate from 'components/templates/MainTemplate';
import { useQueryStringAndParam } from 'hooks';

const ArchivingDetail = () => {
  const { id } = useQueryStringAndParam<{ id: number }>().query;

  return (
    <MainTemplate>
      <ArchiveTemplate archiveId={id} />
    </MainTemplate>
  );
};

export default ArchivingDetail;
