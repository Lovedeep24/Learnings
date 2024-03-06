import React from 'react'
import Grandchild from './Grandchild';
export default function Child() {
  return (
    <div>
      <h2
      style={{
        backgroundColor:"lightgreen",
        padding:"1rem",
    }}>Child</h2>
      <Grandchild/>
    </div>
  );
}
