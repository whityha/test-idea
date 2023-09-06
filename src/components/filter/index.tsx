import { CURRENCY_LIST } from '../../constants'
import { Filters, currencyType } from '../../types'
import { Transfers } from '../transfers'
import { Money } from './money'
import { Container } from './styled'

export const Filter = ({filters, setFilters}: {filters: Filters; setFilters: (arg: Filters | ((prevState: Filters) => Filters)) => void}) => {

  const setActiveMoney = (currency: currencyType) => {
    setFilters(prevFilters => ({...prevFilters, currency}))
  }

  return (
    <Container>
        <Money setActiveMoney={setActiveMoney} currentCurrency={filters.currency} title='Валюта' list={CURRENCY_LIST}  />
        <Transfers filters={filters} setFilters={setFilters} />
    </Container>
  )
}
