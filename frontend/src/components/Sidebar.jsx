import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Sidebar.css";

function Sidebar() {

const [collapsed,setCollapsed] = useState(false);
const location = useLocation();

function toggleSidebar(){
setCollapsed(!collapsed);
}

return (

<div className={`sidebar ${collapsed ? "collapsed" : ""}`}>

{/* LOGO */}

<div className="logo-section">

<div className="logo-icon">
<i className="fa-solid fa-shield-halved"></i>
</div>

<div className="logo-text">
<h2>WELFARE GUARD</h2>
<p>AI FRAUD DETECTION</p>
</div>

</div>


{/* MENU */}

<ul className="menu">

<li className={`menu-item ${location.pathname === "/deo" ? "active" : ""}`}>

<Link to="/deo">

<i className="fa-solid fa-bars"></i>
<span>Dashboard</span>

</Link>

</li>


<li className={`menu-item ${location.pathname.includes("/deo/search") ? "active" : ""}`}>

<Link to="/deo/search">

<i className="fa-solid fa-magnifying-glass"></i>
<span>Beneficiary Search</span>

</Link>

</li>

</ul>


{/* BOTTOM */}

<div className="bottom-menu">

<div className="collapse" onClick={toggleSidebar}>

<i className={`fa-solid ${collapsed ? "fa-angle-right" : "fa-angle-left"}`}></i>

<span>Collapse</span>

</div>

<div className="logout">

<i className="fa-solid fa-arrow-right-from-bracket"></i>
<span>Logout</span>

</div>

</div>

</div>

)

}

export default Sidebar;