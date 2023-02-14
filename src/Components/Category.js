import React from "react";

export default function Category({ setCategory }) {
  //   const [category, setCategory] = useState("");

  return (
    <div className="flex w-screen justify-evenly space-x-8 mb-6 ">
      <button
        className="bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-10 mt-4 rounded-full"
        onClick={() => setCategory("food")}
      >
        Food
      </button>
      <button
        className="bg-blue-300 hover:bg-blue-700 text-white font-bold py-2 px-10 mt-4 rounded-full"
        onClick={() => setCategory("clothes")}
      >
        Clothes
      </button>
      <button
        className="bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-10 mt-4 rounded-full"
        onClick={() => setCategory("other")}
      >
        Other
      </button>
      <button
        className="bg-blue-300 hover:bg-blue-700 text-white font-bold py-2 px-10 mt-4 rounded-full"
        onClick={() => setCategory("")}
      >
        All Items
      </button>
    </div>
  );
}
