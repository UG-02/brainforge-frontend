import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";

export default function Analytics(){

const [stats,setStats] = useState({
notes:0,
plans:0,
quiz:0
});

useEffect(()=>{

const notes = Number(localStorage.getItem("notesCount")) || 0;
const plans = Number(localStorage.getItem("plansCount")) || 0;
const quiz = Number(localStorage.getItem("quizCount")) || 0;

setStats({notes,plans,quiz});

},[]);

const total = stats.notes + stats.plans + stats.quiz || 1;

function percent(v){
return Math.round((v/total)*100);
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
Analytics
</h1>

<p style={{color:"#94a3b8"}}>
Track your usage and learning pattern
</p>

<div style={{
display:"grid",
gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",
gap:"20px",
marginTop:"25px"
}}>

<Card t="Notes Usage" v={stats.notes}/>
<Card t="Plans Usage" v={stats.plans}/>
<Card t="Quiz Usage" v={stats.quiz}/>

</div>

<div style={{
marginTop:"28px",
background:"#0f172a",
padding:"25px",
borderRadius:"18px"
}}>

<h2>Performance Split</h2>

<Bar name="Notes" val={percent(stats.notes)} color="#06b6d4"/>
<Bar name="Plans" val={percent(stats.plans)} color="#22c55e"/>
<Bar name="Quiz" val={percent(stats.quiz)} color="#f59e0b"/>

</div>

<div style={{
marginTop:"28px",
background:"#0f172a",
padding:"25px",
borderRadius:"18px"
}}>

<h2>Insights</h2>

<ul style={{
lineHeight:"2",
color:"#cbd5e1",
paddingLeft:"18px"
}}>
<li>Most used tool improves retention.</li>
<li>Daily consistency beats long random study.</li>
<li>Use planner before exam week.</li>
<li>Take quiz after every notes session.</li>
</ul>

</div>

</div>

</div>
)}
function Card({t,v}){
return(
<div style={{
background:"#0f172a",
padding:"22px",
borderRadius:"18px"
}}>
<p style={{color:"#94a3b8"}}>{t}</p>
<h1 style={{fontSize:"42px"}}>{v}</h1>
</div>
)}
function Bar({name,val,color}){
return(
<div style={{marginTop:"18px"}}>
<p>{name} - {val}%</p>
<div style={{
height:"12px",
background:"#1e293b",
borderRadius:"12px"
}}>
<div style={{
width:val+"%",
height:"12px",
background:color,
borderRadius:"12px"
}}></div>
</div>
</div>
)}
