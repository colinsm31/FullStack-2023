import { useState } from 'react'
import ToDoList from './components/ToDoList'
import ToDo from './components/ToDo'
import AddToDo from './components/AddToDo'
import './App.css'

const dummyToDos = [
  {
    title: 'My first todo',
    priority: 1, 
    done: false
  },
  {
    title: 'My second todo',
    priority: 2, 
    done: true
  },
  {
    title: 'My third todo',
    priority: 3, 
    done: false
  },
]

function App() {
  const [todos, setTodos] = useState([])

  return (
    <>
      <div>
        {/* The prop is todoList -> our empty array 'todos' */}
        <ToDoList toDoList={todos}/>
      </div>
      <div>
        <AddToDo setTodos={setTodos}/>
      </div>
    </>
  )
}

export default App
