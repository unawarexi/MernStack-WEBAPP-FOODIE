import React from "react";
import { LeftBg } from "../assets/Image.js";
import { SideBarItems } from "../components/LeftSection/ExportLeft.js";

const CuisinesDropDown = () => {
  return (
    <section className=" container lg:w-[20%] md:w-[50%] md:mx-auto w-full bg-black  relative border-2 border-indigo-500 lg:mx-[10%]">
      {/* <div className="relative">
        <img src={LeftBg} alt="" className="h-screen w-full" />
      </div> */}
      <div
        className="top-0 z-[9999] absolute w-full border-2 border-indigo-500 bg-black/10 shadow-2xl px-4 rounded-lg bg-opacity-70 backdrop-blur-lg py-4 text-center
    justify-center "
      >
        {/* {======== contains side bar ==============} */}
        <SideBarItems />
      </div>
    </section>
  );
};

export default CuisinesDropDown;
