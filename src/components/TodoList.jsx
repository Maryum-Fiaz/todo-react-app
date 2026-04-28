import { useState } from "react";
import { useItemName } from "../context/todoContext";

export default function TodoList() {
  const { itemName, setItemName } = useItemName();

  // checked item

    const handleCompleted = (id) => {
        setItemName(prev => 
            prev.map(item => item.id === id ? {...item, completed : !item.completed} : item)
        )
    }

    // delete item
  const delItem = (id) => {
   const newItemName = itemName.filter(i => i.id !== id)
   setItemName(newItemName)

  }

  // edit item
  const editItem = () => {
    // don't code this...!!!
  }

  return (
    <>
      <ul className="w-full">
        {itemName.map(({ id, name, completed }) => (
            
          <li
            key={id}
            className={`flex justify-between mb-2 p-2 ${completed ? 'bg-lime-300' : 'bg-pink-300'} w-full rounded-lg`}
          >
            <div className="font-semibold flex gap-3 items-center">
              <input type="checkbox" name="" id="" checked={completed} 
              onChange={() => handleCompleted(id)}
              />
              <span className={completed ? 'line-through' : ''}>{name}</span>
            </div>

            <div className="font-semibold flex gap-2">
              <button id={id} className="p-2 bg-olive-300 rounded cursor-pointer hover:bg-olive-400"
              onClick={() => editItem()}
              >
                ✏
              </button>
              <button className="p-2 bg-olive-300 rounded cursor-pointer hover:bg-olive-400"
              onClick={() => delItem(id)}
              >
                ❌
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
