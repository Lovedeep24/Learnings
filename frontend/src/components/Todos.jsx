import React, { useState } from 'react'
import { useEffect } from 'react';
import axios from "axios";
const endpoint="http://localhost:7000/api/todo";
export default function Todos() {
    const[todo,setTodo]=useState([]);
    async function fetchTodo(){
       const response=await axios.get(endpoint);
        setTodo(response.data);
    }
    useEffect(()=>{
        fetchTodo();
    },[])
 return(
    <div>
        {todo.map((todos) =>(
            <div key={todos.id}>
                <p>{todo.title}</p>
            </div>
        ))}
    </div>
 )
}