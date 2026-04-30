import { useState } from "react";
import Sidebar from "../components/Sidebar";

export default function CareerAI(){

const [goal,setGoal] = useState("");
const [result,setResult] = useState("");
const [loading,setLoading] = useState(false);

async function generate(){

if(!goal.trim()) return;

setLoading(true);
setResult("");

try{
const res = await fetch("http://localhost:5000/career",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
goal
})
});

const data = await res.json();
setResult(data.result);
}
catch(err){
setResult("Server Error");
}

setLoading(false);
}

return(
<div style={{
display:"flex",
minHeight:"100vh",
background:"#020617",
color:"white"
}}>

<Sidebar/>

<div style={{
flex:1,
padding:"30px"
}}>

<h1 style={{
fontSize:"38px"
}}>
Career AI Coach
</h1>

<p style={{
color:"#94a3b8"
}}>
Real AI career planning assistant
</p>

<div style={{
background:"#0f172a",
padding:"24px",
borderRadius:"18px",
marginTop:"24px",
maxWidth:"1000px"
}}>

<input
value={goal}
onChange={(e)=>setGoal(e.target.value)}
placeholder="Example: Become Data Scientist"
style={{
width:"100%",
padding:"15px",
background:"#1e293b",
border:"none",
borderRadius:"12px",
color:"white"
}}
/>

<button
onClick={generate}
style={{
marginTop:"16px",
padding:"14px 22px",
background:"#06b6d4",
border:"none",
borderRadius:"12px",
color:"white",
fontWeight:"bold",
cursor:"pointer"
}}
>
{loading ? "Generating..." : "Generate Career Plan"}
</button>

<pre style={{
whiteSpace:"pre-wrap",
lineHeight:"1.7",
marginTop:"22px",
background:"#111827",
padding:"22px",
borderRadius:"16px"
}}>
{result}
</pre>

</div>

</div>

</div>
)}
