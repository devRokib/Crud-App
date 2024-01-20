// EditItem.js
import React, { useState, useEffect } from 'react';

const EditItem = ({ item, handleUpdate, handleCancel }) => {
  const [name, setName] = useState(item.name);
  const [price, setPrice] = useState(item.price);

  useEffect(() => {
    setName(item.name);
    setPrice(item.price);
  }, [item]);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdate(item.id, { name, price: parseFloat(price) });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
      <button type="submit">Update</button>
      <button type="button" onClick={handleCancel}>Cancel</button>
    </form>
  );
};

export default EditItem;
