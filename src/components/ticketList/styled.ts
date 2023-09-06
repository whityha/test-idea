import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    background: white;
    padding: 20px;
`

export const TicketList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 70px;
`

export const TicketListItem = styled.li`
    display: flex;
    gap: 20px;
`

export const LeftSide = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    flex: 1;
`

export const RightSide = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 20px;
    flex: 3;
`

export const Company = styled.h2``

export const ButtonPrice = styled.button`
    padding: 10px;
    background: orange;
    color: white;
`

export const Place = styled.div`
    display: flex;
    flex-direction: column;
`
export const Time = styled.p`
    font-size: 40px;
`

export const City = styled.span`
    margin-right: 5px;
`
export const ShortName = styled.span``

export const DateTicket = styled.p`
    font-weight: 600;
    color: #82baf5;
`

export const DividerTicket = styled.div`
    position: relative;
    align-self: center;
    width: 200px;
    height: 1px;
    background: #ace2f3;
    &:before {
        content: '';
        position: absolute;
        top: -20px;
        left: 10px;
        width: 20px;
        aspect-ratio: 1;
        background: url('/plane.svg') no-repeat center
    };
    &:after {
        content: '';
        position: absolute;
        top: -20px;
        right: 10px;
        width: 20px;
        aspect-ratio: 1;
        background: url('/plane.svg') no-repeat center;
        transform: rotate(45deg);
    };

`

export const DividerLine = styled.div`
    width: 1px;
    background: gray;
`