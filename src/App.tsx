import * as React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import AppHeader from "./@components/common/header";
import ProductContext, {
  ProductContextProvider,
} from "./@contexts/product.context";
import AppRoutes from "./App.routes";
import ShoppingCart from "./@components/common/cart.icon";
import ShoppingCartIcon from "./@components/common/cart.icon";
import { Link } from "react-router-dom";

export interface IAppProps {}

export default function App(props: IAppProps) {
  return (
    <BrowserRouter>
      <ProductContextProvider>
        <div>
          <AppHeader>
            <Link to="/">Products</Link>
            <ShoppingCartIcon />
          </AppHeader>
          <div className="container p-4">
            <AppRoutes />
          </div>
        </div>
      </ProductContextProvider>
    </BrowserRouter>
  );
}
