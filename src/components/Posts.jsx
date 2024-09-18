import { useState, useEffect } from "react";
import React from 'react';
import axios from 'axios'; 

const Posts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('https://fakestoreapi.com/products'); 
                setProducts(response.data); 
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchPosts();
    }, []);

    if (loading) {
        return <div>Loading ...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h1>Products</h1>
            <ul>
                {products.map((product, index) => (
                    <li key={index}>
                        <h2>{product.title}</h2>
                        <p>{product.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Posts;
