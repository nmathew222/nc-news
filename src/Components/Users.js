import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Users() {
  const [allUsers, setAllUsers] = useState([]);
  const [IsLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://nc-news-nikhil.herokuapp.com/api/articles/users`)
      .then((res) => {
        return res.json();
      })
      .then(({ users }) => {
        console.log(users);
        setAllUsers(users);
        setIsLoading(false);
      });
  }, []);

  if (IsLoading) {
    return <p>Loading......</p>;
  }
  return (
    <>
      <h4>Show All Users: </h4>

      <div className="ShowAllArticles">
        {allUsers.map((users) => {
          return (
            <div key={users.username} className="ShowAllArticles__Article">
              <h4>
                Username: {users.username}
                <br></br>
                Author: {users.author}
              </h4>
              <Link to={`/users/${users.username}`}>
                <img
                  className="thumbnail" alt="ami"
                  src={users.avatar_url}
                ></img>
            

              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Users;


