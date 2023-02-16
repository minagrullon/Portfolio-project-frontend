import React from "react";
import { useState } from "react";
import NewItem from "../Components/NewItem";

export default function New() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="bg-gradient-to-tl from-sky-200 to-rose-200 h-auto">
      <NewItem showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
}
