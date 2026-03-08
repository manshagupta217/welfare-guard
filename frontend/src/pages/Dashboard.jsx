import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"
import Cards from "../components/KPICards"
import RecentTable from "../components/RecentTable"
import "../styles/dashboard.css"
import "../styles/Sidebar.css"

function Dashboard(){

return(

<div className="layout">

<Sidebar/>

<div className="main">

<Navbar/>

<h1 className="title">Data Entry Dashboard</h1>

<div className="kpi-container">
    <Cards></Cards>
{/* <Cards title="TOTAL BENEFICIARIES" value="67,243"/>
<Cards title="WELFARE SCHEMES" value="10"/>
<Cards title="RECORDS ADDED (WEEK)" value="12"/>
<Cards title="PENDING APPROVAL" value="3"/> */}

</div>

<RecentTable/>

</div>

</div>

)

}

export default Dashboard