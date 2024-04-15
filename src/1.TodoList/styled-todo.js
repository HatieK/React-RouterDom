import { styled } from "styled-components";

/*FORM*/
export const Form = styled.form`
  display: flex;
  align-items: center;
  gap: 10px;
`;
export const Input = styled.input`
  padding: 10px;
  flex: 1;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid orange;
`;
export const Button = styled.button`
  padding: 10px;
  font-size: 16px;
  color: #fff;
  background-color: #007aff;
  border-radius: 5px;
  border: none;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;

/*TODO - LIST */
export const Container = styled.div`
  max-width: 600px;
  padding: 20px;
`;

export const Title = styled.h1`
  text-align: center;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 50px;
`;

/*TODO - ITEM */
export const ListItem = styled.li`
  width: 500px;
  padding: 10px;
  margin-bottom: 10px;
  font-size: 16px;
  border-radius: 10px;
  border: 2px solid gray;
  background-color: ${(props) => (props.completed ? "#565656" : "#f5f5f5")};
  .item-content {
    display: none;
    .label {
      text-decoration: ${(props) =>
        props.completed ? "line-through" : "none"};
      color: ${(props) => (props.completed ? "white" : "black")};
    }
    .action {
      display: flex;
      gap: 10px;
    }
    &.active {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
  .item-edit-form {
    display: none;
    &.active {
      display: flex;
      align-items: center;
      gap: 10px;
    }
  }
`;

export const EditButton = styled(Button)`
  background-color: #baa800;
`;

export const DeleteButton = styled(Button)`
  background-color: #dc3545;
`;

export const CompleteButton = styled(Button)`
  background-color: ${(props) => (props.completed ? "#66ccff" : "#28a745")};
`;
