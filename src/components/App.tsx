import React, { useEffect } from 'react';
import { Global } from '@emotion/react';
import { Provider } from 'react-redux';
import Router from 'router';
import store from 'slices';
import global from 'styles/global';
import { ToastProvider } from 'context/Toast';
import { logger } from '@lubycon/logger';
import { isProduction } from 'utils/misc';
import { firebaseConfig } from 'constants/firebase';

const App = () => {
  useEffect(() => {
    logger.init({
      services: {
        ...(isProduction && { firebase: firebaseConfig }),
        amplitude: process.env.AMPLITUDE_APP_KEY,
      },
      mode: isProduction ? 'production' : 'development',
    });
  }, []);

  return (
    <>
      <Global styles={global} />
      <Provider store={store}>
        <ToastProvider>
          <Router />
        </ToastProvider>
      </Provider>
    </>
  );
};

export default App;
