import { settings } from "../../settings.js";

const API = axios.create({
  baseURL: settings.API_URL,
  headers: {
    Authorization: `Bearer ${settings.API_AUTHORIZATION}`,
  },
});

const options = {
  method: "GET",
  headers: { Authorization: `Bearer ${settings.API_AUTHORIZATION}` },
};

export { API, options };
