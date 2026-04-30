import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";

export default function Leaderboard(){

const user = JSON.parse(localStorage.getItem("currentUser"));

const [rows,setRows] = useState([]);

useEffect(()=>{

const total =
(Number(localStorage.getItem("notesCount")) || 0) +
(Number(localStorage.getItem("plansCount")) || 0) +
(Number(localStorage.getItem("quizCount")) || 0);

setRows([
{name:user?.name || "You", score:total, badge:"🔥"},
{name:"Aarav", score:18, badge:"🏆"},
{name:"Meera", score:15, badge:"⭐"},
{name:"Riya", score:12, badge:"📘"},
{name:"Kabir", score:10, badge:"🚀"}
].sort((a,b)=>b.score-a.score));

},[]);

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
Leaderboard
</h1>

<p style={{color:"#94a3b8"}}>
Compete with consistent learners
</p>

<div style={{
background:"#0f172a",
padding:"24px",
borderRadius:"18px",
marginTop:"25px"
}}>

{rows.map((item,index)=>(
<div
key={index}
style={{
display:"grid",
gridTemplateColumns:"70px 1fr 120px",
alignItems:"center",
padding:"16px",
borderBottom:"1px solid rgba(255,255,255,.05)"
}}
>

<h3 style={{margin:"0"}}>
#{index+1}
</h3>

<div>
<h3 style={{margin:"0"}}>
{item.badge} {item.name}
</h3>
<p style={{margin:"5px 0 0 0",color:"#94a3b8"}}>
Study Rank
</p>
</div>

<h2 style={{
margin:"0",
color:"#22d3ee",
textAlign:"right"
}}>
{item.score}
</h2>

</div>
))}

</div>

</div>

</div>
)}
