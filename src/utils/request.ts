import axios from "axios";

const request = axios.create({
  baseURL: "/poms",
  timeout: 5000,
  headers: {
    haoweitoken:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImNkNmFiZmFjLTVkMjQtNGRiOS1iMDViLWM4OGMyZWJkMDUzNyJ9.eyJhdWQiOiJVMjAyMjAzMjMxMTAwNTc3OTk3OTc2NzY4NTciLCJzdWIiOiJzeXMxMCIsImlzcyI6ImF1dGgiLCJsb2dvdXRUaW1lQXQiOjE3NjQyMDkxOTksImV4cCI6MTc2MTYyMDc5OSwiaWF0IjoxNzYxNjE3MTk5LCJqdGkiOiI4ZDBhMGFhNy1hY2FkLTQ5MDAtYThiMy04ZWJiMTlhMTQzMjAifQ.4Fen53XRWpFpHuAok9szUk9NytSCuYpMhpPJ1kp0gK0",
  },
});

request.interceptors.request.use((config) => {
  return config;
});

request.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(new Error(error.message));
  }
);

export default request;
