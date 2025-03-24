import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000/api", //https://taskinn-backend.onrender.com/api
  withCredentials: true,
});

export default instance;
