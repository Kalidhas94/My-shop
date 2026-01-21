import React from 'react';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
    const { cart, addToCart, removeFromCart } = useCart();

    const isInCart = cart.some((item) => item.id === product.id);

    const handleCartAction = () => {
        if (isInCart) {
            removeFromCart(product.id);
        } else {
            addToCart(product);
        }
    };

    return (
        <div className="bg-white p-4 rounded-xl shadow-lg flex flex-col items-center hover:shadow-2xl hover:scale-105 transition-all duration-300 transform border border-gray-100">
            <div className="h-48 w-full flex items-center justify-center p-4 bg-gray-50 rounded-lg mb-4 overflow-hidden relative group">
                <img
                    src={product.image}
                    alt={product.title}
                    className="h-full w-auto object-contain mix-blend-multiply transition-transform duration-300 group-hover:scale-110"
                />
            </div>
            <h2 className="text-lg font-bold text-gray-800 text-left w-full mb-1 line-clamp-1" title={product.title}>
                {product.title}
            </h2>
            <p className="text-gray-500 text-left w-full text-xs mb-3 line-clamp-2 h-8">
                {product.description}
            </p>
            <div className="mt-auto flex items-center justify-between w-full">
                <span className="text-xl font-bold text-gray-900">
                    ${product.price}
                </span>
                <button
                    onClick={handleCartAction}
                    className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 shadow-md ${isInCart
                            ? 'bg-red-500 hover:bg-red-600 text-white ring-2 ring-red-300'
                            : 'bg-indigo-600 hover:bg-indigo-700 text-white ring-2 ring-indigo-300'
                        }`}
                >
                    {isInCart ? 'Remove' : 'Add to Cart'}
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
