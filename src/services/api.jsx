import axios from "axios";

export const api = axios.create({
  baseURL: "https://jcl-test-backend-production.up.railway.app",
});
