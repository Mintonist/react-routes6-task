import React from 'react';
import { NavLink, Route, Switch, Redirect } from 'react-router-dom';
import UserEditPage from '../pages/UserEditPage';
import UserPage from '../pages/UserPage';
import UsersListPage from '../pages/UsersListPage';

const UsersLayout = () => {
  return (
    <>
      <h1>UsersLayout</h1>
      <NavLink to="/">NavLink to MainPage</NavLink>
      <Switch>
        <Route exact path="/users">
          <UsersListPage />
        </Route>
        <Route exact path="/users/:userId?/profile">
          <UserPage />
        </Route>
        <Route exact path="/users/:userId?/edit">
          <UserEditPage />
        </Route>
        <Redirect from="/users/:userId?" to="/users/:userId?/profile" />
        <Redirect to="/users" />
      </Switch>
    </>
  );
};

export default UsersLayout;
