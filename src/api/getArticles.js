import request from "./agent";

export default function getArticles() {
  return request.get({
    url: "/articles?offset=0&limit=100",
  });
}
