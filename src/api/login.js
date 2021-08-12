import request from "./agent";

export default function login(user) {
  return request.post({
    url: "/users/login",
    payload: {
      user: {
        email: user.email,
        password: user.password,
      },
    },
  });
}
