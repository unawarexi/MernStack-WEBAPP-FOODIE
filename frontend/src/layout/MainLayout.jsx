import React from "react";
import { Header, Footer } from "../components/ExportComponents";

function MainLayout({ children }) {
  return (
    <React.Fragment>
      <Header />
      {children}
      <Footer />
    </React.Fragment>
  );
}

export default MainLayout;
