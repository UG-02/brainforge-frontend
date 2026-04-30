import { useState } from "react";
import Sidebar from "../components/Sidebar";

export default function Bookmarks(){

const [title,setTitle] = useState("");
const [link,setLink] = useState("");

const [items,setItems] = useState(
JSON.parse(localStorage.getItem("bookmarks")) || []
);

function addBookmark(){

if(!title.trim() || !link.trim()) return;

const arr = [
...items,
{
title,
link
}
];

setItems(arr);

localStorage.setItem(
"bookmarks",
JSON.stringify(arr)
);

setTitle("");
setLink("");
}

function remove(i){

const arr = items.filter((_,idx)=>idx!==i);

setItems(arr);

localStorage.setItem(
"bookmarks",
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
Study Bookmarks
</h1>

<p style={{color:"#94a3b8"}}>
Save useful websites and resources
</p>

<div style={{
background:"#0f172a",
padding:"24px",
borderRadius:"18px",
marginTop:"25px",
maxWidth:"900px"
}}>

<input
value={title}
onChange={(e)=>setTitle(e.target.value)}
placeholder="Resource Title"
style={inputStyle}
/>

<input
value={link}
onChange={(e)=>setLink(e.target.value)}
placeholder="https://example.com"
style={inputStyle}
/>

<button
onClick={addBookmark}
style={btn}
>
Add Bookmark
</button>

</div>

<div style={{
marginTop:"22px",
maxWidth:"900px"
}}>

{items.map((item,i)=>(
<div
key={i}
style={{
background:"#0f172a",
padding:"20px",
borderRadius:"16px",
marginBottom:"12px",
display:"flex",
justifyContent:"space-between",
gap:"12px",
flexWrap:"wrap",
alignItems:"center"
}}
>

<div>
<h3 style={{margin:"0"}}>
{item.title}
</h3>

<a
href={item.link}
target="_blank"
rel="noreferrer"
style={{
color:"#22d3ee",
textDecoration:"none"
}}
>
{item.link}
</a>
</div>

<button
onClick={()=>remove(i)}
style={del}
>
Delete
</button>

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
const del={
padding:"10px 16px",
background:"#dc2626",
border:"none",
borderRadius:"10px",
color:"white",
cursor:"pointer"
};
