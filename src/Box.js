import React from 'react';

export function Box({ id, style, deleteItem }) {

  function handleClick() {
    deleteItem(id);
  }

  return (
    <div data-testid={1} key={id}>
      <div style={style}></div>
      <button onClick={handleClick}>X</button>
    </div>
  )
}