import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  let navigate = useNavigate();
  return (
    <div className="content-center h-screen bg-dog bg-no-repeat bg-left">
      <div className="grid items-center p-4 bg-blue-100 w-6/12 mx-auto bg-opacity-90 rounded-lg my-20">
        <h2 className="font-medium leading-tight text-3xl mb-2 text-blue-700 text-center pt-20">
          Welcome to Doggo Central!
        </h2>
        <p className="text-center text-blue-800 mt-6 text-lg">
          A hub for dog lovers to share their favorite furry friend products!
        </p>
        <button
          className="text-white bg-gradient-to-r from-blue-300 via-blue-500 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm w-28  py-2.5 text-center mt-10 grid justify-center mx-auto "
          onClick={() => navigate("/items")}
        >
          View list of Proucts
        </button>
        <hr className="border-zinc-400 mt-10"></hr>
        <hr className="border-zinc-400 mt-1"></hr>
        <p className="text-center">or.....</p>
        <div className="grid items-center justify-center mt-20">
          <h3 className="text-center text-orange-800 text-2xl mb-6">
            Give a dog a home!
          </h3>
          <button className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
            <a
              href="https://www.aspca.org/nyc/aspca-adoption-center/adoptable-dogs?ms=MP_PMK_GGAdoption-Tristate&initialms=MP_PMK_GGAdoption-Tristate&gclid=CjwKCAiA_6yfBhBNEiwAkmXy52YLzA0OmzEheVrGgLq08hes3dZrZOj70VdmR8kkXBMtegjSPwZ7FxoCuvoQAvD_BwE"
              rel="noreferrer"
              target="_blank"
            >
              ASPCA: Adopt A dog!
            </a>
          </button>
          <button className="text-white bg-gradient-to-r from-cyan-400 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
            <a
              href="https://bobbiandthestrays.org/"
              rel="noreferrer"
              target="_blank"
            >
              Bobbie and the Strays
            </a>
          </button>
          <button className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
            <a
              href="https://www.rescuecity.nyc/"
              rel="noreferrer"
              target="_blank"
            >
              Adopt a dog in the Brooklyn Area
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
