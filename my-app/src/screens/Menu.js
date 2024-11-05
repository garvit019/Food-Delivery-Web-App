import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Menu() {
    const [foodItems, setFoodItems] = useState([]);

    const fetchFoodItems = async () => {
        try {
            const response = await fetch('http://localhost:4000/api/fooddata');
            const data = await response.json();
            setFoodItems(data);
        } catch (error) {
            console.error('Error fetching food items:', error);
        }
    };

    useEffect(() => {
        fetchFoodItems();
    }, []);

    return (
        <div className="container">
            <h2 className="my-4">Menu</h2>
            <div className="row">
                {foodItems.map((item) => (
                    <div className="col-md-4" key={item._id}>
                        <div className="card mb-4">
                            <img src={item.img} className="card-img-top" alt={item.name} />
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <p className="card-text">{item.description}</p>
                                <p className="card-text">Price: ₹{item.price}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <Link to="/" className="btn btn-primary mt-3">Back to Home</Link>
        </div>
    );
}
