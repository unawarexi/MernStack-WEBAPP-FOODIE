import React, { useContext, useState } from "react";
import { Logo } from "../assets/Image";
import { NavBar } from "./ExportComponents";
import { GiHotMeal } from "react-icons/gi";
import { GiRingingBell } from "react-icons/gi";
import { CuisinesDropDown } from "../container/ExportContainer";
import { CategoriesContext } from "../context/ContextProvider";
import { useNavigate } from "react-router-dom";

function Header() {
  const { PopOverCuisines, isDropDown } = useContext(CategoriesContext);
  const [IsAuthenticated, setIsAuthenticated] = useState(true);
  const navigate = useNavigate();

  const handleLogOut = () => {
    setIsAuthenticated(false);
    navigate("/");
  };

  return (
    <section>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          {/* --------------- THIS IS THE LOGO ---------------- */}
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img src={Logo} alt="" className=" w-14" />

            <span className="ml-3 text-xl  text-amber-500 font lg:text-3xl md:font-bold">
              FOODIE!
            </span>
          </a>

          {/* --------------- THIS IS THE NAVBAR ---------------- */}
          <div className="mx-auto">
            <NavBar />
          </div>

          {/* ---------------- THIS THE DROP DOWN --------------- */}
          <div
            className={`mx-auto my-4 lg:mt-0 z-[999999] text-center items-center justify-center ${
              isDropDown ? "bg-indigo-500 rounded-full " : " bg-transparent"
            }`}
          >
            <GiRingingBell
              onClick={PopOverCuisines}
              className={`  ${
                isDropDown
                  ? "text-white p-3 lg:text-[4rem] md:text-[2.5rem] text-[3rem]"
                  : "icon__bell text-amber-500 lg:text-[3rem] text-[2rem]   "
              }`}
            />
          </div>

          <button
            onClick={handleLogOut}
            className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
          >
            {IsAuthenticated ? <>Logout</> : <>Login</>}
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>
    </section>
  );
}

export default Header;
