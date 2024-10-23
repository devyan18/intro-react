import { useState, useEffect } from "react"
import { Button } from "./components/Button"
import { Form } from "./components/Form"

const URL = "https://jsonplaceholder.typicode.com/todos"

const getAllTodos = async () => {
  const respuesta = await fetch(URL)
  const datos = await respuesta.json()

  return datos
}


function App() {

  const [ todos, setTodos ] = useState([])

  // uef
  useEffect(() => {
    getAllTodos()
      .then(datos => {
        setTodos(datos)
      })
  }, []);
  
  return (
    <div>
      <h1>Hola mundo</h1>
      <Form />

      <Button text="My Button" />
      <Button isPrimary />

      <ul>
        { 
          todos.map((todo, index) => {
            return <li key={index}>{todo.title}</li>
          })
        }
      </ul>

    </div>
  )
}

export default App
