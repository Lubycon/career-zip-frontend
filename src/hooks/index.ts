import queryString from 'query-string';
import { useMemo } from 'react';
import { useParams } from 'react-router';

const useQueryStringAndParam = <T>() => {
  const params = useParams<T>();

  return useMemo(() => {
    return {
      query: {
        ...queryString.parse(window.location.search),
        ...params,
      },
    };
  }, [params]);
};

export default useQueryStringAndParam;
