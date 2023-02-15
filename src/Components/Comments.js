import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Comment from "./Comment";
import NewCommentForm from "./NewCommentForm";

const API = process.env.REACT_APP_API_URL;

export default function Comments({ itemId }) {
  const { id } = useParams();
  const [comments, setComments] = useState([]);

  const handleAdd = (newComment) => {
    axios
      .post(`${API}/items/${id}/comments`, newComment)
      .then(
        (res) => {
          setComments([...comments, res.data]);
        },
        (error) => console.error(error)
      )
      .catch((error) => console.error(error));
  };

  const handleDelete = (id) => {
    axios
      .delete(`${API}/items/${id}/comments/${id}`)
      .then(
        (res) => {
          const copyCommentsArray = [...comments];
          const indexDeletedComment = copyCommentsArray.findIndex((comment) => {
            return comment.id === id;
          });
          copyCommentsArray.splice(indexDeletedComment, 1);
          setComments(copyCommentsArray);
        },
        (error) => console.log(error)
      )
      .catch((c) => console.log("catch", c));
  };

  const handleEdit = (updatedComment) => {
    axios
      .put(`${API}/items/${id}/comments/${updatedComment.id}`, updatedComment)
      .then((res) => {
        const copyCommentsArray = [...comments];
        const indexUpdatedItem = copyCommentsArray.findIndex((comment) => {
          return comment.id === updatedComment.id;
        });
        copyCommentsArray[indexUpdatedItem] = res.data;
        setComments(copyCommentsArray);
      })
      .catch((c) => console.warn("catch", c));
  };

  useEffect(() => {
    axios
      .get(`${API}/items/${id}/comments`)
      .then((res) => {
        setComments(res.data);
      })
      .catch((error) => console.warn("catch", error));
  }, [id]);

  return (
    <div className="p-4 mx-64">
      <NewCommentForm itemId={itemId} handleAdd={handleAdd} />
      <h4 className="font-medium leading-tight text-base mt-4 mb-2 text-blue-500">
        Comments
      </h4>

      {comments.map((comment) => {
        return (
          <Comment
            key={comment.id}
            comment={comment}
            handleSubmit={handleEdit}
            handleDelete={handleDelete}
            handleAdd={handleAdd}
            itemId={itemId}
          />
        );
      })}
    </div>
  );
}
