import React from 'react';
import Items from './Items';

function ItemsList({ transferData }) {
  console.log(transferData);
  return (
    <div className="mt-4">
      <ul className="space-y-2">
        {transferData.map((elem, index) => (
          <Items key={index} name={elem.subject} hours={elem.hours} />
        ))}
      </ul>
    </div>
  );
}

export default ItemsList;
