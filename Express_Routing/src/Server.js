const express=require("express");
require("dotenv").config();
const todoRouter=require("./Todos.routes")
const port=process.env.PORT || 8080;
// const app= express();
// const guitarsRouter= require("./routes/guitars.routes");
// const port=8000;

// app.use("/guitars",guitarsRouter);

// app.listen(port,()=>{
//     console.log(`app is running on port ${port}`);
// });

const app=express();

app.listen(port,()=>{
    console.log(`App is running on port ${port}`);
});