import { useState } from "react";

function Component() {
    let [count, setCount] = useState(0);

    const inc = () => {
        setCount(count + 1);
    }

    const res = () => {
        setCount(0);
    }

    const dec = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-6 w-64 text-center">
                <p className="text-4xl font-bold mb-4">{count}</p>
                <div className="flex justify-between">
                    <button 
                        onClick={dec} 
                        className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300"
                    >
                        -
                    </button>
                    <button 
                        onClick={res} 
                        className="bg-gray-300 text-black px-4 py-2 rounded-lg hover:bg-gray-400 transition duration-300"
                    >
                        Reset
                    </button>
                    <button 
                        onClick={inc} 
                        className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300"
                    >
                        +
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Component;
