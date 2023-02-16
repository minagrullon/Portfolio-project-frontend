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
    <div className="border-2 border-grey-700 p-4 rounded-lg">
      {viewEditForm ? (
        <EditCommentForm
          handleSubmit={handleSubmit}
          toggleView={toggleView}
          itemId={itemId}
          commentId={comment.id}
        />
      ) : (
        <div>
          <h5 className="font-medium underline decoration-indigo-500">
            {comment.commenter}
          </h5>
          <p className="p-3 mb-3 font-light text-gray-800">{comment.comment}</p>
          <div className="grid justify-items-end">
            <button
              className="inline-block px-2 py-1 border-2 border-yellow-500 text-yellow-600 font-medium text-xs leading-tight uppercase rounded-lg hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out my-2"
              onClick={toggleView}
            >
              Edit me
            </button>
            <button
              className="inline-block px-2 py-1 border-2 border-red-700 text-red-700 font-medium text-xs leading-tight uppercase rounded-lg hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
              onClick={() => handleDelete(comment.id)}
            >
              Delete me!
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
