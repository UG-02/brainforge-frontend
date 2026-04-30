import { useState } from "react";
import Sidebar from "../components/Sidebar";

export default function Attendance(){

const [held,setHeld] = useState("");
const [attended,setAttended] = useState("");
const [need,setNeed] = useState("");
const [result,setResult] = useState("");

function calculate(){

const h = Number(held);
const a = Number(attended);

if(h <= 0 || a < 0 || a > h){
setResult("Enter valid values.");
return;
}

const percent = ((a/h)*100).toFixed(2);

let msg = `Current Attendance: ${percent}%`;

if(percent < 75){

let x = 0;
let ah = a;
let hh = h;

while((ah/hh)*100 < 75){
ah++;
hh++;
x++;
}

msg += ` | Need ${x} continuous classes for 75%`;
}else{

let x = 0;
let ah = a;
let hh = h;

while(((ah)/(hh+1))*100 >= 75){
hh++;
x++;
}

msg += ` | Can miss ${x} classes and stay above 75%`;
}

setResult(msg);
}

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
Attendance Calculator
</h1>

<p style={{color:"#94a3b8"}}>
Know shortage or safe leave margin
</p>

<div style={{
background:"#0f172a",
padding:"24px",
borderRadius:"18px",
marginTop:"25px",
maxWidth:"850px"
}}>

<input
placeholder="Total Classes Held"
value={held}
onChange={(e)=>setHeld(e.target.value)}
style={inputStyle}
/>

<input
placeholder="Classes Attended"
value={attended}
onChange={(e)=>setAttended(e.target.value)}
style={inputStyle}
/>

<button
onClick={calculate}
style={btn}
>
Calculate Attendance
</button>

<div style={{
marginTop:"22px",
background:"#111827",
padding:"22px",
borderRadius:"16px"
}}>

<h2 style={{
margin:"0",
color:"#22d3ee",
lineHeight:"1.6"
}}>
{result}
</h2>

</div>

</div>

</div>

</div>
)}
const inputStyle={
width:"100%",
padding:"15px",
marginBottom:"12px",
background:"#1e293b",
border:"none",
borderRadius:"12px",
color:"white"
};
const btn={
padding:"14px 22px",
background:"#06b6d4",
border:"none",
borderRadius:"12px",
color:"white",
fontWeight:"bold",
cursor:"pointer"
};
