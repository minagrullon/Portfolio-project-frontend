import React from "react";

export default function Modal({ setShowModal }) {
  return (
    <div className="fade fixed top-80 left-72 w-6/12 h-fullscreen  overflow-x-hidden overflow-y-auto border-2 rounded-lg p-8 bg-stone-200 ">
      <div className=" border-none shadow-xl relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-lg outline-none text-current">
        <h1 className="text-2xl p-12 font-semibold text-center text-red-700">
          You messed up there buddy. Please fill out all fields. Try again!
        </h1>
      </div>
      <button
        className="bg-rose-100 p-2 rounded-full my-3 border border-red-400 hover:border-2 "
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
