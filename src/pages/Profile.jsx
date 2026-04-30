import { useState } from "react";
import Sidebar from "../components/Sidebar";

export default function Profile(){

const current =
JSON.parse(localStorage.getItem("currentUser"));

const [name,setName] = useState(current?.name || "");
const [email] = useState(current?.email || "");
const [msg,setMsg] = useState("");

function save(){

const users =
JSON.parse(localStorage.getItem("users")) || [];

const updated = users.map(u =>
u.email === email
? {...u,name}
: u
);

localStorage.setItem(
"users",
JSON.stringify(updated)
);

localStorage.setItem(
"currentUser",
JSON.stringify({
...current,
name
})
);

setMsg("Profile Updated");
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
Profile
</h1>

<div style={{
background:"#0f172a",
padding:"26px",
borderRadius:"20px",
marginTop:"24px",
maxWidth:"700px"
}}>

<input
value={name}
onChange={(e)=>setName(e.target.value)}
style={input}
/>

<input
value={email}
disabled
style={input}
/>

<button
onClick={save}
style={btn}
>
Save Changes
</button>

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
const input={
width:"100%",
padding:"15px",
marginTop:"14px",
background:"#1e293b",
border:"none",
borderRadius:"12px",
color:"white"
};
const btn={
padding:"14px 22px",
marginTop:"18px",
background:"#06b6d4",
border:"none",
borderRadius:"12px",
color:"white",
fontWeight:"bold",
cursor:"pointer"
};
