import React from "react";
import Footer from "../Components/Footer/Footer";
import Header from "./../Components/Header/Header";
import Main from "./../Components/Main/Main";

const Layout: React.FC<{}> = () => {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default Layout;
