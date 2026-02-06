import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cart, removeFromCart, updateQuantity, totalPrice, discount, finalPrice } = useCart();

    if (cart.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
                <div className="text-gray-400 text-6xl mb-4">🛒</div>
                <h2 className="text-2xl font-bold text-white mb-2">Your cart is empty</h2>
                <p className="text-white mb-6">Looks like you haven't added anything to your cart yet.</p>
                <Link to="/" className="bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-indigo-700 transition duration-300">
                    Start Shopping
                </Link>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8 max-w-6xl">
            <h1 className="text-3xl font-bold text-gray-800 mb-8">Shopping Cart ({cart.length} items)</h1>

            <div className="flex flex-col lg:flex-row gap-8">
                {/* Cart Items List */}
                <div className="flex-1 space-y-4">
                    {cart.map((item) => (
                        <div key={item.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 flex flex-col sm:flex-row items-center gap-4 transition-all duration-300 hover:shadow-md">
                            <div className="h-24 w-24 flex-shrink-0 bg-gray-50 rounded-md flex items-center justify-center p-2">
                                <img src={item.image} alt={item.title} className="h-full w-auto object-contain mix-blend-multiply" />
                            </div>

                            <div className="flex-1 w-full text-center sm:text-left">
                                <h3 className="font-semibold text-gray-800 text-lg line-clamp-1">{item.title}</h3>
                                <p className="text-gray-500 text-sm mb-2">{item.category}</p>
                                <div className="text-indigo-600 font-bold text-lg">${item.price.toFixed(2)}</div>
                            </div>

                            <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-1">
                                <button
                                    onClick={() => updateQuantity(item.id, -1)}
                                    className="w-8 h-8 flex items-center justify-center bg-white rounded-md shadow-sm text-gray-600 hover:bg-gray-100 font-bold disabled:opacity-50"
                                    disabled={item.quantity <= 1}
                                >
                                    -
                                </button>
                                <span className="font-semibold text-gray-700 w-6 text-center">{item.quantity}</span>
                                <button
                                    onClick={() => updateQuantity(item.id, 1)}
                                    className="w-8 h-8 flex items-center justify-center bg-white rounded-md shadow-sm text-gray-600 hover:bg-gray-100 font-bold"
                                >
                                    +
                                </button>
                            </div>

                            <div className="text-right min-w-[100px] font-bold text-gray-800 text-lg hidden sm:block">
                                ${(item.price * item.quantity).toFixed(2)}
                            </div>

                            <button
                                onClick={() => removeFromCart(item.id)}
                                className="text-red-500 hover:text-red-700 font-medium text-sm transition-colors flex items-center gap-1"
                                title="Remove from Cart"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                </svg>
                                <span className="hidden sm:inline">Remove</span>
                            </button>
                        </div>
                    ))}
                </div>

                {/* Order Summary */}
                <div className="lg:w-96 w-full">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 sticky top-24">
                        <h2 className="text-xl font-bold text-gray-800 mb-6">Order Summary</h2>

                        <div className="space-y-4 mb-6">
                            <div className="flex justify-between text-gray-600">
                                <span>Subtotal</span>
                                <span>${totalPrice.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between text-green-600">
                                <span>Discount (10%)</span>
                                <span>-${discount.toFixed(2)}</span>
                            </div>
                            <div className="h-px bg-gray-200 my-4"></div>
                            <div className="flex justify-between text-xl font-bold text-gray-900">
                                <span>Total</span>
                                <span>${finalPrice.toFixed(2)}</span>
                            </div>
                        </div>

                        <button className="w-full bg-indigo-600 text-white py-3.5 rounded-xl font-semibold shadow-lg hover:bg-indigo-700 transition duration-300 transform active:scale-95">
                            Checkout
                        </button>
                    <div className="mt-6 flex justify-center">
                        <Link
                            to="/"
                            className="text-sm font-medium text-gray-500 hover:text-indigo-600 transition-colors flex items-center gap-1"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                            </svg>
                            Continue Shopping
                        </Link>
                    </div></div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
