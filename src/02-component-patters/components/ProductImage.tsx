import styles from "./../styles/styles.module.css";
import noImage from "./../assets/no-image.jpg";
import { useContext } from "react";
import { ProductContext } from "./ProductCard";

interface Props {
  img?: string;
  className?: string;
  style?: React.CSSProperties;
}

const ProductImage = ({ img, className, style }: Props) => {
  const { product } = useContext(ProductContext);
  let showImage: string;

  if (img) {
    showImage = img;
  } else if (product.img) {
    showImage = product.img;
  } else {
    showImage = noImage;
  }

  return (
    <img
      style={style}
      className={`${styles.productImg} ${className}`}
      src={showImage}
      alt="coffe Mug"
    />
  );
};

export default ProductImage;
