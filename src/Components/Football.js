import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import baseUrl from "../utils/api";

function Football({ selectedArticles }) {
  const [allFootball, setAllCooking] = useState([]);
  const [IsLoading, setIsLoading] = useState(true);

  useEffect(() => {

    fetch(`${baseUrl}/articles`).then((res) => {
        return res.json();
      })
      .then(({ articles }) => {
        console.log(articles);
        setAllCooking(articles);
        setIsLoading(false);
      });
  }, []);

  if (IsLoading) {
    return <p>Loading......</p>;
  }
  return (
    <>
      <h4>Show All articles: </h4>

      <div className="ShowAllArticles">
        {allFootball.map((article) => {
            if (article.topic === "football")
          return (
            <div key={article.article_id} className="ShowAllArticles__Article">
              <h4>
                Title: {article.title} 
              </h4>
              <h4>
               Author: {article.author}
              </h4>
              <Link to={`/articles/${article.article_id}`}>
          <img className="thumbnail" src="https://www.freeiconspng.com/thumbs/news-icon/news-icon-24.png"></img>
          </Link>
              
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Football;