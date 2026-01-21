import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import CartModal from './components/CartModal';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  const addToCart = (product) => {
    if (cart.some((item) => item.id === product.id)) {
      alert('Item already added to the cart');
    } else {
      setCart([...cart, product]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-600 border-opacity-50"></div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-b from-Fuchsia-400 to-pink-300  min-h-screen">
      <Navbar cartCount={cart.length} toggleModal={toggleModal} />
      <ProductList products={products} addToCart={addToCart} />
      <CartModal
        isOpen={isModalOpen}
        onClose={toggleModal}
        cartItems={cart}
        removeFromCart={removeFromCart}
      />
    </div>
  );
}

export default App;
