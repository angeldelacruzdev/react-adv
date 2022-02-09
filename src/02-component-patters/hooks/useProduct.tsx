import { useEffect, useRef, useState } from "react";
import { OnChangeArgs, Product } from "../interfaces/interfaces";

interface Ars {
  product: Product;
  onChange?: (args: OnChangeArgs) => void;
  value?: number;
}

const useProduct = ({ onChange, product, value = 0 }: Ars) => {
  const [counter, setCounter] = useState(value);

  const isControlled = useRef(!!onChange);

  console.log({ value });


  const increaseBy = (value: number) => {
    
    if (isControlled.current) {
      return onChange!({ count: value, product });
    }
  
    console.log(isControlled.current);

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
