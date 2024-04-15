import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import { Container, Title, List } from "./styled-todo";

const TodoList = () => {
  // B1: state Todo
  const todoDataList = [
    // {
    //   id: 1,
    //   name: "Todo Item 1",
    // },
    // {
    //   id: 2,
    //   name: "Todo Item 2",
    // },
  ];
  const [todoList, setTodoList] = useState(todoDataList);
  // FUNCTION add new todo
  /*Start */
  function handleAddTodo(newTodo) {
    setTodoList([
      ...todoList,
      { id: new Date().getTime(), name: newTodo, completed: false },
    ]);
  }
  /*End */

  // FUNCTION edit a todo
  function handleEditTodo(modId, editText) {
    /*cách 1 */
    // const newTodos = [...todoDataList];
    // const currentIndex = newTodos.findIndex((todo) => {
    //   return todo.id === modId;
    // });
    // newTodos[currentIndex].name = editText;

    const newTodos = todoList.map((todo) => {
      return { ...todo, name: todo.id === modId ? editText : todo.name };
    });
    setTodoList(newTodos);
  }
  const handleCompleteTodo = (modId) => {
    console.log("🚀modId---->", modId);
    // Cách 1
    // const newTodos = [...todos];
    // const currentIndex = newTodos.findIndex((todo) => todo.id === modId)
    // newTodos[currentIndex].completed = !newTodos[currentIndex].completed;
    const newTodos = todoList.map((todo) => {
      return {
        ...todo,
        completed: todo.id === modId ? !todo.completed : todo.completed,
      };
    });
    setTodoList(newTodos);
  };

  const handleDeleteTodo = (modId) => {
    const newTodos = [...todoList];
    const currentIndex = newTodos.findIndex((todo) => todo.id === modId);
    newTodos.splice(currentIndex, 1);
    setTodoList(newTodos);
  };
  const todoItemProps = {
    handleEditTodo,
    handleCompleteTodo,
    handleDeleteTodo,
  };
  return (
    <Container className="container">
      <Title className="title">Todo List</Title>
      {/* TODO FORM */}
      <TodoForm handleSubmit={handleAddTodo} />
      <List className="list">
        {todoList.map((todo) => {
          return (
            <TodoItem
              {...todo}
              key={todo.id}
              name={todo?.name || ""}
              {...todoItemProps}
            />
          );
        })}
      </List>
    </Container>
  );
};

export default TodoList;
