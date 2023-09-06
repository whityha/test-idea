import { CHECKBOX_LIST } from "../../mocks";
import { Filters } from "../../types";
import { Container, Label, Title, TransfersList } from "./styled"

export const Transfers = ({filters, setFilters}: {filters: Filters; setFilters: (arg: Filters | ((prevState: Filters) => Filters)) => void}) => {
    const handleFilterTransfers = (filter: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
        setFilters(prevState => {
            if (!prevState.transfers) {
                return {...prevState, transfers: [filter]}
            }
            if(!e.target.checked) return {...prevState, transfers: prevState.transfers.filter(item => item !== filter)}
            return {...prevState, transfers: [...prevState.transfers, filter]}
        })
    }
    return (
        <Container>
            <Title>Количество пересадок</Title>
            <TransfersList>
                {CHECKBOX_LIST.map(({id, text, filter}) => <li key={id}>
                    <Label>
                        <input type='checkbox' name={text} onChange={handleFilterTransfers(filter)} checked={filters.transfers.includes(filter)} />
                        {text}
                    </Label>
                    </li>)}
            </TransfersList>
        </Container>
    )
}
