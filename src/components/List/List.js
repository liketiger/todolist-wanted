import styled from "@emotion/styled";
import React from "react";
import { Item } from "../Item/Item";

export const List = () => {
  return (
    <ListUl>
      {Array(10)
        .fill(0)
        .map((item, index) => (
          <Item key={index} item={item} />
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
