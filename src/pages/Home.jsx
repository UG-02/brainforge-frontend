import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Home(){

const texts = [
"AI Notes",
"Study Planner",
"Quiz Generator",
"Career Coach"
];

const [index,setIndex] = useState(0);

useEffect(()=>{
const t = setInterval(()=>{
setIndex(prev=>(prev+1)%texts.length);
},2000);

return ()=>clearInterval(t);
},[]);

return(
<div style={wrap}>

<div style={bg}></div>

<div style={content}>

<h1 style={title}>
BrainForgeAI
</h1>

<p style={subtitle}>
Your AI-powered platform for{" "}
<span style={{color:"#22d3ee"}}>
{texts[index]}
</span>
{" "}and student success.
</p>

<div style={btnRow}>

<Link to="/login" style={btnPrimary}>
Login
</Link>

<Link to="/register" style={btnSecondary}>
Register
</Link>

</div>

<div style={grid}>

{cards.map((c,i)=>(
<div key={i} style={card}>
<h3>{c.title}</h3>
<p>{c.desc}</p>
</div>
))}

</div>

<div style={footer}>
Built by CIT Kodagu students • © 2026 BrainForgeAI
</div>

</div>

</div>
)}

const cards = [
{title:"AI Notes",desc:"Smart summaries instantly"},
{title:"Study Planner",desc:"Daily plans generated"},
{title:"Quiz Generator",desc:"Practice faster"},
{title:"Career Coach",desc:"Roadmaps & growth"}
];

const wrap={
minHeight:"100vh",
display:"flex",
justifyContent:"center",
alignItems:"center",
background:"#020617",
color:"white",
padding:"30px",
position:"relative",
overflow:"hidden"
};

const bg={
position:"absolute",
width:"600px",
height:"600px",
background:"radial-gradient(circle,#06b6d4 0%,transparent 60%)",
filter:"blur(120px)",
opacity:"0.25",
top:"-200px",
left:"-200px"
};

const content={
textAlign:"center",
maxWidth:"900px",
zIndex:2,
animation:"fadeIn 1s ease"
};

const title={
fontSize:"72px",
marginBottom:"10px",
color:"#22d3ee",
animation:"slideDown 0.8s ease"
};

const subtitle={
fontSize:"22px",
color:"#cbd5e1",
marginBottom:"30px"
};

const btnRow={
display:"flex",
justifyContent:"center",
gap:"16px",
marginBottom:"40px",
flexWrap:"wrap"
};

const btnPrimary={
padding:"14px 26px",
background:"#06b6d4",
borderRadius:"12px",
color:"white",
textDecoration:"none",
fontWeight:"bold",
transition:"0.3s"
};

const btnSecondary={
padding:"14px 26px",
background:"#1e293b",
borderRadius:"12px",
color:"white",
textDecoration:"none",
fontWeight:"bold"
};

const grid={
display:"grid",
gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))",
gap:"16px"
};

const card={
background:"rgba(255,255,255,0.05)",
padding:"18px",
borderRadius:"16px",
backdropFilter:"blur(10px)",
transition:"0.3s"
};

const footer={
marginTop:"40px",
color:"#64748b",
fontSize:"14px"
};
