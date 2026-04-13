import "./login.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Login(){
    const navigate = useNavigate();
    const [userID, setUserID] = useState("");
    const [password, setPassword] = useState("");

    const fillLogin = (id) => {
        setUserID(id);
        setPassword("demo123");
    };

    const handleLogin = (e) => {
        e.preventDefault();
        if(userID === "DEO101"){
            navigate("/deo");
        }
        else if(userID === "INV201"){
            navigate("/investigator");
        }
        else if(userID === "AUD301"){
            navigate("/auditor");
        }
        else if(userID === "ADM401"){
            navigate("/admin");
        }
        else{
            alert("Invalid User ID");
        }
    };

    return (
        <div className="page">
            <div className="background"></div>
        <div className="login-container">
                <div className="login-header">
                    <div className="icon-box">
                        <i class="fa-sharp-duotone fa-regular fa-shield"></i>
                    </div>
                    <h1>Welfare Guard</h1>
                    <p>AI-Assisted Fraud Detection System</p>
                    <span className="sub-text">GOVERNMENT OF INDIA</span>
                </div>

                <div className="login-card">
                    <div className="rbac-badge">
                        <i class="fa-regular fa-lock"></i> 
                         Role-Based Access Control
                    </div>
                    <form onsubmit={handleLogin}>
                        <label>USER ID</label>
                        <br></br>
                        <input type="text" value={userID} onChange={(e) => setUserID(e.target.value)} placeholder="Enter your user ID (e.g., INV201)" required />
                    </form>

                    <button> <i class="fa-regular fa-lock"></i>Secure Login</button>

                    <hr />

                    <div className="demo-section">
                        <p>DEMO CREDENTIALS</p>
                        <div className="demo-grid">
                            <div className="demo-box" onClick={()=> fillLogin("DEO101")} ><b>DEO101 </b>
                            <span>Data Entry Operator</span></div>
                            <div className="demo-box" onClick={()=> fillLogin("INV201")} ><b>INV201 </b>
                            <span>Investigator</span></div>
                            <div className="demo-box" onClick={()=> fillLogin("AUD301")} ><b>AUD301 </b>
                            <span>Auditor</span></div>
                            <div className="demo-box" onClick={()=> fillLogin("ADM401")} ><b>ADM401 </b>
                            <span>System Administrator</span></div>
                        </div>
                    </div>
                    <div className="footer">
                        • Segregation of Duties • Maker-Checker Model • Audit Logged
                    </div>
                </div> 
        </div>
        </div>
    );
}
export default Login;