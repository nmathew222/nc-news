import { getComments } from "../utils/api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Comments() {
  const [allComments, setAllComments] = useState([]);

  const {article_id}=useParams();
  useEffect(()=>{
      getComments(article_id).then((res)=>{
          setAllComments(res.comments)
      });
    }, [article_id])
  
  return (
    <>
<section>
  <ul>
    {allComments.map((comment)=>{
        return(
            <li key={comment.article_id}>
                <h3>
                Username: {comment.author}</h3>
                <h2>Comment:  {comment.body}</h2>
                <h3>Votes: {comment.votes}</h3>


                



            </li>

        )
    })}
      
</ul>  
    
</section>      
    </>
  );
}