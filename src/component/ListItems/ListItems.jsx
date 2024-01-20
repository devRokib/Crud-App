// ListItems.js
import React from 'react';

const ListItems = ({ items, handleEdit, handleDelete }) => {
  return (
    <table>
     <tbody>
     {items.map((item) => (
        <td key={item.id}>
          {item.name} - ${item.price}
          <div className="btn">
          <button className='editBtn' onClick={() => handleEdit(item.id)}>Edit</button>
          <button className='deleteBtn' onClick={() => handleDelete(item.id)}>Delete</button>
          </div>
        </td>
      ))}
     </tbody>
    </table>
  );
};

export default ListItems;

