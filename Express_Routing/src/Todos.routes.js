const express=require("express");
const router=express.Router();
const { router } = require("json-server");

// const{
//     getAllGuitars,
//     getSingleGuitar,
// }=require("./guitars.controller");
// const router=express.Router();
// router.route("/").get((res,req)=>{
//     res.json("Hello from the guitar route");
// });

// router.route("/:id").get((res,req)=>{
//     const id = req.params.id;
//     res.json(`Trying to get guitar with id:${id}`);
// });
router.route("/").get(getAllTodos).post(createTodo)

router.route("/:id").get(getSingleTodo).patch(updateTodo).delete(deleteTodo);
router.route("/")
module.exports=router;