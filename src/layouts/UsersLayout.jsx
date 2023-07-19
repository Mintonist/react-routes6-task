import React from 'react';

import { NavLink, Outlet } from 'react-router-dom';

const UsersLayout = () => {
  return (
    <>
      <h1>UsersLayout</h1>
      <NavLink to="/">NavLink to MainPage</NavLink>
      <Outlet />
    </>
  );
};

export default UsersLayout;
