const express = require("express");
const Todos = require("./db.json");
const fs = require("fs");
const cors=require("cors");

const app = express();
const port = 8000;

app.use(cors());//Middleware
app.use(express.json());//Middleware--->internally calls next functions

//Home page
app.get("/",(res,req)=>{
    res.json({message:"This is a home page"});
});

//To print all todos
app.get("/api/v1/todos",(res,req)=>{
    res.json({message:"This is the list of todos"});
});

//To print single todo
app.get("/api/v1/todos/:id",(res,req)=>{
    const id=req.params.id;
    const Todo=Todos.find((todo)=>{todo.id === id});
    if(Todo)
    {
        res.status(200).json(Todo);
    }
    else{
        res.status(404).josn({message:`No todo found with such id:${id}`});
    }
});

//Add new Todo
app.post("/api/v1/todo",(res,req)=>{
    if(!("title" in req.body)){
        res.status(400).json("Kindly give the titile to Your todo");
    }else if(!("status" in req.body)){
        res.status(400).json("Kindly assign the status of Your todo");
    }
    else {
        const id=Todos.length+1;
        const newTodo={
            id:id.toString(),
            title:req.body.title,
            status:req.body.status
        };
        Todos.push(newTodo);
    fs.writeFile("db.json",JSON.stringify(Todos),"utf-8",(err)=>{
        if(err){
            res.status(404).json(`Some internal server error`);
        }
        else{
            res.status(201).json(newTodo);
        }
    });
    }
});


//Update
app.patch("api/v1/todo/:id",(res,req)=>{
    const id=req.params.id;
    const todo= Todos.find((todo)=>{todo.id === id});
    if(todo){
        const newTodo={
            ...todo,
            title:"title" in req.body ? req.body.title : todo.title,
            status:"status" in req.body ? req.body.status : todo.status,
        };
        const updatedTodo=Todos.map((todo)=>
        {
        if(todo.id === id)
        {
            return newTodo;
        }
        else
        {
            return todo;
        }
        })
    
    
    fs.writeFile("db.json",JSON.stringify(updatedTodo),"utf-8",(err)=>{
        if(err){
            res.status(500).json({message:"Internal server error"});
        }
        else{
            res.status(201).json(newTodo);
        }
    });
}
    else{
        res.status(404).json({message:`No Such todo found with is ${id}`});
    }
});

//delete
app.delete("/api/v1/todos/:id",(res,req)=>{
    const id=req.params.id;
    const todo=Todos.find((todo)=> todo.id === id);
    if(todo){
        const updatedTodo=todos.filter((todo)=> todo.id !== id);
     fs.writeFile("db.json", JSON.stringify(updatedTodo), "utf-8", (err) => {
        if (err) {
          res.status(500).json({ message: "internal server error" });
        } else {
          res.status(200).json({ message: `Todo deleted with id ${id}` });
        }
      });
    } 
}
  );
  app.listen(port, () => {
    console.log(`App is running on the port ${port}`);
  });
