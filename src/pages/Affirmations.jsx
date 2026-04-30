import { useState } from "react";
import Sidebar from "../components/Sidebar";

export default function Affirmations(){

const list = [
"I am consistent and disciplined.",
"I finish what I start.",
"I can learn difficult things.",
"My focus grows every day.",
"I am building a successful future.",
"I stay calm under pressure.",
"I improve with every session.",
"I deserve the results I work for."
];

const [text,setText] = useState(
list[Math.floor(Math.random()*list.length)]
);

function nextAffirmation(){
setText(
list[Math.floor(Math.random()*list.length)]
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
Daily Affirmations
</h1>

<p style={{color:"#94a3b8"}}>
Train mindset with positive repetition
</p>

<div style={{
background:"#0f172a",
padding:"40px",
borderRadius:"20px",
marginTop:"28px",
maxWidth:"900px",
textAlign:"center"
}}>

<h1 style={{
fontSize:"40px",
lineHeight:"1.6",
margin:"0",
color:"#22d3ee"
}}>
{text}
</h1>

<button
onClick={nextAffirmation}
style={{
padding:"14px 22px",
marginTop:"28px",
background:"#06b6d4",
border:"none",
borderRadius:"12px",
color:"white",
fontWeight:"bold",
cursor:"pointer"
}}
>
Next Affirmation
</button>

</div>

</div>

</div>
)}
