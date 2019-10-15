import axios from "axios";

export default {
  getTodos: function() {
    return axios.get("/api/all");
  },
  saveTodos: function(todoData) {
    return axios.post("/api/todo", todoData);
  },
  deleteTodos: function(id) {
    return axios.delete("/api/todo/delete/" + id);
  }
};
