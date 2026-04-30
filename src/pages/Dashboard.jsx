import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { postData } from "../api";

export default function Dashboard(){

const user =
JSON.parse(localStorage.getItem("currentUser"));

const [quote,setQuote] = useState("Loading...");
const [loading,setLoading] = useState(true);

useEffect(()=>{
loadQuote();
},[]);

async function loadQuote(){

try{
const data = await postData("/motivate");
setQuote(data.result);
}
catch{
setQuote("Stay disciplined and keep moving.");
}

setLoading(false);
}

function stat(title,val,color){

return(
<div style={{
background:"#0f172a",
padding:"22px",
borderRadius:"18px"
}}>

<p style={{
margin:"0",
color:"#94a3b8"
}}>
{title}
</p>

<h1 style={{
marginTop:"12px",
fontSize:"34px",
color
}}>
{val}
</h1>

</div>
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

<div style={{
flex:1,
padding:"30px"
}}>

<h1 style={{
fontSize:"42px",
margin:"0"
}}>
Welcome {user?.name} 👋
</h1>

<p style={{
marginTop:"8px",
color:"#94a3b8"
}}>
Your AI command center
</p>

<div style={{
display:"grid",
gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",
gap:"18px",
marginTop:"28px"
}}>

{stat("Saved Users",
(JSON.parse(localStorage.getItem("users"))||[]).length,
"#22d3ee")}

{stat("Goals",
(JSON.parse(localStorage.getItem("goals"))||[]).length,
"#22c55e")}

{stat("Bookmarks",
(JSON.parse(localStorage.getItem("bookmarks"))||[]).length,
"#f59e0b")}

{stat("Flashcards",
(JSON.parse(localStorage.getItem("flashcards"))||[]).length,
"#a78bfa")}

</div>

<div style={{
background:"#0f172a",
padding:"26px",
borderRadius:"20px",
marginTop:"28px"
}}>

<p style={{
margin:"0",
color:"#94a3b8"
}}>
AI Motivation Coach
</p>

<h2 style={{
marginTop:"14px",
lineHeight:"1.6",
color:"#22d3ee"
}}>
{loading ? "Loading..." : quote}
</h2>

<button
onClick={loadQuote}
style={{
marginTop:"14px",
padding:"12px 18px",
background:"#06b6d4",
border:"none",
borderRadius:"12px",
color:"white",
fontWeight:"bold",
cursor:"pointer"
}}
>
Refresh Motivation
</button>

</div>

</div>

</div>
)}
