import React from 'react';
import { NavLink } from 'react-router-dom';
import { MdHome, MdLocalCafe, MdFastfood, MdCoffee } from 'react-icons/md';
import { GrGallery } from "react-icons/gr";

// Define an interface for the props
interface NavbarProps {
  containerStyles: string;
}

const Navbar: React.FC<NavbarProps> = ({ containerStyles }) => {
  return (
    <nav className={containerStyles}>
      <NavLink to= {"/"}               className={({isActive}) => isActive ? "active_link" : ""}><div className='flexCenter gap-x-1'><MdHome />Home</div></NavLink>
      <NavLink to={"/Drinks"}          className={({isActive}) => isActive ? "active_link" : ""}><div className='flexCenter gap-x-1'><MdLocalCafe  />Drinks</div></NavLink>
      <NavLink to={"/Foods"}           className={({isActive}) => isActive ? "active_link" : ""}><div className='flexCenter gap-x-1'><MdFastfood />Foods</div></NavLink>
      <NavLink to={"/At Home Coffee"}  className={({isActive}) => isActive ? "active_link" : ""}><div className='flexCenter gap-x-1'><MdCoffee />At Home Coffee</div></NavLink>
      <NavLink to={"/gallery" }      className={({isActive}) => isActive ? "active_link" : ""}><div className='flexCenter gap-x-1'><GrGallery />Gallery</div></NavLink>
      <NavLink to={"/contact"}          className={({isActive}) => isActive ? "active_link" : ""}><div className='flexCenter gap-x-1'>Contact</div></NavLink>
    </nav>
  );
};

export default Navbar;



