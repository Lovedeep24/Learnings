import React, { useReducer, useState } from 'react'

// export default function UseReducer() {
//     const [Counter,setCounter]=useState(0);

//     function handleInc(){
//         setCounter(Count=>Count+1);
//     }
//     function handleDec(){
//         setCounter(Count=>Count-1);
//     }
//     function handleReset(){
//         setCounter(0);
//     }
//   return (
//     <div>
//         <h1>{Counter}</h1>
//       <button onClick={handleInc}>Increase</button>
//       <button onClick={handleDec}>Decrease</button>
//       <button onClick={handleReset}>Reset</button>
//     </div>
//   )
// }

// -----------------------------DOING SAME WORK USING USEREDUCER-----------------------------------------------------------------------

function reducer(count,action){
    if(action.type === "INCREASE"){
        return count+1;
    }
    if(action.type === "DECREASE"){
        return count-1;
    }
    if(action.type === "RESET"){
        return 0;
    }
    return count;
}

export default function UseReducer(){
const[count,dispatch]=useReducer(reducer,0);
    return(
        <div>
        <h1>{count}</h1>
        <button onClick={()=>dispatch({ type:"INCREASE"})}>Increase</button>
        <button onClick={()=>dispatch({ type:"DECREASE"})}>Decrease</button>
        <button onClick={()=>dispatch({ type:"RESET"})}>Reset</button>
        </div>
    );
}