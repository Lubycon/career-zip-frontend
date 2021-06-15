import { checkIfUserArchived } from 'api/archive';
import { useEffect, useState } from 'react';

const useHasArchived = () => {
  const [hasArchived, setHasArchived] = useState(null);
  const [thisWeekArchiveId, setThisWeekArchiveId] = useState(null);

  const checkIfUserArchivedAsync = async () => {
    const {
      data: { data },
    } = await checkIfUserArchived();
    const { archived, id } = data;

    setHasArchived(archived);
    if (archived) setThisWeekArchiveId(id);
  };

  useEffect(() => {
    checkIfUserArchivedAsync();
  }, []);

  return {
    hasArchived,
    thisWeekArchiveId,
  };
};

export default useHasArchived;
