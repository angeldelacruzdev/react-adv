import { Props as ProductCardProps } from "./../components/ProductCard";
export interface Product {
  id: string;
  title: string;
  img?: string;
}

export interface ProductContextProps {
  counter: number;
  increaseBy: (value: number) => void;
  product?: Product;
}

export interface ProductCardHOCProps {
  ({ product, children }: ProductCardProps): JSX.Element;
  Title: (Props: {
    title?: string;
    className?: string;
    style?: React.CSSProperties;
  }) => JSX.Element;
  Image: (Props: {
    img?: string;
    className?: string;
    style?: React.CSSProperties;
  }) => JSX.Element;
  Buttons: (Props: {
    className?: string;
    style?: React.CSSProperties;
  }) => JSX.Element;
}

export interface OnChangeArgs {
  product: Product;
  count: number;
}


export interface ProductInCart extends Product {
  count: number;
}