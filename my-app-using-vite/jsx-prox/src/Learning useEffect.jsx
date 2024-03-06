import { useEffect, useState } from "react"
//1.useeffect w/o any array
//2.useeffrct with an array--[single value] will run only when that single value is called
//3.use effect with empty dependecy array [] will run only once when page is rendered for the first time
//3rd way is used to fetch the data

function Application_useState_n_useeffect(){
    const [curr,nextstate]=useState(1);
    const [curr2,nextstate2]=useState(1);

    useEffect(()=>{
        console.log("Inside use effect");
    },[curr2])

    return(
        <div>
            <h1>Increment</h1>
            <h2>{curr}</h2>
            <button onClick={()=> nextstate((curr)=>curr+1)}>Increase</button>
            <hr/>
            <h1>Increment</h1>
            <h2>{curr2}</h2>
            <button onClick={()=> nextstate2((curr2)=>curr2+1)}>Increase</button>
        </div>
    )

}

export default Application_useState_n_useeffect;