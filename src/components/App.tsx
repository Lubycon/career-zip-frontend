import React from 'react';
import { Global } from '@emotion/react';
import { Provider } from 'react-redux';
import Router from 'router';
import store from 'slices';
import global from 'styles/global';
import { ToastProvider } from 'context/Toast';

const App = () => (
  <>
    <Global styles={global} />
    <Provider store={store}>
      <ToastProvider>
        <Router />
      </ToastProvider>
    </Provider>
  </>
);

export default App;
