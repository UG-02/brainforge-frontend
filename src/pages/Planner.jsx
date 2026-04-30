import { useState } from "react";
import Sidebar from "../components/Sidebar";
import { postData } from "../api";

export default function Planner(){

const [subjects,setSubjects] = useState("");
const [examDate,setExamDate] = useState("");
const [hours,setHours] = useState("");
const [result,setResult] = useState("");
const [loading,setLoading] = useState(false);

async function generate(){

if(!subjects.trim()) return;

setLoading(true);
setResult("");

try{

const goal = `
Subjects: ${subjects}
Exam Date: ${examDate}
Daily Free Hours: ${hours}

Create a personalized study timetable.
Split subjects properly.
Give daily targets.
Add revision schedule.
`;

const data = await postData("/planner",{goal});
setResult(data.result);

}catch{
setResult("Server Error");
}

setLoading(false);
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
fontSize:"38px"
}}>
AI Study Planner
</h1>

<p style={{
color:"#94a3b8"
}}>
Personalized study plans powered by AI
</p>

<div style={{
background:"#0f172a",
padding:"24px",
borderRadius:"18px",
marginTop:"24px",
maxWidth:"1100px"
}}>

<input
value={subjects}
onChange={(e)=>setSubjects(e.target.value)}
placeholder="Subjects (comma separated) Example: Maths, Physics, Chemistry"
style={input}
/>

<input
type="date"
value={examDate}
onChange={(e)=>setExamDate(e.target.value)}
style={input}
/>

<input
value={hours}
onChange={(e)=>setHours(e.target.value)}
placeholder="Daily Free Hours Example: 4"
style={input}
/>

<button
onClick={generate}
style={btn}
>
{loading ? "Generating..." : "Generate Plan"}
</button>

<pre style={{
whiteSpace:"pre-wrap",
lineHeight:"1.7",
marginTop:"22px",
background:"#111827",
padding:"22px",
borderRadius:"16px",
minHeight:"220px"
}}>
{result}
</pre>

</div>

</div>

</div>
)}

const input={
width:"100%",
padding:"15px",
background:"#1e293b",
border:"none",
borderRadius:"12px",
color:"white",
marginBottom:"14px"
};

const btn={
padding:"14px 22px",
background:"#06b6d4",
border:"none",
borderRadius:"12px",
color:"white",
fontWeight:"bold",
cursor:"pointer"
};
