import React from 'react';
import Appbar from '../Appbar/AppBar';

const Layout: React.FC<React.PropsWithChildren> = ({children}) => {
  return (
    <>
      <header>
        <Appbar/>
      </header>
      <main className="container-fluid">
        {children}
      </main>
    </>
  );
};

export default Layout;