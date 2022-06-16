import { useState, useEffect } from "react";
import { postComment } from "../utils/api";

export default function PostComment({article_id}) {
  const [body, setBody] = useState("");
  const [username, setUsername] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    postComment(article_id, username, body)
.then((createdComment) => {
        setBody("");
        setUsername("");
      })
      .catch((err) => {
        setBody("");
        setUsername("");
      });
  };

  return (
    <div className="postCommentForm">
      <form className="postComment" method="get" onSubmit={handleSubmit}>
        <label>
          <p>Post comment:</p>
          <input
            className="postCommentTxtBx"
            type="text"
            placeholder="comment..."
            value={body}
            onChange={(event) => {
              setBody(event.target.value);
            }}
          ></input>
          <br></br>
          <input
            className="postCommentUsernameBx"
            type="text"
            placeholder="username"
            value={username}
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          ></input>
          <button type="submit">Submit</button>
        </label>
      </form>
    </div>
  );
}
