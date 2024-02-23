import styled from "@emotion/styled";
import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../store/todoSlice";

const Input = () => {
  const dispatch = useDispatch();
  const inputRef = useRef();

  const onBtnClick = () => {
    dispatch(addTodo({ id: Date.now(), content: inputRef.current.value }));
    inputRef.current.value = "";
  };

  return (
    <Wrapper>
      <InputField ref={inputRef} placeholder="할 일을 입력하세요" />
      <Button onClick={onBtnClick}>등록</Button>
    </Wrapper>
  );
};

export default Input;

const InputField = styled.input`
  border: 1px solid white;
  border-radius: 5px;
  width: 80%;
  height: 30px;
  color: white;
  background-color: black;
  text-indent: 10px;
`;

const Wrapper = styled.div`
  padding: 5px 10px;
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  width: 100px;
  height: 35px;
  border: none;
  border-radius: 5px;
  background-color: skyblue;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
`;
