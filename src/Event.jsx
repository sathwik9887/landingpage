import { useState } from "react";

function Event() {
    let [name, setName] = useState('');
    let [quantity, setQuantity] = useState(1);
    let [text, setText] = useState('');
    let [payment, setPayment] = useState('Visa');
    let [delivery, setDelivery] = useState('Pick up');

    function updateName(e) {
        setName(e.target.value);
    }

    function updateQuantity(e) {
        setQuantity(e.target.value);
    }

    function updateText(e) {
        setText(e.target.value);
    }

    function updatePayment(e) {
        setPayment(e.target.value);
    }

    function updateDelivery(e) {
        setDelivery(e.target.value);
    }

    return (
        <div>
            <input 
                type="text" 
                value={name} 
                onChange={updateName} 
                placeholder="Enter your name" 
                className="border border-gray-300 p-2 mt-4 rounded"
            />
            <p>Name: {name}</p>

            <input 
                type="text" 
                value={quantity} 
                onChange={updateQuantity} 
                placeholder="Enter the Quantity" 
                className="border border-gray-300 p-2 mt-3 rounded"
            />
            <p>Quantity: {quantity}</p>

            <textarea
                value={text}
                onChange={updateText}
                placeholder="Something here.."
                className="border border-gray-300 p-2 mt-3 rounded w-full h-32"
            />
            <p>Notes: {text}</p>

            <select value={payment} onChange={updatePayment} className="border border-gray-300 p-2 rounded mt-3">
                <option value="Visa">Visa</option>
                <option value="MasterCard">MasterCard</option>
                <option value="PayPal">PayPal</option>
            </select>
            <p>Payment: {payment}</p>

            <div className="mt-3">
                <label>
                    <input 
                        type="radio" 
                        value="Pick up" 
                        onChange={updateDelivery} 
                        checked={delivery === "Pick up"} 
                        className="mr-2"
                    />
                    Pick Up
                </label>

                <label className="ml-4">
                    <input 
                        type="radio" 
                        value="Delivery" 
                        onChange={updateDelivery} 
                        checked={delivery === "Delivery"} 
                        className="mr-2"
                    />
                    Delivery
                </label>
            </div>

            <p>Shipping: {delivery}</p>
        </div>
    );
}

export default Event;
