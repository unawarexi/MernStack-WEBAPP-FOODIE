import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const NavLinks = [
    { name: "Home", Path: "/home" },
    { name: "About", Path: "/home" },
    { name: "Contact", Path: "/home" },
    { name: "FAQ", Path: "/home" },
  ];
  return (
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <ul className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
        {NavLinks.map((links, index) => (
          <li key={index} className="mr-5 hover:text-gray-900">
            <Link to={links.Path}> {links.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
