import React from "react";
import HeroContact from "../contact/hero";
import Contactdetails from "../contact/contactdetails";
import Buisness from "../contact/buisness";

const Contact = () => {
  return (
    <div>
      <HeroContact />
      <div className="flex justify-evenly mt-24 mb-24   ">
        <Contactdetails />
        <Buisness />
      </div>
    </div>
  );
};

export default Contact;
