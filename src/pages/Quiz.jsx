import { useState } from "react";
import Sidebar from "../components/Sidebar";
import { postData } from "../api";

export default function Quiz(){

const [topic,setTopic] = useState("");
const [quiz,setQuiz] = useState([]);
const [answers,setAnswers] = useState({});
const [result,setResult] = useState("");
const [loading,setLoading] = useState(false);

async function generate(){

if(!topic.trim()) return;

setLoading(true);
setQuiz([]);
setResult("");
setAnswers({});

try{

const data = await postData("/chat",{
message:`
Create 5 MCQ quiz on ${topic}

Strict JSON format only:

[
{
"question":"...",
"options":["A...","B...","C...","D..."],
"answer":"A..."
}
]
`
});

const text = data.result
.replace(/```json/g,"")
.replace(/```/g,"")
.trim();

const parsed = JSON.parse(text);

setQuiz(parsed);

}catch(err){
setResult("AI failed to generate quiz");
}

setLoading(false);
}

function choose(qi,val){
setAnswers({
...answers,
[qi]:val
});
}

function submitQuiz(){

let score = 0;
let report = "";

quiz.forEach((q,i)=>{

const user = answers[i];

if(user === q.answer){
score++;
}else{
report += `Q${i+1}: ${q.question}\n`;
report += `Your Answer: ${user || "Not Answered"}\n`;
report += `Correct Answer: ${q.answer}\n`;
report += `Explanation: ${q.answer} is correct based on ${topic} concepts.\n\n`;
}

});

setResult(
`Score: ${score}/${quiz.length}\n\nWrong Answers Review:\n\n${report || "Perfect Score 🔥"}`
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
AI Quiz Generator
</h1>

<p style={{color:"#94a3b8"}}>
Generate real quizzes instantly
</p>

<div style={{
background:"#0f172a",
padding:"24px",
borderRadius:"18px",
marginTop:"24px",
maxWidth:"1100px"
}}>

<input
value={topic}
onChange={(e)=>setTopic(e.target.value)}
placeholder="Enter topic..."
style={input}
/>

<button onClick={generate} style={btn}>
{loading ? "Generating..." : "Generate Quiz"}
</button>

{quiz.length > 0 && (
<div style={{marginTop:"25px"}}>

{quiz.map((q,qi)=>(
<div
key={qi}
style={{
background:"#111827",
padding:"18px",
borderRadius:"14px",
marginBottom:"16px"
}}
>

<h3>{qi+1}. {q.question}</h3>

{q.options.map((op,oi)=>(
<label
key={oi}
style={{
display:"block",
marginTop:"10px",
cursor:"pointer"
}}
>
<input
type="radio"
name={"q"+qi}
checked={answers[qi]===op}
onChange={()=>choose(qi,op)}
/>{" "}
{op}
</label>
))}

</div>
))}

<button onClick={submitQuiz} style={btn}>
Submit Quiz
</button>

</div>
)}

<pre style={{
whiteSpace:"pre-wrap",
lineHeight:"1.7",
marginTop:"22px",
background:"#111827",
padding:"22px",
borderRadius:"16px",
minHeight:"180px"
}}>
{result}
</pre>

</div>

</div>

</div>
)}

const input={
width:"100%",
padding:"15px",
background:"#1e293b",
border:"none",
borderRadius:"12px",
color:"white",
marginBottom:"14px"
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
