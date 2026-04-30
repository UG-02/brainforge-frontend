import { Link } from "react-router-dom";

export default function Navbar(){

return(
<div style={{
display:"flex",
justifyContent:"space-between",
alignItems:"center",
padding:"18px 30px",
position:"sticky",
top:"0",
zIndex:"1000",
background:"rgba(2,6,23,0.85)",
backdropFilter:"blur(10px)",
borderBottom:"1px solid rgba(255,255,255,0.06)"
}}>

<Link to="/" style={{textDecoration:"none"}}>
<h1 style={{
margin:"0",
fontSize:"30px",
fontWeight:"800",
color:"#22d3ee",
letterSpacing:"0.5px"
}}>
BrainForgeAI
</h1>
</Link>

<div style={{
display:"flex",
gap:"12px",
flexWrap:"wrap"
}}>

<Link to="/login">
<button style={{
padding:"12px 20px",
background:"#1e293b",
border:"none",
borderRadius:"12px",
color:"white",
fontWeight:"700",
cursor:"pointer"
}}>
Login
</button>
</Link>

<Link to="/register">
<button style={{
padding:"12px 20px",
background:"#06b6d4",
border:"none",
borderRadius:"12px",
color:"white",
fontWeight:"700",
cursor:"pointer"
}}>
Register
</button>
</Link>

</div>

</div>
)}
