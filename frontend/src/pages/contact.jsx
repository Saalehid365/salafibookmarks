import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9b1pp9e",
        "template_p0y0fei",
        form.current,
        "EZ2Sf1n1gVEVVqjXy"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

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
      <form ref={form} className=" flex flex-col w-2/4 px-6">
        <div className="flex flex-col items-start justify-between">
          <label className="font-medium">
            Name <span className="text-greenSpring ml-2">(required)</span>
          </label>
          <div className="flex w-full justify-between mt-2">
            <div className="flex flex-col items-start w-full pr-2 ">
              <label>first name</label>
              <input
                type="name"
                name="firstName"
                className="h-12 w-full mt-1 rounded pl-4"
              ></input>
            </div>
            <div className="flex flex-col items-start w-full">
              <label>Last name</label>
              <input
                name="lastName"
                type="text"
                className="h-12 w-full mt-1 rounded pl-4"
              ></input>
            </div>
          </div>
        </div>

        <label className="text-start font-medium mt-4 ">
          Email<span className="text-greenSpring ml-2">(required)</span>
        </label>
        <input
          name="email"
          type="email"
          className="h-12 mt-1 rounded pl-4"
        ></input>
        <label className="text-start font-medium mt-4">
          Phone <span className="text-greenSpring ml-2">(required)</span>
        </label>
        <input
          name="phone"
          type="number"
          className="h-12 mt-1 rounded pl-4"
        ></input>

        <label className="text-start font-medium mt-4">
          Message <span className="text-greenSpring ml-2">(required)</span>
        </label>
        <textarea
          name="message"
          type="message"
          className="h-32 mt-1 text-start p-2 rounded pl-4e"
        ></textarea>
        <div className="flex justify-center mt-12">
          <button
            onClick={sendEmail}
            className="border border-black w-44 h-10 bg-axolotl text-white text-xl border-none rounded-md"
          >
            send
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
