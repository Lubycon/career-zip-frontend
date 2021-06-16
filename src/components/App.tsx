import React, { useEffect } from 'react';
import { Global } from '@emotion/react';
import { Provider } from 'react-redux';
import Router from 'router';
import store from 'slices';
import global from 'styles/global';
import { ToastProvider } from 'context/Toast';
import { logger } from '@lubycon/utils';
import { isProduction } from 'utils/misc';

const App = () => {
  useEffect(() => {
    logger.init({
      services: {
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
