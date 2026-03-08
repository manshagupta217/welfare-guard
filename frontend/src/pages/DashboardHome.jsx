import Cards from "../components/KPICards"
import RecentTable from "../components/RecentTable"
import "../styles/dashboard.css";

function DashboardHome(){

return(

<div className="layout">

<Sidebar/>

<div className="main">

<Navbar/>

<h1 className="title">Data Entry Dashboard</h1>

<div className="kpi-container">
    <Cards/>
    </div>

<RecentTable/>

</div>

</div>

)

}

export default DashboardHome