import React from "react";

import Footer from "../../component/footer";
import Header1 from "../../component/Header";





const MainLayout = ({ children }) => {
  return (
    <>
      <Header1/>
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
