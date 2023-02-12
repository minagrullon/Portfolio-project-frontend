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
    <div className="comment_new">
      <h3>Add a Comment!</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="commenter">
          Name:{" "}
          <input
            id="commenter"
            value={comment.commenter}
            onChange={handleTextChange}
            placeholder="Add your name!"
            required
          />
        </label>
        <label htmlFor="comment">
          Comment:{" "}
          <input
            id="comment"
            value={comment.comment}
            onChange={handleTextChange}
            placeholder="Share your experience"
            required
          />
        </label>
        <input type="submit" />
      </form>
    </div>
  );
}
