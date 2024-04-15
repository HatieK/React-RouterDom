import React from "react";
import { Form, Input, Button } from "./styled-todo";
import { useState } from "react";

const TodoForm = ({ handleSubmit }) => {
  const [inputValue, setInputValue] = useState("");
  function __onInputChange(event) {
    setInputValue(event.target.value);
  }
  function __onSubmit(e) {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      handleSubmit?.(inputValue);
    }
    setInputValue("");
  }
  return (
    <div>
      <Form className="form" onSubmit={__onSubmit}>
        <Input
          className="input"
          type="text"
          onChange={__onInputChange}
          value={inputValue}
        />
        <Button className="btn">Add</Button>
      </Form>
    </div>
  );
};

export default TodoForm;
