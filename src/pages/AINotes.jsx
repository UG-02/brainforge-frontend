import { useState } from "react";
import Sidebar from "../components/Sidebar";
import { postData } from "../api";

export default function AINotes(){

const [topic,setTopic] = useState("");
const [result,setResult] = useState("");
const [loading,setLoading] = useState(false);

async function generate(){

if(!topic.trim()) return;

setLoading(true);
setResult("");

try{
const data = await postData("/notes",{topic});
setResult(data.result);
}
catch{
setResult("Server Error");
}

setLoading(false);
}

return(
<div style={{display:"flex",minHeight:"100vh",background:"#020617",color:"white"}}>

<Sidebar/>

<div style={{flex:1,padding:"30px"}}>

<h1 style={{fontSize:"38px"}}>AI Notes Generator</h1>

<input
value={topic}
onChange={(e)=>setTopic(e.target.value)}
placeholder="Enter topic"
style={{
width:"100%",
padding:"15px",
background:"#1e293b",
border:"none",
borderRadius:"12px",
color:"white",
marginTop:"20px"
}}
/>

<button
onClick={generate}
style={{
marginTop:"16px",
padding:"14px 22px",
background:"#06b6d4",
border:"none",
borderRadius:"12px",
color:"white",
fontWeight:"bold"
}}
>
{loading ? "Generating..." : "Generate"}
</button>

<pre style={{
whiteSpace:"pre-wrap",
lineHeight:"1.7",
marginTop:"20px",
background:"#111827",
padding:"20px",
borderRadius:"14px"
}}>
{result}
</pre>

</div>

</div>
)}
