//  export default function App(){
//   return(
//     <div>
// {
//     <h1 align="center">TRANSFORMERS</h1>
//     <center>
//     <img src="https://c4.wallpaperflare.com/wallpaper/677/206/523/transformers-transformers-the-last-knight-bumblebee-transformers-robot-wallpaper-preview.jpg"></img>
//     <br></br>
//     <a href="https://animatedtimes.com/wp-content/uploads/2022/04/Transformers-1-e1650347354397.jpg">AUTOBOTS</a>
//     <table>
//       <tr>
//         <th colSpan={3}>TRANSFORMERS</th>
//       </tr>
//       <tr>
//         <th>Name</th>
//         <th>Type</th>
//         <th>Colour</th>
//       </tr>
//       <tr>
//         <td>Optimus prime</td>
//         <td>Truck</td>
//         <td>Red and Blue</td>
//       </tr>
//       <tr>
//         <td>Bumblebee</td>
//         <td>Car</td>
//         <td>yellow</td>
//       </tr>
//       <tr>
//         <td>Crosshairs</td>
//         <td>Car</td>
//         <td>Light green</td>
//       </tr>
//       <tr>
//         <td>Drift</td>
//         <td>Helicopter</td>
//         <td>Blue</td>
//       </tr>
//     </table>
//     <form>
//       <lable>Name:</lable>
//       <input type="text"></input>
//       <br></br>
//       <label>Age:</label>
//       <input type="date"></input>
//     </form>
//     <audio controls>
//       <source src="E:\audio" type="audio.mp3"></source>
      
//     </audio>
//     </center> }

//     </div>
//   )
//  }

import {useState} from "react"

export default function App(){
const [number,value]=useState(0);
const a =()=>{
  value(number+1)
}
const m =()=>{
  value(number-1)
}
const z=()=>{
  value(0)
  setNum(0)
}

const[num,setNum]=useState(0);
 

const o = ()=>{
  console.log("hai");
  setNum(num+1)
}
  return(
<>
<center>
      <h1>{number}</h1>
      <button onClick={a}>+ADD </button>
      <button onClick={m}>-SUBTRACST</button>
      <button onClick={z}>Clear</button>
       {/* <button onclick={r}>clicked{name} </button> */}
       <button onClick={o}>vllv {num}</button>
</center>      
</>        
      )
}

