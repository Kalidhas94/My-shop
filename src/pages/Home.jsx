import React, { useState, useEffect } from 'react';
import ProductList from '../components/ProductList';

const Home = () => {
    const [products, setProducts] = useState([]);
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

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen bg-gray-50">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-indigo-600"></div>
            </div>
        );
    }

    return (
        <div className=" min-h-screen py-8">
            <div className="container mx-auto px-4">
                <h1 className="text-3xl font-bold text-white mb-8 text-center">Featured Products</h1>
                <ProductList products={products} />
            </div>
        </div>
    );
};

export default Home;
