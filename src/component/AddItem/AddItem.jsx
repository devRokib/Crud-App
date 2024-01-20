// AddItem.js
import React, { useState } from 'react';

const AddItem = ({ handleAdd }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [error,setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!name.trim() || !price.trim()){
      setError('Please fill out all filed')
      return ;
    }
    const newItem = { name, price: parseFloat(price) };
    const existingItemJSON = localStorage.getItem('items');
    const existingItem =existingItemJSON?JSON.parse(existingItemJSON):[]
    const updatedItem = [...existingItem,newItem]
    localStorage.setItem('items',JSON.stringify(updatedItem))

    handleAdd(newItem)

    setName('');
    setPrice('');
    setError('')
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Item Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
      <button className='addItem' type="submit">Add Item</button>
      {error&&<p style={{color:'red'}}>{error}</p>}
    </form>
  );
};

export default AddItem;
