import axios from "axios";

export const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_DEADLOCKAPP_BACKEND_BASE_URL,
});
