import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";

export default function StudyStats(){

const [stats,setStats] = useState([]);

useEffect(()=>{
load();
},[]);

function load(){

const data = [
{
name:"Notes Created",
value:Number(localStorage.getItem("notesCount")) || 0
},
{
name:"Plans Generated",
value:Number(localStorage.getItem("plansCount")) || 0
},
{
name:"Quiz Attempts",
value:Number(localStorage.getItem("quizCount")) || 0
},
{
name:"Focus Sessions",
value:Number(localStorage.getItem("focusSessions")) || 0
},
{
name:"Streak Days",
value:Number(localStorage.getItem("streakDays")) || 0
},
{
name:"Bookmarks",
value:(JSON.parse(localStorage.getItem("bookmarks")) || []).length
},
{
name:"Flashcards",
value:(JSON.parse(localStorage.getItem("flashcards")) || []).length
},
{
name:"Habits Done",
value:(JSON.parse(localStorage.getItem("habits")) || []).filter(x=>x.done).length
}
];

setStats(data);
}

const max = Math.max(...stats.map(x=>x.value),1);

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
Study Statistics
</h1>

<p style={{color:"#94a3b8"}}>
Visual progress overview
</p>

<div style={{
background:"#0f172a",
padding:"24px",
borderRadius:"18px",
marginTop:"25px",
maxWidth:"980px"
}}>

{stats.map((item,i)=>(
<div
key={i}
style={{
marginBottom:"18px"
}}
>

<div style={{
display:"flex",
justifyContent:"space-between",
marginBottom:"8px"
}}>
<span>{item.name}</span>
<b>{item.value}</b>
</div>

<div style={{
height:"16px",
background:"#1e293b",
borderRadius:"999px",
overflow:"hidden"
}}>

<div style={{
height:"100%",
width:`${(item.value/max)*100}%`,
background:"#06b6d4"
}}></div>

</div>

</div>
))}

</div>

</div>

</div>
)}
