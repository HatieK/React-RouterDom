import React from "react";
import Modal from "../../Components/Modal/Modal";
import PageLoading from "../../Components/PageLoading/PageLoading";
import Header from "../../Components/Header/Header";
import Navbar from "../../Components/Navbar/Navbar";
import Overlay from "../../Components/Overlay/Overlay";
import Footer from "../../Components/Footer/Footer";

const MainLayout = ({ children }) => {
  return (
    <div>
      <PageLoading />
      <Header />
      <Navbar />
      <Overlay />
      {children}
      <Footer />

      <Modal />
    </div>
  );
};

export default MainLayout;
