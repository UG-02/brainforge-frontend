import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";

export default function TimerChallenge(){

const [seconds,setSeconds] = useState(300);
const [running,setRunning] = useState(false);
const [done,setDone] = useState(0);

useEffect(()=>{

const saved =
Number(localStorage.getItem("challengeDone")) || 0;

setDone(saved);

},[]);

useEffect(()=>{

let t;

if(running && seconds > 0){
t = setInterval(()=>{
setSeconds(prev => prev - 1);
},1000);
}

if(seconds === 0 && running){

setRunning(false);

const total = done + 1;
setDone(total);

localStorage.setItem(
"challengeDone",
total
);

alert("Challenge Completed 🔥");
}

return ()=>clearInterval(t);

},[running,seconds]);

function start(v){
setSeconds(v);
setRunning(true);
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
Timer Challenge
</h1>

<p style={{color:"#94a3b8"}}>
Beat distraction with timed missions
</p>

<div style={{
background:"#0f172a",
padding:"28px",
borderRadius:"18px",
marginTop:"25px",
maxWidth:"900px",
textAlign:"center"
}}>

<h1 style={{
fontSize:"90px",
margin:"0",
color:"#22d3ee"
}}>
{String(Math.floor(seconds/60)).padStart(2,"0")}:
{String(seconds%60).padStart(2,"0")}
</h1>

<div style={{
display:"flex",
gap:"12px",
justifyContent:"center",
flexWrap:"wrap",
marginTop:"22px"
}}>

<button onClick={()=>start(300)} style={btnBlue}>
5 Min
</button>

<button onClick={()=>start(900)} style={btnGreen}>
15 Min
</button>

<button onClick={()=>start(1800)} style={btnPurple}>
30 Min
</button>

<button onClick={()=>setRunning(false)} style={btnRed}>
Pause
</button>

</div>

<h2 style={{
marginTop:"24px"
}}>
Completed Challenges: {done}
</h2>

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
const btnGreen={...base,background:"#22c55e"};
const btnPurple={...base,background:"#8b5cf6"};
const btnRed={...base,background:"#dc2626"};
