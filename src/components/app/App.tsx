import { useEffect, useState } from 'react';
import { Filter } from '../filter'
import { Tickets } from '../ticketList'
import './App.css'
import { Container } from './styled'
import { Filters, Ticket } from '../../types';
import { CURRENCY_LIST } from '../../constants';

function App() {
    const [tickets, setTickets] = useState<Ticket[]>();
    const [filters, setFilters] = useState<Filters>(
      {
        currency: 'RUB',
        transfers: []
      }
    );

    useEffect(() => {
      fetch('/tickets.json').then(resp => resp.json()).then((data: Ticket[]) => setTickets(data.sort((a, b) => a.price - b.price)))
    } , [])

    const filteredTickets = tickets?.filter((item) => {
      if(filters.transfers.length === 0) return true
      return filters.transfers ? filters.transfers.includes(item.transfers) : true
    })
  
    const coeff = CURRENCY_LIST.find(({currency}) => currency === filters.currency)!.coeff;
    const modifiedCurrencyTickets = filteredTickets?.map((item) => ({...item, price: item.price * coeff}))
    const currentCurrency = filters.currency
    return (
      <Container>
        <Filter filters={filters} setFilters={setFilters} />
        <Tickets currentCurrency={currentCurrency} tickets={modifiedCurrencyTickets}/>
      </Container>
    )
}

export default App
