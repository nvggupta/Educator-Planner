import React, { useState } from 'react';

function Input({ onAddItems }) {
  const [subject, setSubject] = useState("");
  const [hours, setHours] = useState('');

  const getSubject = (e) => {
    setSubject(e.target.value);
  };
  
  const getHours = (e) => {
    setHours(e.target.value);
  };

  const getData = () => {
    onAddItems(subject, hours);
    setHours("");
    setSubject("");
  };

  return (
    <div className="flex flex-col items-center space-y-2 mb-4">
      <input 
        type='text' 
        placeholder='Subject' 
        value={subject} 
        onChange={getSubject} 
        className="border p-2 rounded-md w-64" required
      />
      <input 
        type='number' 
        placeholder='Hours' 
        value={hours} 
        onChange={getHours} 
        className="border p-2 rounded-md w-64" required
      />
      <button 
        onClick={getData} 
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        Add
      </button>
    </div>
  );
}

export default Input;
