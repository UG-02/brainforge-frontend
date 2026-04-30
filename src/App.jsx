import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import AINotes from "./pages/AINotes";
import Planner from "./pages/Planner";
import Quiz from "./pages/Quiz";
import Roadmap from "./pages/Roadmap";
import CareerAI from "./pages/CareerAI";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";

function PrivateRoute({children}){
const user = localStorage.getItem("currentUser");
return user ? children : <Navigate to="/login" />;
}

export default function App(){
return(
<BrowserRouter>
<Routes>

<Route path="/" element={<Home/>}/>
<Route path="/login" element={<Login/>}/>
<Route path="/register" element={<Register/>}/>

<Route path="/dashboard" element={<PrivateRoute><Dashboard/></PrivateRoute>}/>
<Route path="/notes" element={<PrivateRoute><AINotes/></PrivateRoute>}/>
<Route path="/planner" element={<PrivateRoute><Planner/></PrivateRoute>}/>
<Route path="/quiz" element={<PrivateRoute><Quiz/></PrivateRoute>}/>
<Route path="/roadmap" element={<PrivateRoute><Roadmap/></PrivateRoute>}/>
<Route path="/career" element={<PrivateRoute><CareerAI/></PrivateRoute>}/>
<Route path="/profile" element={<PrivateRoute><Profile/></PrivateRoute>}/>
<Route path="/settings" element={<PrivateRoute><Settings/></PrivateRoute>}/>

<Route path="*" element={<Navigate to="/" />} />

</Routes>
</BrowserRouter>
)}
