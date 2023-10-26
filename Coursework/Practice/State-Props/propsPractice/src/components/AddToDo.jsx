import { useState,useEffect } from "react"

export default function AddToDo({setTodos}){
  const [title, setTitle] = useState('');
  // const [priority, setPriority] = useState(0);
  // const [done, setDone] = useState(false);
  
  async function handleSubmit(event){
    event.preventDefault();

    const newToDo = {
      title: title,
      // priority: priority,
      // done: done,
    }

    setTodos((prevToDos) => [...prevToDos, newToDo])

    setTitle('')
    // setPriority(0)
    // setDone(false)
  }

  return(
    <>
      <h1>Add ToDo Form</h1>
      <form onSubmit={handleSubmit} method="POST">
        <label>
          Title: {" "}
          <input type="text" value={title} onChange={(e) => {
            setTitle(e.target.value)
          }}/>
        </label>
        {/* <label>
          Priority: {" "}
          <input type="number" value={priority} onChange={(e) => {
            setPriority(e.target.value)
          }}/>
        </label>
        <label>
          IsDone?: {" "}
          <input type="text" value={done} onChange={(e) => {
            setDone(e.target.value)
          }}/>
        </label> */}
        <button type="submit">Submit</button>
      </form>
    </>
  )
}