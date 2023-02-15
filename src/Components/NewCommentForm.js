import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

export default function NewCommentForm({ itemId, handleAdd }) {
  let { id } = useParams();

  const [comment, setComment] = useState({
    commenter: "",
    comment: "",
    item_id: id,
  });

  const handleTextChange = (e) => {
    setComment({ ...comment, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAdd(comment, id);
    setComment({ commenter: "", comment: "", item_id: id });
  };
  return (
    <div className="block border black p-5 mt-3 rounded-lg shadow-lg bg-sky-100 ">
      <h3 className="font-medium my-4 italic text-center ">Add a Comment!</h3>
      <form onSubmit={handleSubmit} className="form-group mb-6">
        <label htmlFor="commenter" className="font-medium text-sky-600">
          Name:{" "}
          <input
            id="commenter"
            value={comment.commenter}
            onChange={handleTextChange}
            placeholder="Add your name!"
            required
            className="block
            w-full
            px-3
            py-1.5
            text-base
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded-lg
            transition
            ease-in-out
            m-0
            mb-2
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          />
        </label>
        <label htmlFor="comment" className="font-medium text-sky-600">
          Comment:{" "}
          <input
            id="comment"
            value={comment.comment}
            onChange={handleTextChange}
            placeholder="Share your experience"
            required
            className="block
            w-full
            h-20
            px-3
            py-1.5
            text-base
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded-lg
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          />
        </label>
        <input
          className="text-white bg-blue-400 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm sm:w-auto px-2 py-2.5 text-center dark:bg-blue-400 dark:hover:bg-blue-600 dark:focus:ring-blue-800 w-24 mt-6"
          type="submit"
        />
      </form>
    </div>
  );
}
