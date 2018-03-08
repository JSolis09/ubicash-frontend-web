export class Bank {
    id: string;
    name: string;
    short_name: string;
    code: string;
}

export class BankDetail {
    id: string;
    address: string;
    lat: number;
    lng: number;
    detail: string;
    distance: number;
    bank?: Bank;
}
