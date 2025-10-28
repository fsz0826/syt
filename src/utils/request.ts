import axios from "axios";

const request = axios.create({
  baseURL: "/poms",
  timeout: 5000,
  headers: {
    haoweitoken:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImVhMzU5MmMzLTczYmMtNGRhZS04MzJmLWIxOGJiNGFmOGM2ZSJ9.eyJhdWQiOiJVMjAyMjAzMjMxMTAwNTc3OTk3OTc2NzY4NTciLCJzdWIiOiJzeXMxMCIsImlzcyI6ImF1dGgiLCJsb2dvdXRUaW1lQXQiOjE3NjQyMjk5NDcsImV4cCI6MTc2MTY0MTU0NywiaWF0IjoxNzYxNjM3OTQ3LCJqdGkiOiIxYTQ0MDU4ZC1jNTZiLTQxNWItYjBkMS01MTQ1ZjMwMmYxNTcifQ.Yt09y8GxwEd_dO7dWAHlEvmo6eADtlKJe817SaiEiq0",
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
