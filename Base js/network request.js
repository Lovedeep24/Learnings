// --------------------------------------USING .then AND .catch -------------------------------------------
// const endpoint="http://localhost:3000/comments";
// fetch(endpoint)
// .then((response)=>{
//     console.log(response);
//     console.log("inside then");
//     if(!response.ok)
//     {
//     throw new Error(`Something went wrnog : ${response.status}`);
//     }
//     return response.json()
// }).then((data)=>{
//     console.log(data);
// })
// .catch((error)=>{
//     console.log("inside catch");
//     console.log(`Error: ${error.message}`);

// })

// ----------------------------------------------   USING async await -------------------------------
const endpoint="http://localhost:3000/todos";
// async function getTodo(){
//     try {
//     const response=await fetch(endpoint);
//     if(!response.ok)
//     {
//         throw new Error(response.status);
//     }
//     let data= await response.json();
//     console.log(data);
//     } catch (error) {
//         console.log(`ERROR :${error.message}`);
//     }
   
// }
// getTodo();

// ------POST REQUEST-------
fetch(endpoint,{
    method: "POST",
    body: JSON.stringify({
        id:3,
        name: "Task C",
        state: true,
    }),
    headers:{
        "Content-type": "application/json",
    },
})
.then((response)=>{
    console.log(response);
    return response.json();
}).then((json)=>{
    console.log(json);
})