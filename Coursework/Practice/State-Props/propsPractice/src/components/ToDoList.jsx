import { useState,useEffect } from "react"
import ToDo from "./ToDo"

export default function ToDoList({toDoList}){
  console.log(toDoList);

  return(
    <>
      <h1>ToDo List</h1>
      
        {toDoList.map((todo, i) => (
          <div key={i}>
            {console.log(todo.title)}
            <div>
              Item {i+1}: {todo.title}
            </div>
          </div>
        ))}
    </>
  )
}