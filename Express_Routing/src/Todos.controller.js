// function getAllTodo(req,res){
//     res.json("Hello from guitars route");
// }

// function getSingleGuitar(req,res){
//     const id=req.params.id;
//     res.json(`Trying to get guitar with id ${id}`);
// }
// module.exports={getAllGuitars,getSingleGuitar};

function getAllTodos(req,res){
    res.json("get all todo");
}

function createTodo(res,req){
    res.json("creating todo...")
}

function getSingleTodo(res,req){
    const id=req.params.id;
    res.json(`Todo displayed for id:${id}`);

}

function updateTodo(res,req){
    const id=req.params.id;
    res.json(`Get:${id}`);
}

function deleteTodo(res,req){
    const id=req.params.id;
    res.json(`Delete : ${id}`);
}

module.exports(getAllTodos,getSingleTodo,deleteTodo,updateTodo,createTodo);