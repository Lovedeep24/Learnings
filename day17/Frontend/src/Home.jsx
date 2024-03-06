import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
    const[ todos,setTodo]=useState([]);

    useEffect(()=>{
        fetchTodos();
    },[]);

    async function fetchTodos(){
        console.log("fetch todos");
        const response = await axios.get("http://localhost:8000/api/v1/todos");
        const data=response.data;
        setTodo(data);
    }
    //To delete
    async function handleDelete(id){
        const deleteUrl=`http://localhost:8000/api/v1/todos/${id}`;
        await axios.delete(deleteUrl);
        fetchTodos();
    }

    async function toggleCompleted(id,completed){
        const patchUrl=`http://localhost:8000/api/v1/todos/${id}`;
        await axios.patch(patchUrl,{completed : !completed});
        
        fetchTodos();
    }
  return (
<div>
      {todos.map((todo)=>(
        <div key={todo.id}>
        <p>{todo.title}</p>
        <p>
            <button onClick={()=>handleDelete(todo.id)} id="Delete">Delete</button>
            <button onClick={()=>toggleCompleted(todo.id,todo.completed)}>Update todo</button>
        </p>
        </div>
      ))}
</div>
  );
}


