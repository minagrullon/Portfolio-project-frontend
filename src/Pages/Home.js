import React from "react";

export default function Home() {
  return (
    <div>
      <h2>Welcome to Doggo Central!</h2>
      <p>A hub for dog lovers to share their favorite furry friend products!</p>
      <div>
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
  );
}
