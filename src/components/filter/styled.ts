import { styled } from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    background: white;    
`

export const Title = styled.h3`
    text-align: start;
`

export const MoneyContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 20px 20px 0px 20px;
`

export const MoneyList = styled.ul`
    display: flex;
    list-style-type: none;
`

export const MoneyListItem = styled.li<{active?: string}>`
    padding: 5px 20px;
    border: 1px solid #82baf5;
    font-weight: 600;
    color: #1684f9;
    ${({active}) => active && `
        border: 1px solid #1684f9;
        background: #1684f9;
        color: white;
    `};
    &:hover {
        background: ${({active}) => !active && '#e4eef9'};
        cursor: pointer;
    }
`