import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Authentication from "./container/auth/Authentication";
import SecondaryLayout from "./layout/SecondaryLayout";
import { ContextProvider } from "./context/ContextProvider";

const App = () => {
  return (
    <ContextProvider>
      <div className="">
        <>
          <BrowserRouter>
            <MainLayout>
              <Routes>
                <Route path="/" element={<Authentication />} />
                <Route path="/home" element={<SecondaryLayout />} />
              </Routes>
            </MainLayout>
          </BrowserRouter>
        </>
      </div>
    </ContextProvider>
  );
};

export default App;
