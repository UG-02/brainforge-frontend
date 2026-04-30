import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";

export default function Quotes(){

const [quote,setQuote] = useState("");

useEffect(()=>{
randomQuote();
},[]);

function randomQuote(){

const arr = [
"Success is built one focused hour at a time.",
"Discipline will take you where motivation cannot.",
"Study now so future you says thank you.",
"Small progress every day becomes huge success.",
"Consistency beats talent when talent is lazy.",
"One chapter today is less stress tomorrow.",
"Your habits decide your rank.",
"Keep showing up. Winners do."
];

setQuote(
arr[Math.floor(Math.random()*arr.length)]
);
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
Motivation Zone
</h1>

<p style={{color:"#94a3b8"}}>
Daily fuel for your study journey
</p>

<div style={{
background:"#0f172a",
padding:"40px",
borderRadius:"24px",
marginTop:"30px",
maxWidth:"800px",
textAlign:"center"
}}>

<h1 style={{
fontSize:"34px",
lineHeight:"1.6",
color:"#22d3ee"
}}>
“{quote}”
</h1>

<button
onClick={randomQuote}
style={{
padding:"14px 22px",
marginTop:"25px",
background:"#06b6d4",
border:"none",
borderRadius:"12px",
color:"white",
fontWeight:"bold",
cursor:"pointer"
}}
>
New Quote
</button>

</div>

<div style={{
marginTop:"28px",
background:"#0f172a",
padding:"24px",
borderRadius:"18px",
maxWidth:"800px"
}}>

<h2>Reminder</h2>

<ul style={{
lineHeight:"2",
color:"#cbd5e1",
paddingLeft:"18px"
}}>
<li>Focus beats multitasking.</li>
<li>Repetition builds memory.</li>
<li>Revision builds confidence.</li>
<li>Action beats overthinking.</li>
</ul>

</div>

</div>

</div>
)}
