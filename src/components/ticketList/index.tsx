import { Ticket, currencyType } from '../../types';
import { ButtonPrice, City, Company, Container, LeftSide, Place, RightSide, ShortName, TicketList, TicketListItem, Time, DateTicket, DividerTicket, DividerLine } from './styled'

export const Tickets = ({tickets, currentCurrency}: {currentCurrency: currencyType; tickets: Ticket[] | undefined}) => {
    return (
        <Container>
            <TicketList>
                {tickets && tickets.map(({id, company, end, start, price, transfers}) => {
                    const startDate = new Date(start.date);
                    const endDate = new Date(end.date);
                    return <TicketListItem key={id}>
                        <LeftSide>
                            <Company>{company}</Company>
                            <ButtonPrice>Купить <br/>за {price.toLocaleString()} {currentCurrency}</ButtonPrice>
                        </LeftSide>
                        <DividerLine />
                        <RightSide>
                            <Place>
                                <Time>{startDate.getHours().toString().padStart(2, '0')}:{startDate.getMinutes().toString().padStart(2, '0')}</Time>
                                <div>
                                    <City>{start.city},</City>
                                    <ShortName>{start.airport}</ShortName>
                                </div>
                                <DateTicket>09 Окт 2020, Пт</DateTicket>
                            </Place>
                            <DividerTicket>{transfers} пересадка</DividerTicket>
                            <Place>
                                <Time>{endDate.getHours().toString().padStart(2, '0')}:{endDate.getMinutes().toString().padStart(2, '0')}</Time>
                                <div>
                                    <City>{end.city},</City>
                                    <ShortName>{end.airport}</ShortName>
                                </div>
                                <DateTicket>09 Окт 2020, Пт</DateTicket>
                            </Place>
                        </RightSide>
                    </TicketListItem>
                    })
                }
            </TicketList>
        </Container>
    )
}
