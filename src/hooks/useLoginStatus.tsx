import { useEffect, useState } from 'react';
import { getLocalStorageItem } from 'utils/localstorage';

const useLoginStatus = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const accessToken = getLocalStorageItem('accessToken');
    const user = getLocalStorageItem('user');

    if (accessToken == null || user == null) return;
    setIsLoggedIn(true);
  }, []);

  return {
    isLoggedIn,
  };
};

export default useLoginStatus;
