import { useState } from "react";
import Sidebar from "../components/Sidebar";

export default function Calendar(){

const today = new Date();

const [month,setMonth] = useState(today.getMonth());
const [year,setYear] = useState(today.getFullYear());

const months = [
"January","February","March","April","May","June",
"July","August","September","October","November","December"
];

function change(dir){

let m = month + dir;
let y = year;

if(m < 0){
m = 11;
y--;
}

if(m > 11){
m = 0;
y++;
}

setMonth(m);
setYear(y);
}

const firstDay = new Date(year,month,1).getDay();
const totalDays = new Date(year,month+1,0).getDate();

const boxes = [];

for(let i=0;i<firstDay;i++){
boxes.push("");
}

for(let d=1; d<=totalDays; d++){
boxes.push(d);
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
Study Calendar
</h1>

<p style={{color:"#94a3b8"}}>
Plan dates and deadlines visually
</p>

<div style={{
background:"#0f172a",
padding:"24px",
borderRadius:"18px",
marginTop:"25px",
maxWidth:"920px"
}}>

<div style={{
display:"flex",
justifyContent:"space-between",
alignItems:"center",
marginBottom:"20px"
}}>

<button onClick={()=>change(-1)} style={btn}>
←
</button>

<h2 style={{margin:"0"}}>
{months[month]} {year}
</h2>

<button onClick={()=>change(1)} style={btn}>
→
</button>

</div>

<div style={{
display:"grid",
gridTemplateColumns:"repeat(7,1fr)",
gap:"10px"
}}>

{["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map(day=>(
<div key={day} style={head}>{day}</div>
))}

{boxes.map((b,i)=>(
<div
key={i}
style={{
background:b ? "#111827" : "transparent",
padding:"18px",
borderRadius:"12px",
minHeight:"58px",
textAlign:"center",
color:"white"
}}
>
{b}
</div>
))}

</div>

</div>

</div>

</div>
)}
const btn={
padding:"10px 16px",
background:"#06b6d4",
border:"none",
borderRadius:"10px",
color:"white",
fontWeight:"bold",
cursor:"pointer"
};
const head={
padding:"12px",
textAlign:"center",
color:"#22d3ee",
fontWeight:"bold"
};
