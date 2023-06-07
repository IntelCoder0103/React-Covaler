import React, { useContext } from "react";
import styled from "styled-components";
import ProductContext from "../../@contexts/product.context";
import { Link } from "react-router-dom";

const ShoppingCartContainer = styled.div`
  font-size: 1rem;
`;
export default function ShoppingCartIcon() {
  const { cart } = useContext(ProductContext);
  return (
    <ShoppingCartContainer>
      <Link to={"/cart"}>Cart({cart.length})</Link>
    </ShoppingCartContainer>
  );
}
