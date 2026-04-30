import { useState } from "react";
import Sidebar from "../components/Sidebar";

export default function Flashcards(){

const [question,setQuestion] = useState("");
const [answer,setAnswer] = useState("");
const [cards,setCards] = useState(
JSON.parse(localStorage.getItem("flashcards")) || []
);

function addCard(){

if(!question.trim() || !answer.trim()) return;

const arr = [
...cards,
{
q:question,
a:answer,
show:false
}
];

setCards(arr);

localStorage.setItem(
"flashcards",
JSON.stringify(arr)
);

setQuestion("");
setAnswer("");
}

function reveal(i){

const arr = [...cards];
arr[i].show = !arr[i].show;

setCards(arr);

localStorage.setItem(
"flashcards",
JSON.stringify(arr)
);
}

function remove(i){

const arr = cards.filter((_,idx)=>idx!==i);

setCards(arr);

localStorage.setItem(
"flashcards",
JSON.stringify(arr)
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
Flashcards
</h1>

<p style={{color:"#94a3b8"}}>
Memorize faster using active recall
</p>

<div style={{
background:"#0f172a",
padding:"24px",
borderRadius:"18px",
marginTop:"25px",
maxWidth:"900px"
}}>

<input
value={question}
onChange={(e)=>setQuestion(e.target.value)}
placeholder="Question"
style={inputStyle}
/>

<input
value={answer}
onChange={(e)=>setAnswer(e.target.value)}
placeholder="Answer"
style={inputStyle}
/>

<button
onClick={addCard}
style={btn}
>
Add Flashcard
</button>

</div>

<div style={{
marginTop:"22px",
maxWidth:"900px"
}}>

{cards.map((item,i)=>(
<div
key={i}
style={{
background:"#0f172a",
padding:"22px",
borderRadius:"18px",
marginBottom:"14px"
}}
>

<h3 style={{marginTop:"0"}}>
Q: {item.q}
</h3>

{item.show && (
<p style={{
color:"#22d3ee",
fontSize:"18px"
}}>
A: {item.a}
</p>
)}

<div style={{
display:"flex",
gap:"10px",
flexWrap:"wrap",
marginTop:"12px"
}}>

<button onClick={()=>reveal(i)} style={btn2}>
{item.show ? "Hide" : "Show"} Answer
</button>

<button
onClick={()=>remove(i)}
style={btn3}
>
Delete
</button>

</div>

</div>
))}

</div>

</div>

</div>
)}
const inputStyle={
width:"100%",
padding:"15px",
marginBottom:"12px",
background:"#1e293b",
border:"none",
borderRadius:"12px",
color:"white"
};
const btn={
padding:"14px 22px",
background:"#06b6d4",
border:"none",
borderRadius:"12px",
color:"white",
fontWeight:"bold",
cursor:"pointer"
};
const btn2={
padding:"10px 16px",
background:"#334155",
border:"none",
borderRadius:"10px",
color:"white",
cursor:"pointer"
};
const btn3={
padding:"10px 16px",
background:"#dc2626",
border:"none",
borderRadius:"10px",
color:"white",
cursor:"pointer"
};
