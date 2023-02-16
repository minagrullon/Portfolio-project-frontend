import React from "react";
import { useState } from "react";

export default function Modal({ setShowModal }) {
  //   const [showModal, setShowModal] = useState(false);

  //   if (!showModal) return null;
  return (
    <div className="fade fixed top-80 left-64 w-6/12 h-fullscreen outline-none overflow-x-hidden overflow-y-auto border-2 border-red rounded-lg p-8">
      <div className=" border-none shadow-xl relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-lg outline-none text-current">
        <h1 className="text-2xl p-12 font-semibold text-center">
          You messed up there buddy. Try again!
        </h1>
      </div>
      <button
        className="w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
        onClick={() => {
          console.log("i was clicked");
          setShowModal(false);
        }}
      >
        Understood!
      </button>
    </div>
  );
}
