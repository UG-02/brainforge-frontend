const API = import.meta.env.VITE_API_URL 

export async function postData(url,data={}){

const res = await fetch(`${API}${url}`,{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify(data)
});

if(!res.ok){
throw new Error("API Error");
}

return await res.json();
}

export async function askAI(message){

const res = await fetch(`${API}/chat`,{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
message
})
});

if(!res.ok){
throw new Error("AI Error");
}

return await res.json();
}
