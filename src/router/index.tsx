import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Auth from 'components/pages/Auth';
import Home from 'components/pages/Home';
import Login from 'components/pages/Login';
import TempMain from 'components/pages/TempMain';
import NotFoundPage from 'components/pages/NotFoundPage';
// import ArchivingList from 'components/pages/ArchivingList';
// import CareerzipReport from 'components/pages/CareerzipReport';
// import ProjectManagement from 'components/pages/ProjectManagement';
// import Archive from 'components/pages/Archive';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/auth" component={Auth} />
        <Route path="/main" component={TempMain} />
        <Route component={NotFoundPage} />
        {/* <Route path="/archiving-list" component={ArchivingList} />
        <Route path="/archive/:id" component={Archive} />
        <Route path="/careerzip-report" component={CareerzipReport} />
        <Route path="/project-management" component={ProjectManagement} /> */}
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
