import axios from "axios";

import commonStore from "@/stores/commonStore";
import authStore from "@/stores/authStore";

const API_ROOT = "https://conduit.productionready.io/api";
const MOCK_ROOT = "/mock";

const requestConfigAdapter = (config) => {
  let API_BASE = API_ROOT;
  if (config.isMock) {
    API_BASE = MOCK_ROOT;
  }

  return { url: `${API_BASE}${config.url}` };
};

const handleErrors = (err) => {
  if (err && err.response && err.response.status === 401) {
    authStore.logout();
  }
  return Promise.reject(err.response);
};

const responseData = (res) => res.data;

const tokenPlugin = (config) => {
  if (commonStore.token) {
    config.headers["authorization"] = `Token ${commonStore.token}`;
  }

  return config;
};

const request = {};

axios.interceptors.request.use(tokenPlugin);
axios.interceptors.response.use(null, handleErrors);

["delete", "get", "head", "options"].forEach((method) => {
  request[method] = ({ url, isMock = false }) => {
    const { url: apiUrl } = requestConfigAdapter({ url, isMock });
    return axios[method](apiUrl).then(responseData);
  };
});

["post", "put", "patch"].forEach((method) => {
  request[method] = ({ url, payload, isMock = false }) => {
    const { url: apiUrl } = requestConfigAdapter({ url, isMock });
    return axios[method](apiUrl, payload).then(responseData);
  };
});

export default request;
