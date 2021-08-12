import request from "./agent";

export default function register(user) {
  return request.post({
    url: "/users",
    payload: {
      user: {
        username: user.username,
        email: user.email,
        password: user.password,
      },
    },
  });
}
