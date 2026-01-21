import React from 'react';

const Navbar = ({ cartCount, toggleModal }) => {
    return (
        <nav className="bg-gradient-to-b from-indigo-400 to-pink-300 text-slate-700 p-4 shadow-md sticky top-0 z-50">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold">My Shop</h1>
                <button
                    onClick={toggleModal}
                    className="bg-white text-slate-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition duration-300 relative"
                >
                    Cart
                    {cartCount > 0 && (
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                            {cartCount}
                        </span>
                    )}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
