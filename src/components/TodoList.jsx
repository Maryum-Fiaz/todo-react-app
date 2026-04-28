
import { useItemName } from '../context/todoContext'

export default function TodoList() {

    const { itemName } = useItemName();


  return (
    <>
    
        <ul className='w-full'>
            {itemName.map(({id, name}) => (
            <li key={id} className='flex justify-between mb-2 p-2 bg-pink-300 w-full rounded-lg'>
                <div className='font-semibold flex gap-3 items-center'>
                <input type="checkbox" name="" id="" />
                <span>{name}</span>
                </div>

                <div className='font-semibold flex gap-2'>
                    <button className='p-2 bg-olive-300 rounded cursor-pointer hover:bg-olive-400'>✏</button>
                    <button className='p-2 bg-olive-300 rounded cursor-pointer hover:bg-olive-400'>❌</button>
                </div>
            </li>
            ))}
        </ul>
    </>
  )
}
