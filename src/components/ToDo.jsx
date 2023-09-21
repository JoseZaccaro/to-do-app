import React from 'react'

const ToDo = ({ texto, handleInput, handleDelete, _id, done }) => {

    return (
        <div className="min-w-[10rem] border border-cyan-400 p-4 rounded-lg flex justify-between">
            <button onClick={() => handleDelete(_id)} className="rounded-full bg-red-500 p-4 w-8 h-8 flex items-center justify-center text-white">X</button>
            <span style={done ? { color: 'red', textDecoration: 'line-through' } : { color: 'green' }} className="text-white text-2xl px-4">{texto}</span>
            <input type="checkbox" checked={done} onChange={(e) => handleInput(_id, e.target.checked)} />
        </div>)
}

export default ToDo