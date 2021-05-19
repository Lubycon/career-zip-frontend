import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import global from 'styles/global';
import { Global } from '@emotion/react';
import Home from './pages/Home';
import Login from './pages/Login';

const App = (): JSX.Element => (
  <>
    <Global styles={global} />
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </BrowserRouter>
  </>
);

export default App;
