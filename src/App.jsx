import { useState } from "react";
import productsData from "../data.json";
import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";
import ConfirmationModal from "./components/ConfirmationModal";

function App() {
  const [cart, setCart] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addToCart = (product) => {
    setCart((prev) => ({
      ...prev,
      [product.name]: { ...product, quantity: 1 },
    }));
  };

  const incrementQuantity = (productName) => {
    setCart((prev) => ({
      ...prev,
      [productName]: {
        ...prev[productName],
        quantity: prev[productName].quantity + 1,
      },
    }));
  };

  const decrementQuantity = (productName) => {
    setCart((prev) => {
      const currentQty = prev[productName].quantity;
      if (currentQty <= 1) {
        const newCart = { ...prev };
        delete newCart[productName];
        return newCart;
      }
      return {
        ...prev,
        [productName]: { ...prev[productName], quantity: currentQty - 1 },
      };
    });
  };

  const removeFromCart = (productName) => {
    setCart((prev) => {
      const newCart = { ...prev };
      delete newCart[productName];
      return newCart;
    });
  };

  const resetOrder = () => {
    setCart({});
    setIsModalOpen(false);
  };

  return (
    <main className="min-h-screen container-custom py-10 px-4 md:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Product List Section */}
        <div className="lg:col-span-2">
          <h1 className="text-rose-900 text-4xl font-bold mb-8">Desserts</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* product card */}
            {productsData.map((product) => (
              <ProductCard
                key={product.name}
                product={product}
                quantity={cart[product.name]?.quantity || 0}
                onAdd={addToCart}
                onIncrement={incrementQuantity}
                onDecrement={decrementQuantity}
              />
            ))}
          </div>
        </div>

        {/* Cart Section */}
        <div className="lg:col-span-1">
          <Cart
            cartItems={cart}
            onRemove={removeFromCart}
            onConfirm={() => setIsModalOpen(true)}
          />
        </div>
      </div>

      {isModalOpen && (
        <ConfirmationModal cartItems={cart} onClose={resetOrder} />
      )}
    </main>
  );
}

export default App;
