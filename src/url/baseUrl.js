import axios from "axios";
const api = axios.create({
  
    baseURL:  ['https://arg-backend.vercel.app',
               'http://localhost:3004'],
    headers: {
      'Content-Type': 'application/json',
    },
  });
  export default api;















    // baseURL: "http://localhost:3004",
    //https://mcbackend.vercel.app/
    //https://booster-backend.vercel.app