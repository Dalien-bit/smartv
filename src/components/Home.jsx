import Typewriter from "typewriter-effect";

import React, { useState } from "react";

const space = " ";

export default function Home() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Email:", email);
    console.log("Message:", message);
    // Close the modal after form submission
    onRequestClose();
  };
  return (
    <>
      <div>
        <div className="hidden w-full absolute z-10 flex flex-row items-center justify-center">
          <div className="bg-white w-[400px] h-[400px]">
            <form onSubmit={handleSubmit}>
              <label>
                Email:
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </label>
              <br />
              <label>
                Message:
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </label>
              <br />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
        <div className="h-screen flex flex-col justify-center">
          <div className="mx-10 md:m-20 relative bottom-20 text-3xl font-bold">
            <p className="flex lg:w-1/2 lg:text-5xl">
              India's first Smart Sanitary napkins vending machine making
              hygiene
            </p>
            <div className="text-3xl text-pink-800">
              <p>{space} </p>
              <Typewriter
                options={{
                  strings: ["Available", "Accessible", "Affordable"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
            <p className="text-3xl">during menstruation</p>
            <button  className="bg-black border border-white rounded-xl text-white text-xl hover:bg-pink-800 py-2 px-4 mt-10 rounded">
              Request Call Back
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
