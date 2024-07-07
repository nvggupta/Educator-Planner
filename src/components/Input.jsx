

import React, { useState } from 'react'

function Input({onAddItems}) {
  
  const [subject , setSubject] = useState("");
  const [hours , setHours] = useState('');
  const getSubject = (e) =>{
    setSubject(e.target.value);
  }
  const getHours = (e) =>{
    setHours(e.target.value);
  }
  const getData =() =>{

       onAddItems(subject , hours);
       setHours("");
       setSubject("")
  }
  return (
    <>
        <input type='text' placeholder='Subject' value={subject} onChange={getSubject}></input>
        <input type='number' placeholder='hours' value={hours} onChange={getHours}></input>
        <button  onClick={getData}>Add</button>
    </>
  )
}

export default Input