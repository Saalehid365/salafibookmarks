import React from "react";

const Contact = () => {
  return (
    <div className=" h-screen bg-gray-200 flex pt-40">
      <div className="px-12 flex flex-col items-start w-2/5 justify-between h-2/5 mr-6 font-mono">
        <h2 className="text-5xl ">Lets work together</h2>
        <p className="text-xl text-start">
          Thank you so much for checking in. We feel honoured that you would
          consider working with us.
        </p>
        <p className="text-xl text-start">
          Please fill out our contact form and we'll get back to you within 48
          in'shaAllaah
        </p>
      </div>
      <div className=" flex flex-col w-2/4 px-6">
        <div className="flex flex-col items-start justify-between">
          <label className="font-medium">
            Name <span className="text-greenSpring ml-2">(required)</span>
          </label>
          <div className="flex w-full justify-between mt-2">
            <div className="flex flex-col items-start w-full pr-2 ">
              <label>first name</label>
              <input type="name" className="h-12 w-full mt-1 rounded"></input>
            </div>
            <div className="flex flex-col items-start w-full">
              <label>Last name</label>
              <input type="name" className="h-12 w-full mt-1 rounded"></input>
            </div>
          </div>
        </div>

        <label className="text-start font-medium mt-4 ">
          Email<span className="text-greenSpring ml-2">(required)</span>
        </label>
        <input type="email" className="h-12 mt-1 rounded"></input>
        <label className="text-start font-medium mt-4">
          Phone <span className="text-greenSpring ml-2">(required)</span>
        </label>
        <input type="number" className="h-12 mt-1 rounded"></input>
        <label className="text-start font-medium mt-4">
          Service Needed{" "}
          <span className="text-greenSpring ml-2">(required)</span>
        </label>
        <select className="h-12 mt-1 pl-2 text-sm rounded">
          <option className="">Service Needed</option>
          <option>Sales</option>
          <option>Wholesale</option>
        </select>
        <label className="text-start font-medium mt-4">
          Message <span className="text-greenSpring ml-2">(required)</span>
        </label>
        <textarea
          type="message"
          className="h-32 mt-1 text-start p-2 rounded"
        ></textarea>
      </div>
    </div>
  );
};

export default Contact;
