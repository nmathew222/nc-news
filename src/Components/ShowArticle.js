import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Votes from "./votes";
function ShowArticle({ catSelected }) {
  const [article, setArticles] = useState([]);
  const [IsLoading, setIsLoading] = useState(true);
  const { article_id } = useParams();
  const [error, setError] = useState(true);

  useEffect(() => {
    fetch(`https://nc-news-nikhil.herokuapp.com/api/articles/${article_id}`)
      .then((res) => {
        return res.json();
      })
      .then(({ article }) => {
        console.log(article);
        setArticles(article);
        setIsLoading(false);
        setError(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [article_id]);
  if (error) {
    return <h1>Article Not Found</h1>;
  }

  if (IsLoading) {
    return <p>loading... </p>;
  }

  return (
    <>
      <h4>Details of Item "{article_id}": </h4>

      <div className="ShowAllItems">
        <div key={article.article_id} className="ShowAllItems__item">
          <h4>{article.article_title}</h4>
          <p>Author: {article.author}</p>
          <p>topic: {article.topic}</p>
          
          <Votes article_id={article.article_id} votes={article.votes} />

          <p>Comment Count: {article.comment_count}</p>
        </div>
      </div>
    </>
  );
}

export default ShowArticle;
