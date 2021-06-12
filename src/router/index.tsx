import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Auth from 'components/pages/Auth';
import Home from 'components/pages/Home';
import Login from 'components/pages/Login';
import NotFoundPage from 'components/pages/NotFoundPage';
import ArchivingList from 'components/pages/ArchivingList';
import Archive from 'components/pages/Archive';
import ArchivePost from 'components/pages/ArchivePost';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/auth" component={Auth} />
        <Route exact path="/archive/post" component={ArchivePost} />
        <Route path="/archiving-list" component={ArchivingList} />
        <Route path="/archive/:id" component={Archive} />
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
