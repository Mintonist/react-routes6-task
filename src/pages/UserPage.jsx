import React from 'react';

import { NavLink, Outlet, useParams } from 'react-router-dom';

const UserPage = () => {
  const { userId } = useParams();
  return (
    <>
      <h1>{'UserPage with id: ' + userId}</h1>
      <NavLink to="../edit">NavLink to user edit page</NavLink>
      <br />
      <NavLink to="/users">NavLink to users list</NavLink>

      <Outlet />
    </>
  );
};

export default UserPage;
