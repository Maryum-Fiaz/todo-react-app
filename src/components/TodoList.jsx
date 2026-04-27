import React from 'react'
import { useItemName } from '../context/todoContext'

export default function TodoList() {

    const { itemName } = useItemName();
  return (
    <>
    <div className='p-2 bg-pink-300 w-full rounded-lg'>
        <ul>
            <li className='flex justify-between'>
                <div className='font-semibold flex gap-3 items-center'>
                <input type="checkbox" name="" id="" />
                <span>{itemName}</span>
                </div>

                <div className='font-semibold flex gap-2'>
                    <button className='p-2 bg-olive-300 rounded cursor-pointer hover:bg-olive-400'>✏</button>
                    <button className='p-2 bg-olive-300 rounded cursor-pointer hover:bg-olive-400'>❌</button>
                </div>
            </li>
        </ul>
    </div>
    </>
  )
}
