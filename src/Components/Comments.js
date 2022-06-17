import { deleteComment, getComments } from "../utils/api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Comments() {
  const [allComments, setAllComments] = useState([]);
  const [goodRequest, setGoodRequest] = useState(false);
  const [badRequest, setBadRequest] = useState(false);



  const { article_id } = useParams();
  useEffect(() => {
    getComments(article_id).then((res) => {
      setAllComments(res.comments);
    });
  }, [article_id]);

  const removeComment = (comment_id)=>{
      deleteComment(comment_id).then(setAllComments(allComments))
      setGoodRequest(true)
      .catch((err) => {
          
        setGoodRequest(false);
        setBadRequest(true);
        
      });
  }

  return (
    <>
      <section>
          <div>
          {goodRequest === true ? (
            <p>Your comment has now been deleted</p>
          ) : badRequest === true ? (
            <p>Invalid comment </p>
          ) : null}{" "}
          </div>
        <ul>
          {allComments.map((comment) => {
            return (
              <li key={comment.comment_id}>
                <h3>Username: {comment.author}</h3>
                <h2>Comment: {comment.body}</h2>
                <h3>Votes: {comment.votes}</h3>
                <button onClick={()=>{
                    removeComment(comment.comment_id)

                }}>
                    Delete Comment
                </button>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}
