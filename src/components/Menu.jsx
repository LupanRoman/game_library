import React from 'react';
import { CgClose } from 'react-icons/cg';

const Menu = ({ closeMenu }) => {
  return (
    <>
      <div className="menu-component">
        <div>
          <CgClose onClick={closeMenu} />
          <h4>Menu</h4>
        </div>
        <div className="links">
          <div>
            <button>Home</button>
            <button>Most loved</button>
          </div>
          <div>
            <ul>
              <li>Action</li>
              <li>Adventure</li>
              <li>Arcade</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
