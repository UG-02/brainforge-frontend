import { useState } from "react";
import Sidebar from "../components/Sidebar";

export default function Revision(){

const [tasks,setTasks] = useState(
JSON.parse(localStorage.getItem("revisionTasks")) || []
);

const [text,setText] = useState("");

function addTask(){

if(!text.trim()) return;

const arr = [
...tasks,
{
name:text,
done:false
}
];

setTasks(arr);
localStorage.setItem(
"revisionTasks",
JSON.stringify(arr)
);

setText("");
}

function toggle(i){

const arr = [...tasks];
arr[i].done = !arr[i].done;

setTasks(arr);
localStorage.setItem(
"revisionTasks",
JSON.stringify(arr)
);
}

function remove(i){

const arr = tasks.filter((_,idx)=>idx!==i);

setTasks(arr);
localStorage.setItem(
"revisionTasks",
JSON.stringify(arr)
);
}

const completed =
tasks.filter(x=>x.done).length;

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
Revision Tracker
</h1>

<p style={{color:"#94a3b8"}}>
Track chapters and revision targets
</p>

<div style={{
background:"#0f172a",
padding:"22px",
borderRadius:"18px",
marginTop:"25px",
maxWidth:"850px"
}}>

<div style={{
display:"flex",
gap:"12px",
flexWrap:"wrap"
}}>

<input
value={text}
onChange={(e)=>setText(e.target.value)}
placeholder="Add chapter / topic"
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

<button
onClick={addTask}
style={{
padding:"14px 22px",
background:"#06b6d4",
border:"none",
borderRadius:"12px",
color:"white",
fontWeight:"bold",
cursor:"pointer"
}}
>
Add
</button>

</div>

<p style={{
marginTop:"18px",
color:"#22c55e"
}}>
Completed {completed} / {tasks.length}
</p>

</div>

<div style={{
marginTop:"22px",
maxWidth:"850px"
}}>

{tasks.map((item,i)=>(
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
gap:"10px",
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
{item.name}
</span>

</div>

<button
onClick={()=>remove(i)}
style={{
padding:"8px 14px",
background:"#dc2626",
border:"none",
borderRadius:"10px",
color:"white",
cursor:"pointer"
}}
>
Delete
</button>

</div>
))}

</div>

</div>

</div>
)}
