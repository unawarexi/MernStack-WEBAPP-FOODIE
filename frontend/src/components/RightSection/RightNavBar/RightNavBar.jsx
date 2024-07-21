import React from "react";
import { Link } from "react-router-dom";

const RightNavBar = () => {
  const RightNavLinks = [
    { name: "Meal Recipes", Path: "/home" },
    { name: "Order Flex", Path: "/home" },
    { name: "Dispatch Track", Path: "/home" },
    { name: "History", Path: "/home" },
  ];
  return (
    <nav className="md:ml-auto md:mr-auto flex  w-full items-center text-base justify-center">
      <ul className="md:ml-auto md:mr-auto md:flex grid grid-cols-2  w-full items-center text-base justify-center gap-y-2 mt-6 my-6 lg:mt-0 lg:my-0 ">
        {RightNavLinks.map((links, index) => (
          <li
            key={index}
            className="mr-5 hover:text-gray-900 text-sm md:text-base bg-slate-200 text-center p-4 rounded-lg "
          >
            <Link to={links.Path}> {links.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default RightNavBar;
