import { createContext } from "react";
import useProduct from "./../hooks/useProduct";
import {
  OnChangeArgs,
  Product,
  ProductContextProps,
} from "./../interfaces/interfaces";
import styles from "./../styles/styles.module.css";

export interface Props {
  product: Product;
  children?: React.ReactElement | React.ReactElement[];
  className?: string;
  style?: React.CSSProperties;
  onChange?: (arg: OnChangeArgs) => void;
  value?: number;
}

export const ProductContext = createContext({} as ProductContextProps);

const { Provider } = ProductContext;

export const ProductCard = ({
  product,
  children,
  className,
  style,
  onChange,
  value,
}: Props) => {
  const { increaseBy, counter } = useProduct({ onChange, product, value });

  return (
    <Provider value={{ increaseBy, counter, product }}>
      <div style={style} className={`${styles.productCard} ${className}`}>
        {children}
      </div>
    </Provider>
  );
};

export default ProductCard;
