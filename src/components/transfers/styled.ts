import { styled } from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding-bottom: 20px;
`
export const Title = styled.h3`
    text-align: start;
    padding: 0 20px;
`

export const TransfersList = styled.ul`
    display: flex;
    flex-direction: column;
`

export const Label = styled.label`
    padding: 5px 20px;
    display: flex;
    gap: 15px;
    cursor: pointer;
    &:hover {
        background: #e4eef9;
    }
`