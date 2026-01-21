import React from 'react';

const CartModal = ({ isOpen, onClose, cartItems, removeFromCart }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-gradient-to-b from-Fuchsia-400 to-pink-300 text-slate-700 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white w-11/12 md:w-1/2 lg:w-1/3 rounded-lg shadow-2xl overflow-hidden animate-fade-in-up">

                <div className="flex justify-between items-center p-4 border-b">
                    <h2 className="text-xl font-bold text-gray-800">Your Cart</h2>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-red-500 font-bold text-2xl"
                    >
                        &times;
                    </button>
                </div>


                <div className="p-4 max-h-[60vh] overflow-y-auto">
                    {cartItems.length === 0 ? (
                        <p className="text-center text-gray-700 py-4">Your cart is empty.</p>
                    ) : (
                        cartItems.map((item) => (
                            <div
                                key={item.id}
                                className="flex items-center justify-between mb-4 border-b pb-4 last:border-b-0"
                            >
                                <div className="flex items-center">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-16 h-16 object-contain mr-4 rounded"
                                    />
                                    <div>
                                        <h3 className="font-semibold text-gray-800 line-clamp-1 w-40">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-600">${item.price}</p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => removeFromCart(item.id)}
                                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition duration-300 text-sm"
                                >
                                    Remove
                                </button>
                            </div>
                        ))
                    )}
                </div>


                <div className="p-4 border-t bg-gray-50 flex justify-end">
                    <button
                        onClick={onClose}
                        className="bg-gray-300 text-gray-800 px-6 py-2 rounded hover:bg-gray-400 transition duration-300"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartModal;
