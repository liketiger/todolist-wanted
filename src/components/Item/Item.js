import styled from "@emotion/styled";
import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../../store/todoSlice";

export const Item = ({ item }) => {
  const dispatch = useDispatch();

  const onBtnClick = () => {
    dispatch(deleteTodo(item.id));
  };

  return (
    <Wrapper>
      <ListItem>{item.content}</ListItem>
      <Button onClick={onBtnClick}>삭제</Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 5px 10px;
  display: flex;
  justify-content: space-between;
  border: 1px solid white;
  border-radius: 5px;
`;

const ListItem = styled.li`
  color: white;
  display: flex;
  align-items: center;
`;

const Button = styled.button`
  width: 100px;
  height: 35px;
  border: none;
  border-radius: 5px;
  background-color: orange;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
`;
