import React from "react";
import { useState, useEffect } from "react";

import axios from "axios";

const API = process.env.REACT_APP_API_URL;

export default function EditCommentForm({
  handleSubmit,
  toggleView,
  itemId,
  commentId,
}) {
  //   const { id } = useParams();

  const [comment, setComment] = useState({
    commenter: "",
    comment: "",
    item_id: itemId,
  });

  const handleTextChange = (e) => {
    setComment({ ...comment, [e.target.id]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSubmit(comment, itemId);
    toggleView();
  };

  useEffect(() => {
    axios
      .get(`${API}/items/${itemId}/comments/${commentId}`)
      .then((res) => {
        setComment(res.data);
      })
      .catch((err) => {
        console.log.apply(err);
      });
  }, [commentId]);

  return (
    <div className="edit_comment">
      <h3 className="font-medium my-4 italic text-center">Edit Form</h3>
      <form onSubmit={handleFormSubmit} className="mb-6">
        <label htmlFor="commenter" className="font-medium text-stone-500">
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
            mb-3
            focus:text-gray-700 focus:bg-white focus:border-orange-600 focus:outline-none"
          />
        </label>
        <label htmlFor="comment" className="font-medium text-stone-500">
          Comment:{" "}
          <textarea
            id="comment"
            value={comment.comment}
            onChange={handleTextChange}
            placeholder="Share your experience"
            required
            className="block
            w-full
            px-3
            py-1.5
            h-20
            text-base
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded-lg
            transition
            ease-in-out
            m-0
            mb-2
            focus:text-gray-700 focus:bg-white focus:border-orange-600 focus:outline-none"
          />
        </label>
        <input
          type="submit"
          className="text-white bg-orange-300 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-full text-sm sm:w-auto px-2 py-2.5 text-center w-24 mt-6"
        />
      </form>
      <button
        className="text-stone-500 bg-orange-200 hover:bg-orange-600 hover:text-white focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-full text-sm sm:w-auto px-2 py-2.5 text-center w-24 mt-1"
        onClick={() => toggleView()}
      >
        Forget it!
      </button>
    </div>
  );
}
