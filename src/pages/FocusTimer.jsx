import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";

export default function FocusTimer(){

const [seconds,setSeconds] = useState(1500);
const [running,setRunning] = useState(false);

useEffect(()=>{

let timer;

if(running && seconds > 0){
timer = setInterval(()=>{
setSeconds(prev => prev - 1);
},1000);
}

if(seconds === 0){
setRunning(false);

const done =
Number(localStorage.getItem("focusSessions")) || 0;

localStorage.setItem(
"focusSessions",
done + 1
);

alert("Session Completed 🔥");
}

return ()=>clearInterval(timer);

},[running,seconds]);

function format(){
const m = String(Math.floor(seconds/60)).padStart(2,"0");
const s = String(seconds%60).padStart(2,"0");
return `${m}:${s}`;
}

function reset(v){
setRunning(false);
setSeconds(v);
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
Focus Timer
</h1>

<p style={{color:"#94a3b8"}}>
Pomodoro sessions for deep study
</p>

<div style={{
background:"#0f172a",
padding:"40px",
borderRadius:"24px",
marginTop:"28px",
maxWidth:"700px",
textAlign:"center"
}}>

<h1 style={{
fontSize:"90px",
margin:"0",
color:"#22d3ee"
}}>
{format()}
</h1>

<div style={{
display:"flex",
gap:"12px",
justifyContent:"center",
flexWrap:"wrap",
marginTop:"25px"
}}>

<button onClick={()=>setRunning(true)} style={btnBlue}>Start</button>
<button onClick={()=>setRunning(false)} style={btnDark}>Pause</button>
<button onClick={()=>reset(1500)} style={btnGreen}>25 Min</button>
<button onClick={()=>reset(300)} style={btnOrange}>5 Min</button>
<button onClick={()=>reset(3600)} style={btnPurple}>60 Min</button>

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
const btnDark={...base,background:"#334155"};
const btnGreen={...base,background:"#22c55e"};
const btnOrange={...base,background:"#f59e0b"};
const btnPurple={...base,background:"#a855f7"};
