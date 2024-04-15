import React from "react";
import styled from "styled-components";
import { Button } from "./styled-todo";
import { useState } from "react";
import TodoForm from "./TodoForm";
import {
  Form,
  Input,
  ListItem,
  EditButton,
  CompleteButton,
  DeleteButton,
} from "./styled-todo";

const TodoItem = ({
  name = "",
  id = "",
  completed,
  handleCompleteTodo,
  handleEditTodo,
  handleDeleteTodo,
}) => {
  console.log("🚀completed---->", completed);
  const [editing, setEditing] = useState(false);
  const [valueInput, setValueInput] = useState("");
  const _onEditClick = () => {
    setEditing(true);
  };

  // const _onEditSave = (editValue) => {
  //   console.log("editValue", editValue);
  //   handleEditTodo?.(id, editValue);
  //   setEditing(false);
  // };
  const _onDeleteClick = () => {
    handleDeleteTodo?.(id);
  };

  const _onCompleteClick = () => {
    // console.log("🚀111---->", 111);
    handleCompleteTodo?.(id);
    console.log("🚀id---->", id);
  };

  const handleEditValue = (e) => {
    setValueInput(e.target.value);
  };

  const onSaveClick = (e) => {
    e.preventDefault();
    if (valueInput.trim() !== "") {
      handleEditTodo?.(id, valueInput);
    }
    setEditing(false);
  };
  return (
    <div>
      {/* TODO ITEM */}
      {/* BÀI TẬP 2: dựa vào completed props điều chỉnh style của ListItem */}
      <ListItem className="item" completed={completed}>
        {/* TODO ITEM - CONTENT*/}
        {/* BÀI TẬP 2: dựa vào isEditing state làm điều kiện hiển thị ItemContent hay ItemEditForm */}
        {!editing ? (
          <div className="item-content active">
            <span className="label">{name}</span>
            <div className="action">
              {/* && lấy false value đầu gán lại ko thì 
              lấy cái sau
              */}
              {!completed && (
                <EditButton className="btn btn-edit" onClick={_onEditClick}>
                  Edit
                </EditButton>
              )}
              <DeleteButton className="btn btn-delete" onClick={_onDeleteClick}>
                Delete
              </DeleteButton>
              <CompleteButton
                className="btn btn-done"
                onClick={_onCompleteClick}
                completed={completed}
                // BÀI TẬP 2: dựa vào completed props điều chỉnh style của CompleteButton
              >
                {completed ? "Undone" : "Done"}
              </CompleteButton>
            </div>
          </div>
        ) : (
          <div className="item-edit-form active">
            {/* BÀI TẬP 2: Tái sử dụng TodoForm vào ItemEditForm (Nâng cao) */}
            {/* <TodoForm
              defaultValue={name}
              btnText="Save"
              handleSubmit={_onEditSave}
            /> */}
            <Form className="form" onSubmit={onSaveClick}>
              <Input
                className="input"
                type="text"
                value={valueInput}
                onChange={handleEditValue}
              />
              <Button className="btn">Save</Button>
            </Form>
          </div>
        )}
      </ListItem>
    </div>
  );
};

export default TodoItem;
