import React from 'react'
import Items from './Items'

function ItemsList({transferData}) {
 
  console.log(transferData);
  return (
    <>
        <ul>
            {transferData.map((elem)=><Items name = {elem.subject} hours = {elem.hours}></Items>)}
        </ul>
    </>
  )
}

export default ItemsList