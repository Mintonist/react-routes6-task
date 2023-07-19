import React from 'react';

import { NavLink, Outlet } from 'react-router-dom';

const UsersListPage = () => {
  const users = [1, 2, 3, 4, 5];
  return (
    <>
      <h1>UsersListPage</h1>
      <ul>
        {users.map((id) => {
          return (
            <li key={id}>
              <NavLink to={'/users/' + id}>{'User ' + id} </NavLink>
            </li>
          );
        })}
      </ul>
      <Outlet />
    </>
  );
};

export default UsersListPage;
