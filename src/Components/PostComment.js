import { useState, useEffect } from "react";
import { postComment } from "../utils/api";

export default function PostComment({ article_id }) {
  const [body, setBody] = useState("");
  const [username, setUsername] = useState("");
  const [goodRequest, setGoodRequest] = useState(false);
  const [badRequest, setBadRequest] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    postComment(article_id, username, body)
      .then((createdComment) => {
        setGoodRequest(true);
        setBody("");
        setUsername("");
      })
      .catch((err) => {
        setGoodRequest(false);
        setBadRequest(true);
        setBody("");
        setUsername("");
      });
  };

  return (
    <div className="postCommentForm">
      <form className="postComment" method="get" onSubmit={handleSubmit}>
        <div>
          {goodRequest === true ? (
            <p>Your comment is posted</p>
          ) : badRequest === true ? (
            <p>Invalid username or missing comment </p>
          ) : null}{" "}
        </div>

        <label>
          <p>Post comment:</p>
          <textarea
            rows="4"
            cols="50"
            className="postCommentTxtBx"
            type="text"
            placeholder="comment..."
            value={body}
            onChange={(event) => {
              setBody(event.target.value);
            }}
          ></textarea>
          <br></br>
          <br></br>
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
