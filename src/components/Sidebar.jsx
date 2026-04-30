import { Link, useNavigate, useLocation } from "react-router-dom";

export default function Sidebar(){

const nav = useNavigate();
const location = useLocation();
const user = JSON.parse(localStorage.getItem("currentUser"));

function logout(){
localStorage.removeItem("currentUser");
nav("/");
}

function item(path,label,emoji){

const active = location.pathname === path;

return(
<Link
to={path}
style={{
display:"flex",
alignItems:"center",
gap:"10px",
padding:"14px 16px",
marginBottom:"12px",
background: active ? "#06b6d4" : "#1e293b",
borderRadius:"14px",
color:"white",
fontWeight:"700",
textDecoration:"none"
}}
>
<span>{emoji}</span>
<span>{label}</span>
</Link>
);
}

return(
<div style={{
width:"290px",
minHeight:"100vh",
background:"#0f172a",
padding:"24px",
color:"white",
borderRight:"1px solid rgba(255,255,255,.05)",
overflowY:"auto"
}}>

<h1 style={{
margin:"0",
fontSize:"32px",
color:"#22d3ee"
}}>
BrainForgeAI
</h1>

<p style={{
marginTop:"10px",
marginBottom:"28px",
color:"#94a3b8"
}}>
Welcome {user?.name || "Student"}
</p>

{item("/dashboard","Dashboard","📊")}
{item("/notes","AI Notes","📘")}
{item("/planner","Study Planner","📅")}
{item("/quiz","AI Quiz","🧠")}
{item("/roadmap","Roadmap","🛣️")}
{item("/career","Career Coach","💼")}
{item("/profile","Profile","👤")}
{item("/settings","Settings","⚙️")}

<button
onClick={logout}
style={{
width:"100%",
padding:"14px",
marginTop:"20px",
background:"#dc2626",
border:"none",
borderRadius:"14px",
color:"white",
fontWeight:"800",
cursor:"pointer"
}}
>
Logout
</button>

<div style={{
marginTop:"28px",
padding:"18px",
background:"#111827",
borderRadius:"16px"
}}>

<p style={{
margin:"0",
fontSize:"14px",
color:"#94a3b8"
}}>
BrainForge AI Agent
</p>

<h4 style={{
marginTop:"10px",
lineHeight:"1.5"
}}>
Plan smart. Learn fast. Win big.
</h4>

</div>

</div>
)}
