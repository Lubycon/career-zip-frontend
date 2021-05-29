import queryString from 'query-string';
import { useMemo, useState } from 'react';
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

const useModal = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleOpenModal = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  return {
    isModalVisible,
    handleOpenModal,
    handleCloseModal,
  };
};

export { useQueryStringAndParam, useModal };
