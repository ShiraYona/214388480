// import React, { useState } from "react"
// import { useLocation, useNavigate } from "react-router-dom"
// import styles from './Date.module.css'
// function Date(){
// const data = useLocation()
// const data1= data.state.data1
// const data2= data.state.data2

//     const styles = {
//         height: '500px',
//         margin: '5px',
//         width: '20%',
//         float: 'left',
//         display: 'inline',
//         borderStyle: 'solid'

//     }

//  var flad = false 
// const [date1, setDate1]=useState("")
// const [date2, setDate2]=useState("")
// const [p, setP]=useState([])

// const navigate =useNavigate
// debugger;


// const  parasha=async()=>{
//     debugger;

//     try{  await  fetch(`https://www.hebcal.com/hebcal?cfg=fc&v=1&i=off&maj=on&min=on&nx=on&mf=on&ss=on&mod=on&lg=he&s&=on&start=${date1}+&end=${date2}&className="parashat"`)
//     .then(response => response.json())
//     .then(res => setP(res)) 
//     return arr
// }
// catch{
// console.log("err");
// }
// var flad = false 

// }



// return(
//     <div>
//        <button onClick={()=>a()}>חזור</button>

//     <ul>
//        {p&&p.map((item,i) => (
//         <div style={styles}>
//          <h1 >{item.title}</h1>
//           <p>{item.description}</p>
//           <data>{item.start}</data>
//         </div>
//       ))}
//     </ul>

//     </div>
// )




//  }

//  export default Date

// //  https://www.hebcal.com/hebcal?cfg=fc&v=1&i=off&maj=on&min=on&nx=on&mf=on&ss=on&mod=on&lg=he&s&=on&start=2023-06-25&end=2023-08-06