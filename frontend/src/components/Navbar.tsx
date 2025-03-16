import React from 'react';
import { NavLink } from 'react-router-dom';
import { MdCategory, MdContacts, MdHomeFilled, MdShop2 } from 'react-icons/md';

// Define an interface for the props
interface NavbarProps {
  containerStyles: string;
}

const Navbar: React.FC<NavbarProps> = ({ containerStyles }) => {
  return (
    <nav className={containerStyles}>
      <NavLink to= {"/"}                   className={({isActive}) => isActive ? "active_link" : ""}><div className='flexCenter gap-x-1'><MdHomeFilled />Home</div></NavLink>
      <NavLink to={"/Drinks"}              className={({isActive}) => isActive ? "active_link" : ""}><div className='flexCenter gap-x-1'><MdCategory />Drinks</div></NavLink>
      <NavLink to={"/Foods"}               className={({isActive}) => isActive ? "active_link" : ""}><div className='flexCenter gap-x-1'><MdShop2 />Foods</div></NavLink>
      <NavLink to={"/At Home Coffee"}      className={({isActive}) => isActive ? "active_link" : ""}><div className='flexCenter gap-x-1'><MdContacts />At Home Coffee</div></NavLink>
    </nav>
  );
};

export default Navbar;

