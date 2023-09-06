export interface Ticket {
    id: number,
    start: {
        date: string;
        airport: string;
        city: string;
    },
    end: {
        date: string;
        airport: string;
        city: string;
    },
    company: string,
    transfers: number,
    price: number
}

export type currencyType = 'EUR' | "RUB" | "USD"

export interface Filters {
    currency: currencyType,
    transfers: number[];
}