import * as React from 'react';
import { useState } from 'react';
type HeadingProps = {
  children: string;
};

export const LoggedIn = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User is {isLoggedIn ? 'logged in' : ' logged out'}</div>
    </div>
  );
};
