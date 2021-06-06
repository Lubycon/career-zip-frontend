import Toast, { ToastProps } from 'components/atoms/Toast';
import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';

interface ToastOptions extends ToastProps {
  duration?: number;
}

interface ToastGlobalState {
  showToast: (options: Omit<ToastOptions, 'isVisible'>) => void;
}

const ToastContext = createContext<ToastGlobalState>({
  showToast: () => {},
});

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [options, setOptions] = useState<ToastOptions>({
    isVisible: false,
    duration: 1000,
    message: '토스트 메세지',
  });

  useEffect(() => {
    if (options.isVisible) {
      const showToast = setTimeout(() => {
        document.getElementsByClassName('show')[0].classList.remove('show');
      }, options.duration);

      return () => {
        clearTimeout(showToast);
      };
    }
  }, [options]);

  const showToast = ({ duration = 1000, message }: Omit<ToastOptions, 'isVisible'>) => {
    setOptions({ isVisible: true, duration, message });
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      <Toast isVisible={options.isVisible} message={options.message} />
      {children}
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  return useContext(ToastContext);
};
