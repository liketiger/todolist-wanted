import styled from '@emotion/styled';
import React from 'react';

const Input = () => {
    return (
        <Wrapper>
            <InputField placeholder='할 일을 입력하세요' />
            <Button>등록</Button>
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
`