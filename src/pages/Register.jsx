import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Register(){

const nav = useNavigate();

const [name,setName] = useState("");
const [email,setEmail] = useState("");
const [password,setPassword] = useState("");

function register(){

if(!name || !email || !password) return;

const users =
JSON.parse(localStorage.getItem("users")) || [];

users.push({
name,email,password
});

localStorage.setItem(
"users",
JSON.stringify(users)
);

nav("/login");
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
Register
</h1>

<input
placeholder="Name"
value={name}
onChange={(e)=>setName(e.target.value)}
style={input}
/>

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
onClick={register}
style={btn}
>
Create Account
</button>

<p style={{
marginTop:"18px",
color:"#94a3b8"
}}>
Already account?{" "}
<Link to="/login" style={{color:"#22d3ee"}}>
Login
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
