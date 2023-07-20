import React from 'react';
import { NavLink, Route, Switch, Redirect } from 'react-router-dom';
import UsersLayout from './layouts/UsersLayout';
import withRouter from './hoc/withRouter';
import MainPage from './pages/MainPage';

function App() {
  return (
    <>
      <h1>App</h1>
      <NavLink to="/users">NavLink to user list</NavLink>
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route path="/users">
          <UsersLayout />
        </Route>
        <Redirect to="/" />
      </Switch>
    </>
  );
}

const AppWithStoreAndRoutes = withRouter(App);
export default AppWithStoreAndRoutes;
