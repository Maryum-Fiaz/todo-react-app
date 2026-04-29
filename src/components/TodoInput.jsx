import { useState } from "react";
import { useItemName } from "../context/todoContext.js";

function TodoInput() {
  const { itemName, setItemName } = useItemName();
  const [localText, setLocalText] = useState("");

  const addingToList = () => {
    if (!localText.trim()) return;

    const newItemObj = {
      id: Date.now(),
      name: localText,
      completed: false,
      isEditing: false,
    };
    setItemName([...itemName, newItemObj]);
    setLocalText("");
  };

  console.log("render...", itemName);
  return (
    <>
      <div className="mb-4">
        <input
          type="text"
          name=""
          value={localText}
          onChange={(e) => setLocalText(e.target.value)}
          className="outline-none border border-olive-700 rounded-l-lg p-1 min-w-2xl focus:border-olive-800"
          placeholder="Enter your item..."
        />
        <button
          className="bg-olive-700 border border-olive-700 text-amber-200 font-bold px-3 py-1 rounded-r-lg cursor-pointer hover:bg-olive-800 hover:border-olive-800 transition-all"
          onClick={() => addingToList()}
        >
          Add
        </button>
      </div>
    </>
  );
}

export default TodoInput;
