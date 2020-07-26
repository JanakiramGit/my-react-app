import axios from "axios";

export default axios.create({
  //baseURL: "https://jsonplaceholder.typicode.com",
  baseURL: "https://jk-springboot-todo.herokuapp.com",
  headers: {
    "Content-type": "application/json"
  }
});