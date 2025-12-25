import React from 'react';
import { Link, Outlet } from 'react-router';

const Main = () => {
  return (
    <div>
      <header>
        <Link to='/phones'>Phones</Link>
      </header>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;