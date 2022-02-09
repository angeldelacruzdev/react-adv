import { useContext } from "react";
import { ProductContext } from "./ProductCard";

import styles from "./../styles/styles.module.css";
interface Props {
  title?: string;
  className?: string;
  style?: React.CSSProperties;
}

const ProductTitle = ({ title, className, style }: Props) => {
  const { product } = useContext(ProductContext);

  return (
    <span style={style} className={`${styles.productDescription} ${className}`}>
      {title ? title : product?.title}
    </span>
  );
};

export default ProductTitle;
