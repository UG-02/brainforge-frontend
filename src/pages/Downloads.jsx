import { useState } from "react";
import Sidebar from "../components/Sidebar";

export default function Downloads(){

const [text,setText] = useState("");

function downloadFile(type){

if(!text.trim()){
alert("Enter content first");
return;
}

const blob = new Blob([text], {
type:"text/plain"
});

const url = URL.createObjectURL(blob);

const a = document.createElement("a");
a.href = url;
a.download =
type === "notes"
? "brainforge-notes.txt"
: type === "plan"
? "study-plan.txt"
: "quiz.txt";

a.click();
URL.revokeObjectURL(url);
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
Downloads Center
</h1>

<p style={{color:"#94a3b8"}}>
Save notes, planner or quiz content
</p>

<div style={{
background:"#0f172a",
padding:"24px",
borderRadius:"18px",
marginTop:"25px",
maxWidth:"900px"
}}>

<textarea
rows="12"
value={text}
onChange={(e)=>setText(e.target.value)}
placeholder="Paste any content here..."
style={{
width:"100%",
padding:"15px",
background:"#1e293b",
border:"none",
borderRadius:"12px",
color:"white"
}}
/>

<div style={{
display:"flex",
gap:"12px",
flexWrap:"wrap",
marginTop:"18px"
}}>

<button onClick={()=>downloadFile("notes")} style={btn}>
Download Notes
</button>

<button onClick={()=>downloadFile("plan")} style={btn}>
Download Plan
</button>

<button onClick={()=>downloadFile("quiz")} style={btn}>
Download Quiz
</button>

</div>

</div>

</div>

</div>
)}
const btn={
padding:"14px 22px",
background:"#06b6d4",
border:"none",
borderRadius:"12px",
color:"white",
fontWeight:"bold",
cursor:"pointer"
};
