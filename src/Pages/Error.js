import React from "react";
import { useNavigate } from "react-router-dom";

export default function Error() {
  let navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center items-center bg-error bg-no-repeat bg-contain bg-center h-screen">
      <div className="bg-red-200 text-center p-7 rounded-xl opacity-90">
        <h1 className="leading-tight text-5xl font-medium mt-0 mb-2 text-red-700 ">
          Error
        </h1>
        <p className="text-red-700 text-lg font-medium p-2 m-2">
          You ended up somewhere you shouln't roam
        </p>
        <button
          className="text-white bg-gradient-to-r from-red-400 via-red-600 to-red-700 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-40 shadow-lg shadow-red-500/50  font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2"
          onClick={() => navigate("/items")}
        >
          Go back!
        </button>
      </div>
    </div>
  );
}
