import React, { useEffect, useRef, useState } from 'react';
import { useCart, useDispatch } from './ContextReducer';

export default function Card(props) {
    let dispatch = useDispatch();
    let data = useCart();
    const priceRef = useRef();
    let options = props.options || {};
    let priceOptions = Object.keys(options);
    let foodItem = props.foodItem; 

    const [qty, setQty] = useState(1);
    const [size, setSize] = useState("");

    let finalPrice = qty * parseInt(options[size] || 0);

    const handleAddtocart = async () => {
        let food = []
        for (const item of data) {
          if (item.id === foodItem._id) {
            food = item;
    
            break;
          }
        }
        if (food !== []) {
          if (food.size === size) {
            await dispatch({ type: "UPDATE", id: foodItem._id, price: finalPrice, qty: qty })
            return
          }
          else if (food.size !== size) {
            await dispatch({ type: "ADD", id: foodItem._id, name: foodItem.name, price: finalPrice, qty: qty, size: size })
            console.log("Size different so simply ADD one more to the list")
            return
          }
          return
        }
    
        await dispatch({ type: "ADD", id: foodItem._id, name: foodItem.name, price: finalPrice, qty: qty, size: size })
    
    
        // setBtnEnable(true)
    
      }
    

    useEffect(() => {
        setSize(priceRef.current.value);
    }, []);

    if (!foodItem) {
        return <div>Loading...</div>; // Handle the case where foodItem is not yet available
    }

    return (
        <div className="card mt-3" style={{ width: "18rem", maxHeight: "360px" }}>
            <img src={foodItem.img} className="card-img-top" alt={foodItem.name} style={{ height: "180px", objectFit: "cover" }} />
            <div className="card-body">
                <h5 className="card-title">{foodItem.name}</h5>
                <div className='container w-100'>
                    <select className='m-2 h-100 bg-success rounded' onChange={(e) => setQty(e.target.value)}>
                        {Array.from(Array(6), (e, i) => {
                            return (
                                <option key={i + 1} value={i + 1}>{i + 1}</option>
                            );
                        })}
                    </select>
                    <select className='m-2 h-100 bg-success rounded' ref={priceRef} onChange={(e) => setSize(e.target.value)}>
                        {priceOptions.map((data) => {
                            return <option key={data} value={data}>{data}</option>;
                        })}
                    </select>
                    <div className='d-inline'>
                        ₹{finalPrice}/-
                    </div>
                    <hr />
                    <button className='btn btn-success justify-centre ms-2' onClick={handleAddtocart}>Add To Cart</button>
                </div>
            </div>
        </div>
    );
}
