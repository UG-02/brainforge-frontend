import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Login(){

const nav = useNavigate();

const [email,setEmail] = useState("");
const [password,setPassword] = useState("");
const [msg,setMsg] = useState("");

function login(){

const users =
JSON.parse(localStorage.getItem("users")) || [];

const user = users.find(
u => u.email === email && u.password === password
);

if(!user){
setMsg("Invalid credentials");
return;
}

localStorage.setItem(
"currentUser",
JSON.stringify(user)
);

nav("/dashboard");
}

return(
<div style={{
minHeight:"100vh",
background:"#020617",
display:"flex",
justifyContent:"center",
alignItems:"center",
padding:"20px"
}}>

<div style={{
width:"420px",
background:"#0f172a",
padding:"30px",
borderRadius:"20px",
color:"white"
}}>

<h1 style={{
marginTop:"0",
fontSize:"38px"
}}>
Login
</h1>

<input
placeholder="Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
style={input}
/>

<input
type="password"
placeholder="Password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
style={input}
/>

<button
onClick={login}
style={btn}
>
Login
</button>

<p style={{
color:"#ef4444",
marginTop:"14px"
}}>
{msg}
</p>

<p style={{
marginTop:"18px",
color:"#94a3b8"
}}>
No account?{" "}
<Link to="/register" style={{color:"#22d3ee"}}>
Register
</Link>
</p>

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
width:"100%",
padding:"15px",
marginTop:"18px",
background:"#06b6d4",
border:"none",
borderRadius:"12px",
color:"white",
fontWeight:"bold",
cursor:"pointer"
};
