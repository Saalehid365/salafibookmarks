import React from "react";

const Contactdetails = () => {
  return (
    <div>
      <div className="flex flex-col ">
        <div className="">
          <h3 className="text-3xl">Contact Us</h3>
          <p className="w-96 text-start">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos magnam
            eveniet harum! Porro, reprehenderit. Temporibus!
          </p>
        </div>
        <form className="flex flex-col  justify-evenly items-start w-full h-96 border p-4 mt-12">
          <label>Name</label>
          <input className="border w-96"></input>
          <label>Email</label>
          <input className="border w-96"></input>
          <label>Message</label>
          <input className="border w-96"></input>
        </form>
      </div>
    </div>
  );
};

export default Contactdetails;
