import React, { useState } from 'react'
import { createContext } from 'react';
import Child from './Child';

const userContext=createContext();
export default function ContextTut() {
const[user,setUser]=useState("John");
  return (
    <userContext.Provider value={user}>
    <div style={{
        backgroundColor:"lightcoral",
        padding:"1rem",
    }}>
      <h1>Parent</h1>
      <Child/>
    </div>
    </userContext.Provider>
  );
}
export {userContext};