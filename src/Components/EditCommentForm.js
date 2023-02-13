import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

export default function EditCommentForm({
  handleSubmit,
  toggleView,
  itemId,
  commentId,
}) {
  const navigate = useNavigate();
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
      <h3>Edit Form</h3>
      <form onSubmit={handleFormSubmit}>
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
      <button onClick={() => toggleView()}>Forget it!</button>
    </div>
  );
}
