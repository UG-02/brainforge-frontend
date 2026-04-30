import { useState } from "react";
import Sidebar from "../components/Sidebar";

export default function Resources(){

const tabs = {
Coding:[
["LeetCode","https://leetcode.com"],
["GeeksforGeeks","https://geeksforgeeks.org"],
["Codeforces","https://codeforces.com"]
],
Study:[
["Khan Academy","https://khanacademy.org"],
["Coursera","https://coursera.org"],
["MIT OCW","https://ocw.mit.edu"]
],
Career:[
["LinkedIn","https://linkedin.com"],
["Internshala","https://internshala.com"],
["Naukri","https://naukri.com"]
]
};

const [type,setType] = useState("Coding");

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
Resources Hub
</h1>

<p style={{color:"#94a3b8"}}>
Useful platforms for learning and growth
</p>

<div style={{
display:"flex",
gap:"12px",
flexWrap:"wrap",
marginTop:"24px"
}}>

{Object.keys(tabs).map(k=>(
<button
key={k}
onClick={()=>setType(k)}
style={{
padding:"12px 18px",
background:type===k?"#06b6d4":"#1e293b",
border:"none",
borderRadius:"12px",
color:"white",
fontWeight:"bold",
cursor:"pointer"
}}
>
{k}
</button>
))}

</div>

<div style={{
marginTop:"24px",
maxWidth:"900px"
}}>

{tabs[type].map((item,i)=>(
<a
key={i}
href={item[1]}
target="_blank"
rel="noreferrer"
style={{
display:"block",
background:"#0f172a",
padding:"20px",
borderRadius:"16px",
marginBottom:"14px",
textDecoration:"none",
color:"white"
}}
>
<h3 style={{margin:"0 0 8px 0"}}>
{item[0]}
</h3>

<p style={{
margin:"0",
color:"#22d3ee"
}}>
{item[1]}
</p>

</a>
))}

</div>

</div>

</div>
)}
