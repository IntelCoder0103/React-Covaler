import * as React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import AppHeader from "./@components/common/header";
import ProductContext, {
    ProductContextProvider,
} from "./@contexts/product.context";
import AppRoutes from "./App.routes";

export interface IAppProps {}

export default function App(props: IAppProps) {
    return (
        <div>
            <AppHeader>Products</AppHeader>
            <div className="container p-4">
                <ProductContextProvider>
                    <BrowserRouter>
                        <AppRoutes />
                    </BrowserRouter>
                </ProductContextProvider>
            </div>
        </div>
    );
}
