import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { ToastContainer } from "react-toastify";


function Layout({ children }) {
  return (
    <div>
      <div className="fixed top-0 w-[100%]" style={{
        zIndex: '100'
      }}>
        <Header />
      </div>
      {children}
      <ToastContainer />
      <Footer />
    </div>
  );
}

export default Layout;
