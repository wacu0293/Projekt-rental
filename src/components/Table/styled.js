import styled from "styled-components";

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: right;
    width: 100%;
    gap: 10px;
`

export const ActionContainer = styled.div `
    display: flex;
    justify-content: right;
    width: 100%;
    gap: 10px;
`

export const ActionItem = styled.div`
    display: inline-block;
    height: 40px;
    width: 40px;
    border: 1px solid #1677ff;
    border-radius: 50%;
    text-align: center;
    vertical-align: middle;
    line-height: 35px;
    font-size: 12px;
    cursor: pointer;
    &:hover {
        background-color: #1677ff;
        color: white;
    }
`
