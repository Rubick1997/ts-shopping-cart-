import React from "react";
import { FunctionComponent } from "react";
import CartItem from "../CartItem";
import { CartItemType } from "../types";
import styles from "./styles.module.scss";

type Props = {
  cartItems: CartItemType[];
  addToCart: (item: CartItemType) => void;
  removeFromCart: (id: number) => void;
};

const Cart: FunctionComponent<Props> = ({
  cartItems,
  addToCart,
  removeFromCart,
}) => {
  const calculateTotal = (items: CartItemType[]) =>
    items.reduce((ack: number, item) => ack + item.amount * item.price, 0);

  return (
    <aside className={styles.wrapper}>
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? <p> No items in cart </p> : null}
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
      Total: ${calculateTotal(cartItems).toFixed(2)}
    </aside>
  );
};

export default Cart;
