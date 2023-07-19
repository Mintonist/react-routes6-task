import React from 'react';
import { Navigate, NavLink, Route, Routes } from 'react-router-dom';
import UsersLayout from './layouts/UsersLayout';
import withRouter from './hoc/withRouter';
import MainPage from './pages/MainPage';
import UserPage from './pages/UserPage';
import UsersListPage from './pages/UsersListPage';
import UserEditPage from './pages/UserEditPage';

function App() {
  return (
    <>
      <h1>App</h1>
      <NavLink to="/users">NavLink to user list</NavLink>
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="users" element={<UsersLayout />}>
          <Route index element={<UsersListPage />} />
          <Route path=":userId">
            <Route index element={<Navigate to="profile" />} />
            <Route path="profile" element={<UserPage />} />
            <Route path="edit" element={<UserEditPage />} />
            {/* <Route path="*" element={<Navigate to="../profile" />} /> */}
          </Route>
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

const AppWithStoreAndRoutes = withRouter(App);
export default AppWithStoreAndRoutes;
