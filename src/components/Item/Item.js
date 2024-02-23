import styled from "@emotion/styled";
import React from "react";

export const Item = ({ item }) => {
  return (
    <Wrapper>
      <ListItem>{item}</ListItem>
      <Button>삭제</Button>
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
