
import { ProductCard } from "./../components/index";
 
import "./../styles/custom-styles.css";
import useShoppingCart from "./../hooks/useShoppingCart";
import { products } from './../data/products';

const ShoppingPage = () => {
  const { onProductCountChange, shoppingCart } = useShoppingCart();

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
        {products.map((item) => (
          <ProductCard
            key={item.id}
            product={item}
            onChange={onProductCountChange}
            value={shoppingCart[item.id]?.count || 0}
          >
            <ProductCard.Image img={item.img} />
            <ProductCard.Title />
            <ProductCard.Buttons />
          </ProductCard>
        ))}
      </div>

      <div className="shopping-card">
        {Object.entries(shoppingCart).map(([key, product]) => (
          <ProductCard
            key={key}
            product={product}
            className="bg-dark text-white"
            style={{ width: "150px" }}
            value={product.count}
            onChange={onProductCountChange}
          >
            <ProductCard.Image img={product.img} />
            <ProductCard.Buttons />
          </ProductCard>
        ))}
      </div>
      <div>
        <code>{JSON.stringify(shoppingCart, null, 5)}</code>
      </div>
    </div>
  );
};

export default ShoppingPage;
