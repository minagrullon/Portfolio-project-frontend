import React from "react";
import ItemDetails from "../Components/ItemDetails";

export default function Show() {
  return (
    <div className="bg-stone-100 h-auto grid justify-center phone:w-auto">
      <h3 className="font-medium leading-tight text-3xl mt-0 mb-2 text-blue-300 p-3 phone:text-lg">
        Item Details
      </h3>
      <ItemDetails />
    </div>
  );
}
