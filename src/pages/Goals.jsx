import { useState } from "react";
import Sidebar from "../components/Sidebar";

export default function Goals(){

const [goal,setGoal] = useState("");
const [items,setItems] = useState(
JSON.parse(localStorage.getItem("goals")) || []
);

function save(arr){
setItems(arr);
localStorage.setItem("goals",JSON.stringify(arr));
}

function addGoal(){

if(!goal.trim()) return;

save([
...items,
{
text:goal,
done:false
}
]);

setGoal("");
}

function toggle(i){

const arr = [...items];
arr[i].done = !arr[i].done;
save(arr);
}

function remove(i){

save(items.filter((_,idx)=>idx!==i));
}

const done =
items.filter(x=>x.done).length;

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
Goals Tracker
</h1>

<p style={{color:"#94a3b8"}}>
Set targets and complete them
</p>

<div style={{
background:"#0f172a",
padding:"24px",
borderRadius:"18px",
marginTop:"25px",
maxWidth:"950px"
}}>

<div style={{
display:"flex",
gap:"12px",
flexWrap:"wrap"
}}>

<input
value={goal}
onChange={(e)=>setGoal(e.target.value)}
placeholder="Enter new goal"
style={{
flex:"1",
minWidth:"260px",
padding:"15px",
background:"#1e293b",
border:"none",
borderRadius:"12px",
color:"white"
}}
/>

<button onClick={addGoal} style={btnBlue}>
Add Goal
</button>

</div>

<h3 style={{
marginTop:"18px",
color:"#22c55e"
}}>
Completed {done}/{items.length}
</h3>

</div>

<div style={{
marginTop:"22px",
maxWidth:"950px"
}}>

{items.map((item,i)=>(
<div
key={i}
style={{
background:"#0f172a",
padding:"18px",
borderRadius:"16px",
marginBottom:"12px",
display:"flex",
justifyContent:"space-between",
alignItems:"center",
gap:"12px",
flexWrap:"wrap"
}}
>

<div style={{
display:"flex",
alignItems:"center",
gap:"12px"
}}>

<input
type="checkbox"
checked={item.done}
onChange={()=>toggle(i)}
/>

<span style={{
textDecoration:item.done?"line-through":"none",
color:item.done?"#94a3b8":"white"
}}>
{item.text}
</span>

</div>

<button
onClick={()=>remove(i)}
style={btnRed}
>
Delete
</button>

</div>
))}

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
