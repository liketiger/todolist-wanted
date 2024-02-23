import styled from "@emotion/styled";
import React from "react";
import { useSelector } from "react-redux";
import { Item } from "../Item/Item";

export const List = () => {
  const todoList = useSelector((state) => state.todo.todoList);
  return (
    <ListUl>
      {todoList.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </ListUl>
  );
};

const ListUl = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 10px;
  padding-right: 0;
  gap: 10px;
`;
