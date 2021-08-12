import request from "./agent";

export default function getArticles() {
  return request.get({
    url: "/articles?offset=0&limit=100",
  });
}
// ["delete", "get", "head", "options"].forEach((method) => {
//   request[method] = ({ url, isMock = false }) => {
//     const { url: apiUrl } = requestConfigAdapter({ url, isMock });
//     return axios[method](apiUrl).then(responseData);
//   };
// });

// request[get] = function({ url, isMock = false })
// {return {
//   const { url: apiUrl } = requestConfigAdapter({ url, isMock });
//   return axios[get](apiUrl).then(responseData);
// };}

// var getArticles = request.get({
//   url: ,
// })

// var getArticles = function(url) {
//   return axios[get](apiUrl).then(responseData);
// }
