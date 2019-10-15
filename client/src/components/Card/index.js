import React from "react";

import { List, ListItem } from "../List/index.js";
import API from "../../utils/API.js";
import DeleteBtn from "../DeleteBtn/index.js";

export function Card({ todoList, flagUpdate }) {
  const deleteTodo = id => {
    API.deleteTodos(id).then(() => flagUpdate());
  };
  return (
    <div className="card">
      <div className="card-header">TodoList</div>
      <div className="card-body">
        <List>
          {todoList.length
            ? todoList.map((element, index) => (
                <ListItem key={element._id ? element._id : index}>
                  {element.todo}
                  <DeleteBtn
                    key={index}
                    id={element._id}
                    deleteTodo={deleteTodo}
                  />
                </ListItem>
              ))
            : ""}
        </List>
      </div>
    </div>
  );
}
