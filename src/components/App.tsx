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
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/auth" component={Auth} />
        <Route path="/main" component={Main} />
      </Switch>
    </BrowserRouter>
  </Provider>
);

export default App;
