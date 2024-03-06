import React, { useContext } from 'react'
import { userContext } from './ContextTut';
export default function Grandchild()
 {
    const user=useContext(userContext);
  return (
    <div
    style={{
        backgroundColor:"lightgrey",
        padding:"1rem",
    }}>
      <h3>Grand child :{user}</h3>
    </div>
  )
}
