import "../styles/login.css"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

function Login(){

const navigate = useNavigate()

const [userID,setUserID] = useState("")
const [password,setPassword] = useState("")

const fillLogin = (id)=>{
setUserID(id)
setPassword("demo123")
}

const handleLogin = (e)=>{
e.preventDefault()

if(userID === "DEO101"){
navigate("/deo")
}

else if(userID === "INV201"){
navigate("/investigator")
}

else if(userID === "AUD301"){
navigate("/auditor")
}

else if(userID === "ADM401"){
navigate("/admin")
}

else{
alert("Invalid User ID")
}

}

return(

<>
<div className="page"></div>
<div className="background"></div>

<div className="container">

<div className="logo">
<i className="fa-solid fa-shield-halved"></i>
</div>

<h1>Welfare Guard</h1>

<p className="subtitle">
AI-Assisted Fraud Detection System
</p>

<p className="gov">
GOVERNMENT OF INDIA
</p>

<div className="login-card">

<div className="badge">
<i className="fa-solid fa-lock"></i>
Role-Based Access Control (RBAC)
</div>

<form onSubmit={handleLogin}>

<label>USER ID</label>

<input
type="text"
placeholder="Enter User ID (e.g., INV201)"
value={userID}
onChange={(e)=>setUserID(e.target.value)}
/>

<label>PASSWORD</label>

<input
type="password"
placeholder="Enter Password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
/>

<button type="submit">
<i className="fa-solid fa-lock"></i>
Secure Login
</button>

</form>

<div className="divider"></div>

<p className="demo-title">
<i className="fa-solid fa-user"></i>
DEMO CREDENTIALS
</p>

<div className="demo-grid">

<div
className="demo-box"
onClick={()=>fillLogin("DEO101")}
>
<b>DEO101</b>
<span>Data Entry Operator</span>
</div>

<div
className="demo-box"
onClick={()=>fillLogin("INV201")}
>
<b>INV201</b>
<span>Investigator</span>
</div>

<div
className="demo-box"
onClick={()=>fillLogin("AUD301")}
>
<b>AUD301</b>
<span>Auditor</span>
</div>

<div
className="demo-box"
onClick={()=>fillLogin("ADM401")}
>
<b>ADM401</b>
<span>System Administrator</span>
</div>

</div>

<p className="warning">
⚠ This is a functional prototype. All data is simulated.
Unauthorized access is prohibited.
</p>

</div>

<div className="footer">
• Segregation of Duties • Maker-Checker Model • Audit Logged
</div>

</div>
</>

)

}

export default Login