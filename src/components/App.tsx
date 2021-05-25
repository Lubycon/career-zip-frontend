import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import store from 'slices';
import Auth from './pages/Auth';
import Home from './pages/Home';
import Login from './pages/Login';
import Main from './pages/Main';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/auth">
          <Auth />
        </Route>
        <Route path="/main">
          <Main />
        </Route>
      </Switch>
    </BrowserRouter>
  </Provider>
);

export default App;
