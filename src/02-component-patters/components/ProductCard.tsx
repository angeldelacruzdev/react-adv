import { createContext } from "react";

import useProduct from "./../hooks/useProduct";
import { Product, ProductContextProps } from "./../interfaces/interfaces";

import styles from "./../styles/styles.module.css";

export interface Props {
  product: Product;
  children?: React.ReactElement | React.ReactElement[];
  className?: string;
  style?: React.CSSProperties;
}

export const ProductContext = createContext({} as ProductContextProps);

const { Provider } = ProductContext;

export const ProductCard = ({ product, children, className, style }: Props) => {
  const { increaseBy, counter } = useProduct();

  return (
    <Provider value={{ increaseBy, counter, product }}>
      <div style={style} className={`${styles.productCard} ${className}`}>
        {children}
      </div>
    </Provider>
  );
};

export default ProductCard;
