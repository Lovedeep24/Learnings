 import foodPromise from "./my promises.js";

console.log("Script starting");

foodPromise()
    .then((value)=>{
    console.log(value);
})
.catch((errorValue)=>{
    console.log(errorValue);
})

console.log("script end");