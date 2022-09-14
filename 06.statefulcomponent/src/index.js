import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';
import "./index.css";

 function Room(){
   const [isLit,setLit]=useState(false);
   return <div className = {`room ${(isLit) ? "lit" : "dark"}`}>
<div>the room is {(isLit)? "lit":"dark"}</div>
   <button onClick={()=>setLit(!isLit)}>
     flip
  </button>
 </div>
 }
 ReactDOM.render(<Room/>,document.querySelector('#root'));
 //https://statefulcomponentwebsite.netlify.app

