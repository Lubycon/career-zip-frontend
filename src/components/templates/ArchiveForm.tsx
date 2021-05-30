import { useEffect, useState } from 'react';
import { getArchive } from 'api/archive';
import { IArchive } from 'types';
import { Flex } from 'rebass';
import ArchiveFormHeader from 'components/organisms/ArchiveFormHeader';
import ArchiveFormProjects from 'components/molecules/ArchiveFormProjects';
import ArchiveFormQuestions from 'components/molecules/ArchiveFormQuestions';

interface IArchiveForm {
  archiveId: number;
}

const ArchiveForm = ({ archiveId }: IArchiveForm) => {
  const [archive, setArchive] = useState<IArchive>();

  useEffect(() => {
    const getArchiveAsync = async (id: number) => {
      try {
        const {
          data: { data },
        } = await getArchive(id);
        setArchive(data);
      } catch (err) {
        // tbd
      }
    };
    getArchiveAsync(archiveId);
  }, [archiveId]);

  const handleEdit = () => {};

  const handleDelete = () => {};

  if (!archive) return null;
  const { startDate, endDate, createdDateTime, selectedProjects, questions } = archive;
  return (
    <Flex flexDirection="column">
      <ArchiveFormHeader
        date={`${startDate}(월) ~ ${endDate}(금)`}
        createdAt={createdDateTime}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
      <ArchiveFormProjects projects={selectedProjects} />
      <ArchiveFormQuestions questions={questions} />
    </Flex>
  );
};

export default ArchiveForm;
