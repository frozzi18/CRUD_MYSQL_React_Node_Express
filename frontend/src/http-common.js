import axios from "axios";

export default axios.create({
  baseURL:
    "https://frozzi-nodejs-mysql.herokuapp.com/api" ||
    "http://localhost:8080/api",
  headers: {
    "Content-type": "application/json",
  },
});
