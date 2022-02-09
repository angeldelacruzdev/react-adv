import { useState } from "react";
import { OnChangeArgs, ProductInCart } from "../interfaces/interfaces";

const useShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: ProductInCart;
  }>({});

  const onProductCountChange = ({ count, product }: OnChangeArgs) => {
    setShoppingCart((oldShoppinfCart) => {
      const productInCart: ProductInCart = oldShoppinfCart[product.id] || {
        ...product,
        count: 0,
      };
      if (Math.max(productInCart.count + count, 0) > 0) {
        productInCart.count += count;
        return {
          ...oldShoppinfCart,
          [product.id]: productInCart,
        };
      }
      //Delete product
      const { [product.id]: toDelete, ...rest } = oldShoppinfCart;
      return { ...rest };
    });
  };

  return { onProductCountChange, shoppingCart };
};

export default useShoppingCart;
