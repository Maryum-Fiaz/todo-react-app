import { useState } from "react";
import { useItemName } from "../context/todoContext";

export default function TodoList() {
  const { itemName, setItemName } = useItemName();
  const [tempName, setTempName] = useState("");

  // checked item

  const handleCompleted = (id) => {
    setItemName((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item,
      ),
    );
  };

  // delete item
  const delItem = (id) => {
    setItemName((prev) => prev.filter((item) => item.id !== id));
  };

  // edit item
  const editItem = (id) => {


    const itemToFind = itemName.find(i => i.id === id)

    if(itemToFind) {
      setTempName(itemToFind.name)

      setItemName(prev => 
        prev.map(item => 
          item.id === id ? {...item, isEditing: !item.isEditing} : item
        )
      )
    }
  };

  const savedEditItem = (id, tempName) => {
    setItemName((current) => 
    current.map(item => 
      item.id === id ? {...item, name: tempName, isEditing: false} : item
    ))
  }

  return (
    <>
      <ul className="w-full">
        {itemName.map(({ id, name, completed, isEditing }) => (
          <li
            key={id}
            className={`flex justify-between mb-2 p-2 ${completed ? "bg-lime-300" : "bg-pink-300"} w-full rounded-lg`}
          >
            <div className="font-semibold flex gap-3 items-center">
              <input
                type="checkbox"
                name=""
                id=""
                checked={completed}
                onChange={() => handleCompleted(id)}
              />
              {isEditing ? (
                <input type="text" className="outline-none" value={tempName} onChange={(e) => setTempName(e.target.value)} />
              ) : (
                <span className={completed ? "line-through" : ""}>{name}</span>
              )}
            </div>

            <div className="font-semibold flex gap-2">
              
              {isEditing ? (
                <button
                id={id}
                className="p-2 bg-olive-300 rounded cursor-pointer hover:bg-olive-400"
                onClick={() => savedEditItem(id, tempName)}
              >
                📂
              </button>
              ) : (

              <button
                id={id}
                className="p-2 bg-olive-300 rounded cursor-pointer hover:bg-olive-400"
                onClick={() => editItem(id)}
              >
                ✏
              </button>
              )}
              <button
                className="p-2 bg-olive-300 rounded cursor-pointer hover:bg-olive-400"
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
