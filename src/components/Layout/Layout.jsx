import React from 'react';
import Menu from '../Menu';
import TopBar from '../TopBar';

const Layout = ({ children }) => {
  return (
    <>
      <div className="px-5 lg:px-10">
        <TopBar />
        <div className="flex-layout flex gap-10 md:pr-10">
          <div
            id="menu-container"
            className="menu-container absolute top-5 md:static"
          >
            <Menu />
          </div>
          <main>{children}</main>
        </div>
      </div>
    </>
  );
};

export default Layout;
