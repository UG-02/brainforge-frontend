import { useState } from "react";
import Sidebar from "../components/Sidebar";

export default function QuickNotes(){

const [text,setText] = useState(
localStorage.getItem("quickNotes") || ""
);

const [msg,setMsg] = useState("");

function save(){

localStorage.setItem("quickNotes",text);
setMsg("Saved Successfully");

setTimeout(()=>{
setMsg("");
},1500);
}

function clearAll(){
setText("");
localStorage.removeItem("quickNotes");
setMsg("Cleared");
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
Quick Notes
</h1>

<p style={{color:"#94a3b8"}}>
Capture ideas instantly
</p>

<div style={{
background:"#0f172a",
padding:"24px",
borderRadius:"18px",
marginTop:"25px",
maxWidth:"950px"
}}>

<textarea
rows="18"
value={text}
onChange={(e)=>setText(e.target.value)}
placeholder="Write anything..."
style={{
width:"100%",
padding:"16px",
background:"#1e293b",
border:"none",
borderRadius:"12px",
color:"white",
resize:"vertical"
}}
/>

<div style={{
display:"flex",
gap:"12px",
flexWrap:"wrap",
marginTop:"18px"
}}>

<button onClick={save} style={btnBlue}>
Save Notes
</button>

<button onClick={clearAll} style={btnRed}>
Clear
</button>

</div>

<p style={{
color:"#22c55e",
marginTop:"14px"
}}>
{msg}
</p>

</div>

</div>

</div>
)}
const base={
padding:"14px 22px",
border:"none",
borderRadius:"12px",
color:"white",
fontWeight:"bold",
cursor:"pointer"
};
const btnBlue={...base,background:"#06b6d4"};
const btnRed={...base,background:"#dc2626"};
