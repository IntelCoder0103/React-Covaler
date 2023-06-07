import React, { useContext } from 'react';
import ProductContext from '../../@contexts/product.context';
import ProductRow from '../products/product.row';
import ShoppingCartTotal from './cart.total';

export interface IShoppingCartPageProps {
}

export default function ShoppingCartPage(props: IShoppingCartPageProps) {
  const { cart } = useContext(ProductContext);
  return (
    <div>
      <table className="table" data-testid="product-table">
        <thead className="thead-dark">
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Type</th>
            <th>State</th>
            <th></th>
          </tr>
        </thead>
        <tbody data-testid="product-table-body">
          {cart.map((p, i) => (
            <ProductRow product={p} key={p.id} />
          ))}
        </tbody>
      </table>
      <ShoppingCartTotal />
    </div>
  );
}
