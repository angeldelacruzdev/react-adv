import { useState } from "react";
import { OnChangeArgs, ProductInCart } from "../interfaces/interfaces";

const useShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: ProductInCart;
  }>({});

  const onProductCountChange = ({ count, product }: OnChangeArgs) => {
    setShoppingCart((oldShoppinfCart) => {
      if (count === 0) {
        const { [product.id]: toDelete, ...rest } = oldShoppinfCart;
        return { ...rest };
      }

      return {
        ...oldShoppinfCart,
        [product.id]: { ...product, count },
      };
    });
  };

  return { onProductCountChange, shoppingCart };
};

export default useShoppingCart;
