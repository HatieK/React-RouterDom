import React from "react";
import ContactTitle from "./ContactTitle";
import ContactSidebar from "./ContactSidebar";
import ContactForm from "./ContactForm";

const ContactPage = () => {
  const handleFormSubmit = (form) => {
    console.log("🚀form---->", form);
  };
  return (
    <main className="mainwrapper contact --ptop">
      <div className="container">
        <ContactTitle />
      </div>
      <div className="contact__content">
        <div className="container">
          <div className="wrapper">
            <ContactSidebar />
            <ContactForm handleFormSubmit={handleFormSubmit} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
