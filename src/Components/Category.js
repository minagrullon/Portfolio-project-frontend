import React from "react";

export default function Category({ setCategory }) {
  //   const [category, setCategory] = useState("");

  return (
    <div>
      <button
        className="bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setCategory("food")}
      >
        Food
      </button>
      <button
        className="bg-blue-300 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setCategory("clothes")}
      >
        Clothes
      </button>
      <button
        className="bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setCategory("other")}
      >
        Other
      </button>
      <button
        className="bg-blue-300 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setCategory("")}
      >
        All Items
      </button>
    </div>
  );
}
