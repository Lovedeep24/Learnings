import { useReducer } from "react"
import Todos from "./Todos";
function reducer(todos,action){
    if(action.type === "DELETE"){
       return todos.filter(todo=> todo.id !== action.payload.id);
    }
 return todos;
}
const initialTodo=[
    {id:"1", title:"Task A",completed:false},
    {id:"2", title:"Task B",completed:true},
    {id:"3", title:"Task C",completed:false}
];

export default function TodoApp() {
    const [todos,dispatch]= useReducer(reducer,initialTodo)
  return (
    <div>
      <Todos todos={todos} dispatch={dispatch}/>
    </div>
  )
}
