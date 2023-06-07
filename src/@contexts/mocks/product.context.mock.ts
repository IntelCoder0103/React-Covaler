import { demoProducts } from "../../data.sample";
import { IProductContextProps } from "../product.context";

export const testProductContextValue: IProductContextProps = {
  addProduct: jest.fn(),
  editProduct: jest.fn(),
  deleteProduct: jest.fn(),
  getProduct: jest.fn(),
  products: demoProducts,

  addToCart: jest.fn(),
  removeFromCart: jest.fn(),
  cart: [],
};
