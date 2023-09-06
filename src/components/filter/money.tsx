import { currencyType } from "../../types"
import { MoneyContainer, MoneyList, MoneyListItem, Title } from "./styled"

interface Money {
    list: {
        currency: currencyType,
        coeff: number
    }[],
    title: string,
    currentCurrency: currencyType;
    setActiveMoney: (currency: currencyType) => void;
}

export const Money = ({list, title, currentCurrency, setActiveMoney}: Money) => {
    return (
        <MoneyContainer>
            <Title>{title}</Title>
            <MoneyList>
                {
                    list.map(({currency}, i) => currentCurrency === currency ? 
                    <MoneyListItem onClick={() => setActiveMoney(currency)} key={i} active='true'>{currency}</MoneyListItem> : 
                    <MoneyListItem onClick={() => setActiveMoney(currency)} key={i} >{currency}</MoneyListItem>)
                }
            </MoneyList>
        </MoneyContainer>
    )
}
