import React, { useContext } from "react";
import ProductContext from "../../@contexts/product.context";
import { getDiscount } from "../../@services/discount.service";

export interface IShoppingCartTotalProps {}

export default function ShoppingCartTotal(props: IShoppingCartTotalProps) {
  const { cart } = useContext(ProductContext);
  const total = cart.reduce<number>((total, p) => total + p.price, 0);
  const discount = getDiscount(total);
  const pay = (total * (100 - discount)) / 100;
  return (
    <div>
      <div>Total Price: ${total}</div>
      <div>{discount > 0 && <>Discount: {discount}%</>}</div>
      <hr />
      <div>${pay}</div>
    </div>
  );
}
