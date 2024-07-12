import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

function Items({ name, hours }) {
  let [count, setCount] = useState(Number(hours));

  const increment = () => {
    setCount(prev => prev + 1);
  };
  
  const decrement = () => {
    setCount(prev => prev - 1);
  };

  return (
    <li className="flex gap-4 items-center">
      <div className="flex-1">{`${name} - ${count} Hours`}</div>
      <button onClick={increment} className="bg-green-500 text-white px-2 py-1 rounded-full">
        <FaPlus />
      </button>
      <button onClick={decrement} className="bg-red-500 text-white px-2 py-1 rounded-full">
        <FaMinus />
      </button>
    </li>
  );
}

export default Items;
