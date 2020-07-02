import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { NewBoxForm } from './NewBoxForm';
import { Box } from './Box'


export function BoxList() {
  const [boxes, setBoxes] = useState([]);

  const addItem = box => {
    setBoxes((currBoxes) => {
      box.id = uuid();
      box.width = +box.width;
      box.height = +box.height;
      const totalBox = [...currBoxes, box];
      return totalBox;
    })
  }

  const deleteItem = id => {
    setBoxes(currBoxes => currBoxes.filter(el => el.id !== id));
  }


  return (
    <div>
      <NewBoxForm addItem={addItem} />
      {boxes
        .map(({ backgroundColor, height, width, id}) =>
          <Box key={id} id={id} style={{ backgroundColor, height, width }} deleteItem={deleteItem}/>
        )}
    </div>
  )
}


