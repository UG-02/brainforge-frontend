import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";

export default function WaterTracker(){

const [glasses,setGlasses] = useState(0);

useEffect(()=>{
setGlasses(
Number(localStorage.getItem("waterGlasses")) || 0
);
},[]);

function save(v){
setGlasses(v);
localStorage.setItem("waterGlasses",v);
}

function add(){
save(glasses + 1);
}

function reset(){
save(0);
}

const percent = Math.min((glasses/8)*100,100);

return(
<div style={{
display:"flex",
minHeight:"100vh",
background:"#020617",
color:"white"
}}>

<Sidebar/>

<div style={{flex:1,padding:"30px"}}>

<h1 style={{fontSize:"38px"}}>
Water Tracker
</h1>

<p style={{color:"#94a3b8"}}>
Hydration supports concentration
</p>

<div style={{
background:"#0f172a",
padding:"28px",
borderRadius:"18px",
marginTop:"25px",
maxWidth:"900px"
}}>

<h1 style={{
fontSize:"72px",
margin:"0",
color:"#22d3ee"
}}>
💧 {glasses}/8
</h1>

<div style={{
height:"18px",
background:"#1e293b",
borderRadius:"999px",
overflow:"hidden",
marginTop:"20px"
}}>

<div style={{
height:"100%",
width:`${percent}%`,
background:"#06b6d4"
}}></div>

</div>

<div style={{
display:"flex",
gap:"12px",
marginTop:"22px",
flexWrap:"wrap"
}}>

<button onClick={add} style={btnBlue}>
+1 Glass
</button>

<button onClick={reset} style={btnRed}>
Reset
</button>

</div>

</div>

</div>

</div>
)}
const base={
padding:"14px 22px",
border:"none",
borderRadius:"12px",
color:"white",
fontWeight:"bold",
cursor:"pointer"
};
const btnBlue={...base,background:"#06b6d4"};
const btnRed={...base,background:"#dc2626"};
