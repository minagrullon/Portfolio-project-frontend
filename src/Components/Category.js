import React from "react";

export default function Category({ setCategory }) {
  //   const [category, setCategory] = useState("");

  return (
    <div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setCategory("food")}
      >
        Food
      </button>
      <button onClick={() => setCategory("clothes")}>Clothes</button>
      <button onClick={() => setCategory("other")}>Other</button>
      <button onClick={() => setCategory("")}>All Items</button>
    </div>
  );
}
