import { TodoItemType } from "./interfaces";
import TodoItem from "./TodoItem";

interface PropsData {
  todones: TodoItemType[];
  deleteTask: (id: string) => void;
  updateTask: (id: string) => void;
}

export default function ToDoneContainer({ todones, deleteTask, updateTask}: PropsData) {
  return (
    <div>
      <h1>Done Tasks</h1>
      <ul>
        {todones.map(task=>{
          return (<TodoItem key={task.id} task={task} deleteTask={deleteTask} updateTask={updateTask}/>)
        })}
        </ul>
    </div>
  );
}
