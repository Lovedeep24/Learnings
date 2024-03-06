import { useEffect,useState } from "react";
const endpoint="https://jsonplaceholder.typicode.com/users";

function DataFetch(){
    const [Users,userList]= useState([]);
    const[error,setError]= useState(" ");
    const[isLoading,setLoading]=useState(false); //Adding a Loading State.
//--------------------------------------------------------------
    //Fetching data using Asyn Aawit....
   async function getUser(){
    setLoading(true);
   try {
    const response= await fetch(endpoint); //await will wait for the proimse to be fullflled/Reject
    if(!response.ok)
    {
        throw new Error("Something went Wrong");
    }
    const data= await response.json();
    userList(data);
    setLoading(false);
   }
    catch(error)
    {
        setLoading(false);
        setError(error.message);
   }
}
//--------------------------------------------------------------
    //Fetching Data using (.then)
    // fetch(endpoint).then((response)=>{
    //     console.log("Response");
    //     return response.json();
    // }).then((data)=>{
    //     console.log(data);
    // }).catch((error)=>{
    //     console.log(error);
    // });
//---------------------------------------------------------------
useEffect(()=> {
    getUser()
},[]);
if(isLoading)
{
   return <h2>Loading....</h2>
}
if(error.trim()){
    return <h2>{error}</h2>;
};
  return (
    <div>
    {/* <h1>Fetched Data</h1> */}
    <ul>
        {Users.map((user)=>(
            <li key={user.id}>{user.name}</li>
        ))}
    </ul>
    </div>
  );
}
export default DataFetch;
