import React from 'react';

import { NavLink, Outlet } from 'react-router-dom';

const MainPage = () => {
  return (
    <>
      <h1>MainPage</h1>

      <Outlet />
    </>
  );
};

export default MainPage;
