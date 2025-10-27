import axios from "axios";

const request = axios.create({
  baseURL: "/poms",
  timeout: 5000,
  headers: {
    haoweitoken:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImZiMDhlMDk2LTkxNzItNDRiYy04MTg4LWRmZGVlMTQ1MjliNyJ9.eyJhdWQiOiJVMjAyMjAzMjMxMTAwNTc3OTk3OTc2NzY4NTciLCJzdWIiOiJzeXMxMCIsImlzcyI6ImF1dGgiLCJsb2dvdXRUaW1lQXQiOjE3NjQxNDEzNjcsImV4cCI6MTc2MTU1Mjk2NywiaWF0IjoxNzYxNTQ5MzY3LCJqdGkiOiIxZmY3NTAxZi1jMmZiLTRlOTAtOGE5ZC04MTU5YTRjOTJlYjYifQ.vUr8Z9xDmHWXP51qliUA5pzxK7J7b-6gJjMdCekeyVY",
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
