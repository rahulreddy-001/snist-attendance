const LOCAL_URL = "http://192.168.1.11:5000";
const REMOTE_URL = "https://snist-attendance-b.onrender.com";
const SERVER_URL = LOCAL_URL;

export const url = {
  ping: `${SERVER_URL}/api/status`,
  login: `${SERVER_URL}/api/login`,
};
