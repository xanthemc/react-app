import * as React from 'react';
import { useState } from 'react';
type AuthUser = {
  name: string;
  email: string;
};

export const User = (props) => {
  const [user, setUser] = useState<AuthUser>({} as AuthUser);
  const handleLogin = () => {
    setUser({
      name: 'vishwas',
      email: 'vishwas@example.com',
    });
  };
  // const handleLogout = () => {
  //   setUser(null);
  // };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <div>User name is{user?.name}</div>
      <div>User email is{user?.email}</div>
      {/* <button onClick={handleLogout}>Logout</button> */}
      {/* <div>User is {isLoggedIn ? 'logged in' : ' logged out'}</div> */}
    </div>
  );
};
