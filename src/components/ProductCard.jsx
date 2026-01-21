import React from 'react';

const ProductCard = ({ product, addToCart }) => {
    return (
        <div className="bg-gray-200 p-4 rounded-lg shadow-lg flex flex-col items-center hover:scale-105 transition-transform duration-300">
            <img
                src={product.image}
                alt={product.title}
                className="h-48 w-auto object-contain mb-4"
            />
            <h2 className="text-lg font-bold text-gray-800 text-center mb-2 line-clamp-1">
                {product.title}
            </h2>
            <p className="text-gray-600 text-center text-sm mb-4 line-clamp-2">
                {product.description}
            </p>
            <div className="mt-auto flex flex-col items-center w-full">
                <span className="text-xl font-bold text-green-600 mb-3">
                    ${product.price}
                </span>
                <button
                    onClick={() => addToCart(product)}
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300 w-full font-semibold"
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
