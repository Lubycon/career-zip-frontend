import ArchiveForm from 'components/templates/ArchiveForm';
import MainTemplate from 'components/templates/MainTemplate';
import { useQueryStringAndParam } from 'hooks';

const ArchivingDetail = () => {
  const { id } = useQueryStringAndParam<{ id: number }>().query;

  return (
    <MainTemplate>
      <ArchiveForm archiveId={id} />
    </MainTemplate>
  );
};

export default ArchivingDetail;
