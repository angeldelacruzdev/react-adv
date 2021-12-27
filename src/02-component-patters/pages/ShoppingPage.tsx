import { ProductCard } from "./../components/index";
import { ProductImage, ProductButtons, ProductTitle } from "./../components";

import "./../styles/custom-styles.css";

const products = {
  id: "1",
  title: "Coffee Mug",
};

const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Page</h1>
      <hr />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        <ProductCard product={products}>
          <ProductCard.Image />
          <ProductCard.Title title="Coffe Mug" />
          <ProductCard.Buttons />
        </ProductCard>

        <ProductCard product={products} className="bg-dark">
          <ProductImage className="custom-image" />
          <ProductTitle title="Coffe Mug" className="text-white" />
          <ProductButtons className="custom-buttons" />
        </ProductCard>
      </div>
    </div>
  );
};

export default ShoppingPage;
