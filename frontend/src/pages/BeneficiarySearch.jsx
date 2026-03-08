import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"
import "../styles/Beneficiary.css"

function BeneficiarySearch(){

const data = [
{ id:"XXXX-XXXX-8840", vid:"VID-321455", schemes:2, status:"Flagged", district:"Kolkata"},
{ id:"XXXX-XXXX-9171", vid:"VID-999283", schemes:3, status:"Flagged", district:"Chennai"},
{ id:"XXXX-XXXX-3981", vid:"VID-634488", schemes:3, status:"Flagged", district:"Bhopal"},
{ id:"XXXX-XXXX-8278", vid:"VID-757851", schemes:4, status:"Flagged", district:"Hyderabad"},
]

return(

<div className="layout">

<Sidebar/>

<div className="main">

<Navbar/>

<div className="search-page">

<h2>Beneficiary Search</h2>
<p>Search by Masked Beneficiary ID or Virtual ID</p>

<input
className="search-input"
placeholder="Search by Masked ID (XXXX-XXXX-1234) or Virtual ID..."
/>

<div className="table-box">

<table>

<thead>
<tr>
<th>Masked ID</th>
<th>Virtual ID</th>
<th>Schemes</th>
<th>Status</th>
<th>District</th>
</tr>
</thead>

<tbody>

{data.map((item,index)=>(
<tr key={index}>
<td className="id">{item.id}</td>
<td>{item.vid}</td>
<td>{item.schemes}</td>
<td>
<span className="status flagged">{item.status}</span>
</td>
<td>{item.district}</td>
</tr>
))}

</tbody>

</table>

</div>

</div>

</div>

</div>

)

}

export default BeneficiarySearch