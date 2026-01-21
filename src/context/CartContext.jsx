import React, { createContext, useState, useContext, useEffect, useMemo } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        try {
            const savedCart = localStorage.getItem('cart');
            return savedCart ? JSON.parse(savedCart) : [];
        } catch (e) {
            console.error("Failed to load cart from local storage", e);
            return [];
        }
    });

    // Save cart to local storage whenever it changes
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find((item) => item.id === product.id);
            if (existingItem) {
                // If item exists, just return the previous cart (user can increase quantity in cart page)
                // Or if requirement says "Add to cart" adds 1 quantity:
                return prevCart.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                return [...prevCart, { ...product, quantity: 1 }];
            }
        });
    };

    const removeFromCart = (id) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    };

    const updateQuantity = (id, change) => {
        setCart((prevCart) =>
            prevCart.map((item) => {
                if (item.id === id) {
                    const newQuantity = item.quantity + change;
                    return newQuantity > 0 ? { ...item, quantity: newQuantity } : item;
                }
                return item;
            })
        );
    };

    const clearCart = () => {
        setCart([]);
    };

    const { totalPrice, discount, finalPrice, totalQuantity } = useMemo(() => {
        const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
        const disc = total * 0.10; // 10% discount
        const final = total - disc;
        const qty = cart.reduce((acc, item) => acc + item.quantity, 0);
        return {
            totalPrice: total,
            discount: disc,
            finalPrice: final,
            totalQuantity: qty,
        };
    }, [cart]);

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                removeFromCart,
                updateQuantity,
                clearCart,
                totalPrice,
                discount,
                finalPrice,
                totalQuantity,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
