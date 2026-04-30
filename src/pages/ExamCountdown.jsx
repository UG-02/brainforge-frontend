import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";

export default function ExamCountdown(){

const [exam,setExam] = useState(
localStorage.getItem("examDate") || ""
);

const [left,setLeft] = useState("");

useEffect(()=>{
calc();
},[]);

function saveDate(){
localStorage.setItem("examDate",exam);
calc();
}

function calc(){

if(!exam){
setLeft("No exam date selected.");
return;
}

const now = new Date();
const target = new Date(exam);
const diff = target - now;

if(diff <= 0){
setLeft("Exam day reached 🚀");
return;
}

const days = Math.floor(diff/(1000*60*60*24));
const hrs = Math.floor((diff/(1000*60*60))%24);
const mins = Math.floor((diff/(1000*60))%60);

setLeft(`${days} Days ${hrs} Hours ${mins} Minutes Left`);
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
Exam Countdown
</h1>

<p style={{color:"#94a3b8"}}>
Stay aware of remaining time
</p>

<div style={{
background:"#0f172a",
padding:"28px",
borderRadius:"20px",
marginTop:"28px",
maxWidth:"760px"
}}>

<input
type="date"
value={exam}
onChange={(e)=>setExam(e.target.value)}
style={{
width:"100%",
padding:"15px",
background:"#1e293b",
border:"none",
borderRadius:"12px",
color:"white"
}}
/>

<div style={{
display:"flex",
gap:"12px",
marginTop:"18px",
flexWrap:"wrap"
}}>

<button
onClick={saveDate}
style={btnBlue}
>
Save Date
</button>

<button
onClick={calc}
style={btnDark}
>
Refresh
</button>

</div>

<div style={{
marginTop:"28px",
background:"#111827",
padding:"28px",
borderRadius:"18px",
textAlign:"center"
}}>

<h1 style={{
fontSize:"42px",
margin:"0",
color:"#22d3ee"
}}>
{left}
</h1>

</div>

</div>

<div style={{
marginTop:"25px",
background:"#0f172a",
padding:"24px",
borderRadius:"18px",
maxWidth:"760px"
}}>

<h2>Strategy</h2>

<ul style={{
lineHeight:"2",
color:"#cbd5e1",
paddingLeft:"18px"
}}>
<li>30+ days: Build concepts</li>
<li>15 days: Start revisions</li>
<li>7 days: Mock tests daily</li>
<li>1 day: Formula recap + rest</li>
</ul>

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
