import React, { useState } from 'react'

function Items({name , hours}) {

  let [count , setCount] = useState(Number(hours));
  const increament = ()=>{
      setCount((prev) => count = prev+1 );
  }
  const decreament = ()=>{
    setCount((prev)=>count = prev-1);
  } 
  return (
    <>
        <li className='flex gap-10'>
            <div>{`${name} - ${count} Hours`}</div>
            <button onClick={increament}>Add</button>
            <button onClick={decreament}>Sub</button>
        </li>
    </>
  )
}

export default Items