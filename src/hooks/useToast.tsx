import { ReactNode, useCallback, useEffect, useState } from 'react';
import Toast from 'components/atoms/Toast';

const useToast = (time = 2000) => {
  const [isVisible, setVisible] = useState(false);

  const handleShowToast = useCallback(() => {
    setVisible(true);
  }, []);

  useEffect(() => {
    if (isVisible) {
      const showToast = setTimeout(() => setVisible(false), time);

      return () => {
        clearTimeout(showToast);
      };
    }
  }, [isVisible]);

  const renderToast = (children: ReactNode) => <Toast isVisible={isVisible}>{children}</Toast>;

  return { handleShowToast, renderToast };
};

export default useToast;
