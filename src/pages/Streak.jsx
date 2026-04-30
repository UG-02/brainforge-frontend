import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";

export default function Streak(){

const [days,setDays] = useState(1);
const [last,setLast] = useState("");

useEffect(()=>{

const today = new Date().toDateString();

const savedLast = localStorage.getItem("lastVisit");
let savedDays = Number(localStorage.getItem("streakDays")) || 0;

if(savedLast !== today){

const yesterday = new Date();
yesterday.setDate(yesterday.getDate()-1);

if(savedLast === yesterday.toDateString()){
savedDays += 1;
}else{
savedDays = 1;
}

localStorage.setItem("streakDays",savedDays);
localStorage.setItem("lastVisit",today);
}

setDays(Number(localStorage.getItem("streakDays")) || 1);
setLast(localStorage.getItem("lastVisit"));

},[]);

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
Daily Streak
</h1>

<p style={{color:"#94a3b8"}}>
Stay consistent and grow every day
</p>

<div style={{
background:"#0f172a",
padding:"35px",
borderRadius:"22px",
marginTop:"28px",
maxWidth:"700px",
textAlign:"center"
}}>

<h1 style={{
fontSize:"80px",
margin:"0",
color:"#f59e0b"
}}>
🔥 {days}
</h1>

<p style={{
fontSize:"22px",
marginTop:"10px"
}}>
Day Learning Streak
</p>

<p style={{
color:"#94a3b8",
marginTop:"18px"
}}>
Last Active: {last}
</p>

</div>

<div style={{
marginTop:"28px",
background:"#0f172a",
padding:"24px",
borderRadius:"18px",
maxWidth:"700px"
}}>

<h2>Rewards</h2>

<ul style={{
lineHeight:"2",
color:"#cbd5e1",
paddingLeft:"18px"
}}>
<li>3 Days = 🌟 Focus Starter</li>
<li>7 Days = 🚀 Consistency Pro</li>
<li>15 Days = 🏆 Study Master</li>
<li>30 Days = 👑 Elite Learner</li>
</ul>

</div>

</div>

</div>
)}
