import "./login.css";

function Login(){
    return (
        <div className="login-container">
                <div className="login-header">
                    <div className="icon">
                        <i class="fa-sharp-duotone fa-regular fa-shield"></i>
                    </div>
                    <h2>Welfare Guard</h2>
                    <p>AI-Assisted Fraud Detection System</p>
                    <span className="sub-text">GOVERNMENT OF INDIA</span>
                </div>

                <div className="login-card">
                    <div className="rbac-badge">
                        <i class="fa-regular fa-lock"></i>
                        Role-Based Access Control
                    </div>
                </div> 
        </div>
    );
}
export default Login;