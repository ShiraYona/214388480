import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import styles from './Date.module.css'
function Date(){

    const styles = {
        height: '500px',
        margin: '5px',
        width: '20%',
        float: 'left',
        display: 'inline',
        borderStyle: 'solid'

    }

 var flad = false 
const [date1, setDate1]=useState("")
const [date2, setDate2]=useState("")
const [arr, setArr]=useState([])

const navigate =useNavigate
debugger;
const  a=async()=>{
    debugger;

    try{  await  fetch(`https://www.hebcal.com/hebcal?cfg=fc&v=1&i=off&maj=on&min=on&nx=on&mf=on&ss=on&mod=on&lg=he&s&=on&start=${date1}+&end=${date2}`)
    .then(response => response.json())
    .then(res => setArr(res)) 
    return arr
}
catch{
console.log("err");
}
}


const  parasha=async()=>{
    debugger;

    try{  await  fetch(`https://www.hebcal.com/hebcal?cfg=fc&v=1&i=off&maj=on&min=on&nx=on&mf=on&ss=on&mod=on&lg=he&s&=on&start=${date1}+&end=${date2}&className=parashat`)
    .then(response => response.json())
    .then(res => setArr(res)) 
    return arr
}
catch{
console.log("err");
}
}

return(
    <div>
        <p>הכנס טווח תאריכים רצוי</p>
        <input type="string" onChange={(e)=>{setDate1(e.target.value)}} placeholder="enter date "></input> 
        <input onChange={(e)=>{setDate2(e.target.value)}} placeholder="enter date "></input> 
    <ul>
<button onClick={()=>parasha()}  >הצג פרשת שבוע בלבד</button>
<button onClick={()=>a()}>הצג הכל</button>

      {arr&&arr.map((item,i) => (
        <div style={styles}>
         <h1 >{item.title}</h1>
          <p>{item.description}</p>
          <data>{item.start}</data>

        </div>
      ))}
    </ul>

    </div>
)
 }

 export default Date

//  https://www.hebcal.com/hebcal?cfg=fc&v=1&i=off&maj=on&min=on&nx=on&mf=on&ss=on&mod=on&lg=he&s&=on&start=2023-06-25&end=2023-08-06