import  axios  from "axios";

const articlesApi = axios.create({
  baseURL: "https://nc-news-nikhil.herokuapp.com/api"
});




export const patchVotes = (article_id, inc_votes) => {
  return articlesApi.patch(`/articles/${article_id}`, {inc_votes}).then(( res ) => {
      return res.data
  })
}


export const getComments = (article_id, username, body) => {
  return articlesApi.get(`articles/${article_id}/comments`, username,body).then(( res ) => {
      return res.data
  })
}

