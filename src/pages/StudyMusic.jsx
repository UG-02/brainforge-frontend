import { useState } from "react";
import Sidebar from "../components/Sidebar";

export default function StudyMusic(){

const [mode,setMode] = useState("lofi");

const links = {
lofi:"https://www.youtube.com/embed/jfKfPfyJRdk",
rain:"https://www.youtube.com/embed/mPZkdNFkNps",
piano:"https://www.youtube.com/embed/1ZYbU82GVz4",
nature:"https://www.youtube.com/embed/eKFTSSKCzWA"
};

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
Study Music Zone
</h1>

<p style={{color:"#94a3b8"}}>
Background sounds for deep focus
</p>

<div style={{
display:"flex",
gap:"12px",
flexWrap:"wrap",
marginTop:"22px"
}}>

<Button t="Lofi" on={()=>setMode("lofi")}/>
<Button t="Rain" on={()=>setMode("rain")}/>
<Button t="Piano" on={()=>setMode("piano")}/>
<Button t="Nature" on={()=>setMode("nature")}/>

</div>

<div style={{
background:"#0f172a",
padding:"20px",
borderRadius:"20px",
marginTop:"28px",
maxWidth:"900px"
}}>

<iframe
width="100%"
height="480"
src={links[mode]}
title="Study Music"
style={{
border:"none",
borderRadius:"16px"
}}
allow="autoplay"
allowFullScreen
></iframe>

</div>

<div style={{
marginTop:"25px",
background:"#0f172a",
padding:"22px",
borderRadius:"18px",
maxWidth:"900px"
}}>

<h2>Best Use</h2>

<ul style={{
lineHeight:"2",
color:"#cbd5e1",
paddingLeft:"18px"
}}>
<li>Lofi → Reading + writing</li>
<li>Rain → Deep concentration</li>
<li>Piano → Problem solving</li>
<li>Nature → Relaxed revision</li>
</ul>

</div>

</div>

</div>
)}
function Button({t,on}){
return(
<button
onClick={on}
style={{
padding:"14px 22px",
background:"#06b6d4",
border:"none",
borderRadius:"12px",
color:"white",
fontWeight:"bold",
cursor:"pointer"
}}
>
{t}
</button>
)}
