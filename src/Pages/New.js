import React from "react";
import { useState } from "react";
import NewItem from "../Components/NewItem";

export default function New() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="bg-gradient-to-tl from-rose-100 to-blue-200 min-h-screen flex justify-center items-center w-full ">
      <NewItem showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
}
