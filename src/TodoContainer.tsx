import React from 'react';
import { TodoItemType } from './interfaces';
import TodoItem from './TodoItem';

interface PropsData {
    toDos: TodoItemType[],
    deleteTask: (id:string)=>void,
    updateTask: (id:string)=>void
}

export default function TodoContainer({toDos, deleteTask, updateTask} : PropsData) {
  return <div>
      <h1>ToDo Tasks </h1>
         <ul>
        {toDos.map(task=>{
          return (<TodoItem key={task.id} task={task} deleteTask={deleteTask} updateTask={updateTask}/>)
        })}
        </ul> 
  
  </div>;
}
