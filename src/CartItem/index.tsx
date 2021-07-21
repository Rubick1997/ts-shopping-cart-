import { Button } from "@material-ui/core";
import React, { FunctionComponent } from "react";
import { CartItemType } from "../types";
import styles from "./styles.module.scss";

type Props = {
  item: CartItemType;
  addToCart: (item: CartItemType) => void;
  removeFromCart: (id: number) => void;
};

const CartItem: FunctionComponent<Props> = ({
  item,
  addToCart,
  removeFromCart,
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <h3>{item.title}</h3>
        <div className={styles.information}>
          <p>Price: ${item.price}</p>
          <p> Total:${(item.amount * item.price).toFixed(2)}</p>
        </div>
        <div className={styles.buttons}>
          <Button
            size="small"
            disableElevation
            variant="contained"
            onClick={() => removeFromCart(item.id)}
          >
            -
          </Button>
          <p>{item.amount}</p>
          <Button
            size="small"
            disableElevation
            variant="contained"
            onClick={() => addToCart(item)}
          >
            +
          </Button>
        </div>
      </div>
      <img src={item.image} alt={item.title} />
    </div>
  );
};

export default CartItem;
