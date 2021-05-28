import Auth from 'components/pages/Auth';
import Home from 'components/pages/Home';
import Login from 'components/pages/Login';
import Main from 'components/pages/Main';
import ArchivingList from 'components/pages/ArchivingList';
import CareerzipReport from 'components/pages/CareerzipReport';
import ProjectManagement from 'components/pages/ProjectManagement';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/auth" component={Auth} />
        <Route path="/main" component={Main} />
        <Route path="/archiving-list" component={ArchivingList} />
        <Route path="/careerzip-report" component={CareerzipReport} />
        <Route path="/project-management" component={ProjectManagement} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
