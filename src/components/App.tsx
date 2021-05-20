import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';

const App = () => (
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
);

export default App;
