import { useLocation } from 'react-router';
import { logger } from '@lubycon/utils';

const useLogger = () => {
  const location = useLocation();
  const { pathname } = location;
  const page = pathname === '/archiving-list' ? 'archiving_list_page' : 'archive_page';

  return {
    logger: logger.getPageLogger(page),
  };
};

export default useLogger;
