import React, { useState } from 'react';


import AddItem from './component/AddItem/AddItem';
import ListItems from './component/ListItems/ListItems';
import EditItem from './component/EditItem/EditItem';
import data from './component/Data/Data';

const App = () => {
  const [items, setItems] = useState(data);
  const [editingItemId, setEditingItemId] = useState(null);

  const handleAdd = (newItem) => {
    setItems([...items, { id: items.length + 1, ...newItem }]);
  };

  const handleEdit = (id) => {
    setEditingItemId(id);
  };

  const handleUpdate = (id, updatedItem) => {
    setItems(items.map((item) => (item.id === id ? { ...item, ...updatedItem } : item)));
    setEditingItemId(null);
  };

  const handleDelete = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const handleCancelEdit = () => {
    setEditingItemId(null);
  };

  return (
    <div className='mainContainer'>
      <h1>CRUD APP</h1>
      {editingItemId === null ? (
        <>
          <AddItem handleAdd={handleAdd} />
          <ListItems items={items} handleEdit={handleEdit} handleDelete={handleDelete} />
          
        </>
      ) : (
        <EditItem
          item={items.find((item) => item.id === editingItemId)}
          handleUpdate={handleUpdate}
          handleCancel={handleCancelEdit}
        />
      )}
    </div>
  );
};

export default App;
