import { useEffect, useState } from "react";
import { OnChangeArgs, Product } from "../interfaces/interfaces";

interface Ars {
  product: Product;
  onChange?: (args: OnChangeArgs) => void;
  value?: number;
}

const useProduct = ({ onChange, product, value = 0 }: Ars) => {
  const [counter, setCounter] = useState(value);
  const increaseBy = (value: number) => {
    const newValue = Math.max(counter + value, 0);

    setCounter(newValue);
    
    onChange && onChange({ count: newValue, product });
  };

  useEffect(() => {
    setCounter(value);
  }, [value]);

  return { increaseBy, counter };
};

export default useProduct;
