import React from "react";
import { LeftBg } from "../assets/Image.js";
import { SideBarItems } from "../components/LeftSection/ExportLeft.js";

function LeftContainer() {
  return (
    <section className="container w-[20%] relative">
      {/* <div className="relative">
        <img src={LeftBg} alt="" className="h-screen w-full" />
      </div> */}
      <div
        className="top-0 absolute w-full  bg-opacity-70 backdrop-blur-lg py-4 text-center
    justify-start"
      >
        {/* {======== contains side bar ==============} */}
        <SideBarItems />
      </div>
    </section>
  );
}

export default LeftContainer;
