import { useState } from "react";

function TodoInput() {

    const [item, setItem] = useState('');


    console.log('render...');
    

  return (
    <>
      <div className="mb-4">
        <input
          type="text"
          name=""
          value={item}
          onChange={(e) => setItem(e.target.value)}
          className="outline-none border border-olive-700 rounded-l-lg p-1 min-w-2xl focus:border-olive-800"
          placeholder="Enter your item..."
        />
        <button className="bg-olive-700 border border-olive-700 text-amber-200 font-bold px-3 py-1 rounded-r-lg cursor-pointer hover:bg-olive-800 hover:border-olive-800 transition-all">
          Add
        </button>
      </div>
    </>
  );
}

export default TodoInput;
