import React, { FunctionComponent} from "react";
import { Button } from "@material-ui/core";
import { CartItemType } from "../types";
import styles from "./styles.module.scss";

type Props = {
  item: CartItemType;
  handleAddToCart: (item: CartItemType) => void;
};

const Item: FunctionComponent<Props> = ({ item, handleAddToCart }) => {


  return (
    <div className={styles.wrapper}>
      <img src={item.image} alt={item.title} />
      <div className={styles.mainContent}>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <h3>${item.price}</h3>
      </div>
      <Button onClick={() => handleAddToCart(item)} className={styles.button}>
        Add to cart
      </Button>
    </div>
  );
};

export default Item;
