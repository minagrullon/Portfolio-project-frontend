import React from "react";
import { useState } from "react";

export default function Modal({ setShowModal }) {
  //   const [showModal, setShowModal] = useState(false);

  //   if (!showModal) return null;
  return (
    <div className="fade fixed top-80 left-30 w-6/12 h-fullscreen outline-none overflow-x-hidden overflow-y-auto border-2 border-red rounded-lg">
      <div className=" border-none shadow-xl relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-lg outline-none text-current">
        <h1 className="text-2xl p-12 font-semibold">
          You messed up there buddy. Try again!
        </h1>
      </div>
      <button
        className=""
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
