import { useEffect, useRef, useState } from 'react';
import ToDo from './components/ToDo';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';


function App() {
  const [toDos, setToDos] = useState([])
  const inputText = useRef();
  const getAllToDos = async function () {
    try {
      const { data } = await axios.get('https://06qmmpn9-8080.brs.devtunnels.ms/todos')
      console.log(data);
      setToDos([...toDos, ...data.todos])
    } catch (error) {
      console.error(error);
    }
  }


  useEffect(() => {
    getAllToDos()
  }, [])





  async function addToDo(texto) {
    // setToDos([...toDos, { texto, _id: uuidv4(), done: false }])
    try {
      const { data } = await axios.post('https://06qmmpn9-8080.brs.devtunnels.ms/todos', { texto })
      console.log(data);
      setToDos([...toDos, data.todo])
    } catch (error) {
      console.error(error);
    }

  }

  async function removeToDo(id) {
    // TODO: Eliminar el ToDo que coincida con el id
    try {
      const { data } = await axios.delete(`https://06qmmpn9-8080.brs.devtunnels.ms/todos/${id}`)
      console.log(data);
      if (data.success) {
        const arraySinToDo = toDos.filter(toDo => toDo._id !== id)
        setToDos(arraySinToDo)
      }
    } catch (error) {
      console.error(error);
    }

  }
  async function updateToDo(id, checkeado) {
    // TODO: Buscar el ToDo por el id y Actualizarlo

    try {
      const { data } = await axios.put(`https://06qmmpn9-8080.brs.devtunnels.ms/todos/${id}`, {
        done: checkeado
      })
      console.log(data);
      if (data.success) {
        const arrayConToDoActualizado = toDos.map(toDo => {
          if (toDo._id === id) {
            toDo.done = checkeado
          }
          return toDo
        })

        setToDos(arrayConToDoActualizado)
      }
    } catch (error) {
      console.error(error);
    }
  }

  console.log(toDos);

  function handleAddToDo() {
    const texto = inputText.current.value
    addToDo(texto)
  }

  function handleDeleteToDo(id) {
    removeToDo(id)
  }

  function handleCheck(id, checked) {
    updateToDo(id, checked)
  }

  return (
    <div className='p-16 flex items-center justify-center w-screen min-h-screen bg-[#202020]'>
      <div className="w-full min-h-[80vh] bg-[#505050] rounded-lg p-4">
        <div className="mb-8 w-full flex items-end justify-start p-4 gap-4" >
          <input ref={inputText} type="text" className="min-w-[15vw] bg-transparent border-b p-2 border-b-black text-white text-6xl outline-none" placeholder="Tarea..." />
          <button onClick={handleAddToDo} className="bg-green-500 rounded-xl border-2 border-fuchsia-300 p-4 h-14 ">Agregar</button>
        </div>
        <div className='w-full min-h-[10vh] flex flex-wrap gap-4 items-start'>

          {
            toDos.map(toDo => {
              return (
                <ToDo key={toDo._id} {...toDo} handleInput={handleCheck} handleDelete={handleDeleteToDo} />
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default App
