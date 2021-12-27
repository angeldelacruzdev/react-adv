import { useContext } from "react";
import styles from "./../styles/styles.module.css";
import { ProductContext } from "./ProductCard";

interface Props {
  className?: string;
  style?: React.CSSProperties;
}

const ProductButtons = ({ className, style }: Props) => {
  const { increaseBy, counter } = useContext(ProductContext);

  return (
    <>
      <div style={style} className={`${styles.buttonsContainer} ${className}`}>
        <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
          -
        </button>
        <div className={styles.countLabel}>{counter}</div>
        <button className={styles.buttonAdd} onClick={() => increaseBy(+1)}>
          +
        </button>
      </div>
    </>
  );
};

export default ProductButtons;
