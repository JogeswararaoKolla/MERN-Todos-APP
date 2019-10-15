import React, { useState, useEffect } from "react";
import { Row, Col, Container } from "./components/Grid/index.js";
import { Input, FormBtn } from "./components/Form/index.js";
import { Card } from "./components/Card/index.js";
import API from "./utils/API.js";

function App() {
  const [todo, setTodo] = useState("");
  const [todoList, settodoList] = useState([]);
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    API.getTodos().then(response => {
      console.log(`Executing the useEffect method and flag value is ${flag}`);
      console.log(response.data);
      settodoList(response.data);
    });
  }, [flag]);

  const handleChange = event => {
    setTodo(event.target.value);
  };
  const handleSubmit = event => {
    event.preventDefault();
    if (todo) {
      API.saveTodos({ todo: todo })
        .then(() => flagUpdate())
        .catch(error => console.log(error));
    }
    setTodo("");
  };

  const flagUpdate = () => setFlag(!flag);

  return (
    <div>
      <Container fluid={1}>
        <Row>
          <Col size="md-12 sm-12">
            <h1 className="jumbotron text-center">ToDo App</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 sm-6">
            <Input
              value={todo}
              placeholder="Todo Task"
              onChange={handleChange}
            ></Input>
          </Col>
          <Col size="md-2 sm-6">
            <FormBtn
              type="button"
              className="btn btn-primary"
              disabled={!todo}
              onClick={handleSubmit}
            >
              ADD
            </FormBtn>
          </Col>
        </Row>
        <Row>
          <Col size="md-12 xs-12">
            <Card todoList={todoList} flagUpdate={flagUpdate} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
