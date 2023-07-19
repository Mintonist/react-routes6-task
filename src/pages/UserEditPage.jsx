import React from 'react';

import { NavLink, Outlet, useParams } from 'react-router-dom';

const UserEditPage = () => {
  const { userId } = useParams();
  return (
    <>
      <h1>{'UserEditPage with id: ' + userId}</h1>
      <NavLink to="../profile">NavLink to user page</NavLink>
      <br />
      <NavLink to={'../../' + Math.round(Math.random() * 5)}>NavLink to another user page</NavLink>
      <br />
      <NavLink to="/users">NavLink to Users list page</NavLink>

      <Outlet />
    </>
  );
};

export default UserEditPage;
