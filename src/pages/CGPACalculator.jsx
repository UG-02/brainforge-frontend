import { useState } from "react";
import Sidebar from "../components/Sidebar";

export default function CGPACalculator(){

const [rows,setRows] = useState([
{credit:"",grade:""}
]);

const [cgpa,setCgpa] = useState("");

function addRow(){
setRows([
...rows,
{credit:"",grade:""}
]);
}

function update(i,key,val){
const arr = [...rows];
arr[i][key] = val;
setRows(arr);
}

function gradePoint(g){

const map = {
O:10,
APLUS:9,
A:8,
BPLUS:7,
B:6,
C:5,
P:4,
F:0
};

return map[g] ?? 0;
}

function calc(){

let totalCredits = 0;
let totalPoints = 0;

rows.forEach(r=>{
const c = Number(r.credit) || 0;
const gp = gradePoint(r.grade);

totalCredits += c;
totalPoints += c * gp;
});

if(totalCredits === 0){
setCgpa("0");
return;
}

setCgpa(
(totalPoints/totalCredits).toFixed(2)
);
}

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
CGPA Calculator
</h1>

<p style={{color:"#94a3b8"}}>
Calculate weighted GPA instantly
</p>

<div style={{
background:"#0f172a",
padding:"24px",
borderRadius:"18px",
marginTop:"25px",
maxWidth:"900px"
}}>

{rows.map((r,i)=>(
<div
key={i}
style={{
display:"grid",
gridTemplateColumns:"1fr 1fr",
gap:"12px",
marginBottom:"12px"
}}
>

<input
placeholder="Credits"
value={r.credit}
onChange={(e)=>update(i,"credit",e.target.value)}
style={inputStyle}
/>

<select
value={r.grade}
onChange={(e)=>update(i,"grade",e.target.value)}
style={inputStyle}
>
<option value="">Select Grade</option>
<option value="O">O</option>
<option value="APLUS">A+</option>
<option value="A">A</option>
<option value="BPLUS">B+</option>
<option value="B">B</option>
<option value="C">C</option>
<option value="P">P</option>
<option value="F">F</option>
</select>

</div>
))}

<div style={{
display:"flex",
gap:"12px",
flexWrap:"wrap",
marginTop:"10px"
}}>

<button onClick={addRow} style={btnBlue}>
Add Subject
</button>

<button onClick={calc} style={btnGreen}>
Calculate
</button>

</div>

<div style={{
marginTop:"24px",
background:"#111827",
padding:"24px",
borderRadius:"16px",
textAlign:"center"
}}>

<h1 style={{
fontSize:"52px",
margin:"0",
color:"#22d3ee"
}}>
CGPA: {cgpa}
</h1>

</div>

</div>

</div>

</div>
)}
const inputStyle={
padding:"15px",
background:"#1e293b",
border:"none",
borderRadius:"12px",
color:"white"
};
const base={
padding:"14px 22px",
border:"none",
borderRadius:"12px",
color:"white",
fontWeight:"bold",
cursor:"pointer"
};
const btnBlue={...base,background:"#06b6d4"};
const btnGreen={...base,background:"#22c55e"};
