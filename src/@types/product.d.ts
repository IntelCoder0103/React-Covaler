export type ProductType =
    | "Accommodation - Site"
    | "Accommodation - Cabin";

export interface IProduct {
    id?: number;
    name: string;
    price: number;
    type: ProductType;
    active?: boolean;
}
