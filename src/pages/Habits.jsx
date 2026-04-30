import { useState } from "react";
import Sidebar from "../components/Sidebar";

export default function Habits(){

const [habits,setHabits] = useState(
JSON.parse(localStorage.getItem("habits")) || [
{name:"Study 2 Hours",done:false},
{name:"Revise Notes",done:false},
{name:"No Phone While Study",done:false}
]
);

function save(arr){
setHabits(arr);
localStorage.setItem("habits",JSON.stringify(arr));
}

function toggle(i){
const arr = [...habits];
arr[i].done = !arr[i].done;
save(arr);
}

function addHabit(){

const name = prompt("Enter new habit");

if(!name) return;

save([
...habits,
{name,done:false}
]);
}

function resetAll(){

const arr = habits.map(h=>({
...h,
done:false
}));

save(arr);
}

const completed =
habits.filter(h=>h.done).length;

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
Habit Tracker
</h1>

<p style={{color:"#94a3b8"}}>
Build routines that create results
</p>

<div style={{
background:"#0f172a",
padding:"24px",
borderRadius:"18px",
marginTop:"25px",
maxWidth:"900px"
}}>

<div style={{
display:"flex",
justifyContent:"space-between",
alignItems:"center",
flexWrap:"wrap",
gap:"12px"
}}>

<h2 style={{margin:"0"}}>
Completed {completed}/{habits.length}
</h2>

<div style={{
display:"flex",
gap:"10px",
flexWrap:"wrap"
}}>

<button onClick={addHabit} style={btnBlue}>
Add Habit
</button>

<button onClick={resetAll} style={btnRed}>
Reset
</button>

</div>

</div>

<div style={{marginTop:"20px"}}>

{habits.map((h,i)=>(
<div
key={i}
style={{
background:"#111827",
padding:"18px",
borderRadius:"14px",
marginBottom:"12px",
display:"flex",
justifyContent:"space-between",
alignItems:"center"
}}
>

<span style={{
textDecoration:h.done?"line-through":"none",
color:h.done?"#94a3b8":"white"
}}>
{h.name}
</span>

<input
type="checkbox"
checked={h.done}
onChange={()=>toggle(i)}
style={{
width:"18px",
height:"18px"
}}
/>

</div>
))}

</div>

</div>

</div>

</div>
)}
const base={
padding:"12px 18px",
border:"none",
borderRadius:"10px",
color:"white",
fontWeight:"bold",
cursor:"pointer"
};
const btnBlue={...base,background:"#06b6d4"};
const btnRed={...base,background:"#dc2626"};
