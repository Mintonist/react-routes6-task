import React from 'react';

import { NavLink, useParams } from 'react-router-dom';

const UserEditPage = () => {
  const { userId } = useParams();
  return (
    <>
      <h1>{'UserEditPage with id: ' + userId}</h1>
      <NavLink to={'/users/' + userId + '/profile'}>NavLink to user page</NavLink>
      <br />
      <NavLink to={'/users/' + Math.round(Math.random() * 5)}>NavLink to another user page</NavLink>
      <br />
      <NavLink to="/users">NavLink to Users list page</NavLink>
    </>
  );
};

export default UserEditPage;
