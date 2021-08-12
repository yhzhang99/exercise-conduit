import request from "./agent";

export default function getArticles() {
  return request.get({
    url: "articles/feed?offset=0&limit=10",
  });
}
