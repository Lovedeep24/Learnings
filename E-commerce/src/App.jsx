import React, { useState } from 'react';
import styles from './App.module.css';
// style={{border: "2px solid black",height: "1000px",width: "500px"}
export default function App() {
  const [Products,setProducts]=useState([
    {
      P_id:"100",
      Title:"Nike Air max",
      Price:"10000",
      pieces:"10",
      Stock_out:false
    },
    {
      P_id:"101",
      Title:"Adidas Sport",
      Price:"5000",
      pieces:"5",
      Stock_out:false
    },
    {
      P_id:"102",
      Title:"Puma Runner",
      Price:"3000",
      pieces:"4",
      Stock_out:false
    },
    {
      P_id:"103",
      Title:"Nike breakpoint",
      Price:"7000",
      pieces:"6",
      Stock_out:false
    },
    {
      P_id:"104",
      Title:"Adidas Spike",
      Price:"0030",
      pieces:"7",
      Stock_out:false
    }
  ])
  function AddtoCart(){

  }
  return (
    <>
    {/* <div className='inside' style={{border: "2px solid black",height: "350px",width: "750px",display:"grid", justifyContent:"centre"}}>
      div1
      <button id="1" style={{height:"80px",width:"100px"}} onClick={AddtoCart()}>Add</button>
    </div>
    <div className='inside' style={{border: "2px solid black",height: "350px",width: "750px" ,display:"grid", justifyContent:"centre"}}>
      div2
      <button id="2"  style={{height:"80px",width:"100px"}} onClick={AddtoCart()}>Add</button>
    </div>
    <div className='inside' style={{border: "2px solid black",height: "350px",width: "750px",display:"grid",  justifyContent:"centre"}}>
      div3
      <button id="3"  style={{height:"80px",width:"100px"}}onClick={AddtoCart()}>Add</button>
    </div>
    <div className='inside' style={{border: "2px solid black",height: "350px",width: "750px",display:"grid", justifyContent:"centre"}}>
      div4
      <button id="4" style={{height:"80px",width:"100px"}} onClick={AddtoCart()}>Add</button>
    </div>
    <div className='inside' style={{border: "2px solid black",height: "350px",width: "750px",display:"grid", justifyContent:"centre"}}>
        div5
        <button id="5" style={{height:"80px",width:"100px"}} onClick={AddtoCart()}>Add</button>
    </div>
       */}
    <div className={styles.inside}>
      div1
      <button id="1" style={{height:"50px",width:"80px"}}>Add</button>
    </div>
    <div className={styles.inside}>
      div2
      <button id="2"  style={{height:"50px",width:"80px"}} onClick={AddtoCart()}>Add</button>
    </div>
    <div className={styles.inside}>
      div3
      <button id="3"  style={{height:"50px",width:"80px"}}onClick={AddtoCart()}>Add</button>
    </div>
    <div className={styles.inside}>
      div4
      <button id="4" style={{height:"50px",width:"80px"}} onClick={AddtoCart()}>Add</button>
    </div>
    <div className={styles.inside}>
        div5
        <button id="5" style={{height:"50px",width:"80px"}} onClick={AddtoCart()}>Add</button>
    </div>
    </>
  )
}
