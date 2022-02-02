import React from 'react';
import {TodoItemType} from "./interfaces"
type Props= {
    task:TodoItemType,
    deleteTask: (id:string)=>void,
    updateTask: (id:string)=>void

}


export default function TodoItem( props: Props) {
        const {task,deleteTask,updateTask} = props

        return <div>
                <li style={{backgroundColor:task.done?"green":"gray" }}>{task.text}
                    <div>
                        <button style={{backgroundColor:"green"}} onClick={()=>updateTask(task.id)} >done</button>
                        <button style={{backgroundColor:"orange"}}onClick={()=>deleteTask(task.id)}>delete</button> 
                        
                    </div>
                </li>
                </div>;
}
