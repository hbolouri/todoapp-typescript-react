import React, {useState, ChangeEvent, MouseEvent, MouseEventHandler, RefObject, MutableRefObject} from 'react';
import './App.css';
import {TodoItemType} from "./interfaces"
import {v4 as uuid} from "uuid"
import TodoContainer from './TodoContainer';
import ToDoneContainer from './ToDoneContainer';
import { useRef } from 'react';

function App() {
  const [todoList, setTodoList]=useState<TodoItemType[]>([])
  const [inpValue, setInpValue]=useState<string>("")

  const handleChange=(e:ChangeEvent<HTMLInputElement>)=>{
      setInpValue(e.target.value)
  }

  const inputRef = useRef<HTMLInputElement | null>(null)

  const addTask: MouseEventHandler =(e:MouseEvent<HTMLButtonElement | HTMLAnchorElement>)=>{

    if(inpValue.trim()!==""){
      const task = {id:uuid() , text: inpValue, done:false}
      setTodoList([...todoList, task])
      setInpValue("")
    } else {
      alert("please enter text in input field")
    }
    
  }
  
//delete todo task

const deleteTask = (id:string) => {
  setTodoList(todoList.filter(task=>task.id!==id))
}

  //updating task status
  const updateTask=(id:string)=>{
    /*   setTodoList(todoList.map((task)=>task.id===id?{...task,done:!task.done}:task)) 
       */
      setTodoList(todoList.map(item=>{
        if(item.id===id){
          item.done= !item.done
          return item
        }else{
          return item
        }
      }))
  /*     let updatedTasks = todoList.map(item=>{
        if(item.id===id){
          item.done= !item.done
          return item
        }else{
          return item
        }
      })
      setTodoList(updatedTasks)  */
    }

  const toDos:TodoItemType[] = todoList.filter(item=>!item.done)  
  const todones:TodoItemType[] = todoList.filter(item=>item.done)  

  return (
    <div className="App">
      <header className="App-header">
        <h1>TODO APP</h1>
        <div>
          <input type="text" name="task" onChange={handleChange} value={inpValue} />
          <button onClick={addTask}>Add Task</button>
        </div>
      </header>
      <section className="List">
        <TodoContainer toDos={toDos} deleteTask={deleteTask} updateTask={updateTask} />

        <ToDoneContainer todones={todones} deleteTask={deleteTask} updateTask={updateTask}  />
      </section>
      
      {/* <ul>
        {todoList.map(task=>{
          return (<TodoItem key={task.id} task={task} deleteTask={deleteTask} updateTask={updateTask}/>)
        })}
      </ul> */}
    </div>
  );
}

export default App;
