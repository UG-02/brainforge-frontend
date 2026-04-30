import Sidebar from "../components/Sidebar";

export default function Settings(){

function clearAll(){

localStorage.clear();
window.location.href="/";
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
Settings
</h1>

<div style={{
background:"#0f172a",
padding:"26px",
borderRadius:"20px",
marginTop:"24px",
maxWidth:"700px"
}}>

<button
onClick={clearAll}
style={{
padding:"15px 22px",
background:"#dc2626",
border:"none",
borderRadius:"12px",
color:"white",
fontWeight:"bold",
cursor:"pointer"
}}
>
Reset Full App Data
</button>

</div>

</div>

</div>
)}
