import { Provider } from 'react-redux';
import Router from 'router';
import store from 'slices';

const App = () => (
  <Provider store={store}>
    <Router />
  </Provider>
);

export default App;
