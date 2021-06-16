import { logger } from '@lubycon/utils';
import ArchiveTemplate from 'components/templates/ArchiveTemplate';
import MainTemplate from 'components/templates/MainTemplate';
import { useQueryStringAndParam } from 'hooks';
import { useEffect } from 'react';

const archivePageLogger = logger.getPageLogger('archive_page');

const ArchivingDetail = () => {
  const { id } = useQueryStringAndParam<{ id: number }>().query;

  useEffect(() => {
    archivePageLogger.view();
  }, []);

  return (
    <MainTemplate>
      <ArchiveTemplate archiveId={id} />
    </MainTemplate>
  );
};

export default ArchivingDetail;
