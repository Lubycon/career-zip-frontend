import { useLocation } from 'react-router';

const useQuery = (): any => {
  return new URLSearchParams(useLocation().search);
};

export default useQuery;
