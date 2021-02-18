import React from "react";
// import { MenuIcon } from "@material-ui/icons/Menu";
import { FaSearch } from "react-icons/fa";
import { Nav, Logo, MenuList } from "./Style";

export default function NavBar() {
  return (
    <Nav>
      <Logo> Menu </Logo>
      <h4> Mphumeleli Ntetha </h4>
      <NavList />
      <FaSearch />
    </Nav>
  );
}


export const NavList = () => {
  return (
    <MenuList>
      <ul>
        <li>Home </li>
        <li> Blog </li>
        <li> Skills </li>
        <li> About </li>
        <li> Contact </li>
      </ul>
    </MenuList>
  );
}