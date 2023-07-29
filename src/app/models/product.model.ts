

export interface Product {
    id?: number;
    name?: string;
    preco?: string;
    status?: boolean;
}


export interface StateModel {
    products?:  Array<Product>;
}