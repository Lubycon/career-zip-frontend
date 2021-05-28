import React from 'react';
import { Global } from '@emotion/react';
import { Provider } from 'react-redux';
import Router from 'router';
import store from 'slices';
import global from 'styles/global';

const App = () => (
  <>
    <Global styles={global} />
    <Provider store={store}>
      <Router />
    </Provider>
  </>
);

export default App;
