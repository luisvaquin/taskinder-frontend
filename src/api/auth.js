import axios from "axios";

const API = "https://taskinder-backend.vercel.app/api";

export const registerRequest = (user) => axios.post(`${API}/register`, user);

export const loginRequest = (user) => axios.post(`${API}/login`, user);
