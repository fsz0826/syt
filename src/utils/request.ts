import axios from "axios";

const request = axios.create({
  baseURL: "/poms",
  timeout: 5000,
  headers: {
    haoweitoken:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImJhYTY1Mjg1LWE5ZjEtNGEzMC1iNzgyLTMwOWIwYjEzMzgxYiJ9.eyJhdWQiOiJVMjAyMjAzMjMxMTAwNTc3OTk3OTc2NzY4NTciLCJzdWIiOiJzeXMxMCIsImlzcyI6ImF1dGgiLCJsb2dvdXRUaW1lQXQiOjE3NjQyMjUyMDQsImV4cCI6MTc2MTYzNjgwNCwiaWF0IjoxNzYxNjMzMjA0LCJqdGkiOiIzNTBkODk5OC03YTVlLTRhZGItOGRhOS1mNDZkNjRmYzIyNGMifQ.y1X9UHGwjaNOrsyN7Qph6h5LwbCQ5ulCvLje10ZCS_o",
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
