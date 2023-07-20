import React from 'react';

import { NavLink, useParams } from 'react-router-dom';

const UserPage = () => {
  const { userId } = useParams();
  return (
    <>
      <h1>{'UserPage with id: ' + userId}</h1>
      <NavLink to={'/users/' + userId + '/edit'}>NavLink to user edit page</NavLink>
      <br />
      <NavLink to="/users">NavLink to users list</NavLink>
    </>
  );
};

export default UserPage;
