import React, { useState } from "react";
import styled from "styled-components";

const CounterWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  font-size: 1.5rem;
  padding: 0.5rem 1rem;
  color: #000;
  background-color: #eee;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #ddd;
  }

  &:focus {
    outline: none;
  }
`;

const CountDisplay = styled.span`
  font-size: 1.5rem;
  margin: 0 1rem;
`;

const multipleCount = (count) => {
  console.log("multipleCount: ", count);
  return count * 2;
};

const Counter = ({ defaultCount }) => {
  const [count, setCount] = useState(() => multipleCount(defaultCount));
  const [background, setBackground] = useState("orange");
  console.log("count", count);

  const incrementCount = () => {
    // console.log("🚀before---->", count);
    setCount(count + 1);
    // console.log("after---->", count);
    console.log("🚀before---->", background);

    setBackground("green");
    console.log("🚀after---->", background);
  };

  const decrementCount = () => {
    setCount(count - 1);
    setBackground("red");
  };

  return (
    <CounterWrapper style={{ backgroundColor: background }}>
      <Button onClick={decrementCount}>-</Button>
      <CountDisplay>{count}</CountDisplay>
      <Button onClick={incrementCount}>+</Button>
    </CounterWrapper>
  );
};

export default Counter;
