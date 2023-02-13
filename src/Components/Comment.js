import React from "react";
import { useState } from "react";
import EditCommentForm from "./EditCommentForm";

export default function Comment({
  comment,
  handleSubmit,
  handleAdd,
  handleDelete,
  itemId,
}) {
  const [viewEditForm, toggleEditform] = useState(false);
  const toggleView = () => {
    toggleEditform(!viewEditForm);
  };
  return (
    <div className="comment">
      {viewEditForm ? (
        <EditCommentForm
          handleSubmit={handleSubmit}
          toggleView={toggleView}
          itemId={itemId}
          commentId={comment.id}
        />
      ) : (
        <div>
          <h5>{comment.commenter}</h5>
          <p>{comment.comment}</p>
          <div>
            <button onClick={() => handleDelete(comment.id)}>Delete me!</button>
            <button onClick={toggleView}>Edit me</button>
          </div>
        </div>
      )}
    </div>
  );
}
