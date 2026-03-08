import "../styles/Beneficiary.css"

const data = [

{ id:"XXXX-XXXX-8840", vid:"VID-321455", schemes:2, status:"Flagged", district:"Kolkata"},
{ id:"XXXX-XXXX-9171", vid:"VID-999283", schemes:3, status:"Flagged", district:"Chennai"},
{ id:"XXXX-XXXX-3981", vid:"VID-634488", schemes:3, status:"Flagged", district:"Bhopal"},
{ id:"XXXX-XXXX-8278", vid:"VID-757851", schemes:4, status:"Flagged", district:"Hyderabad"},
{ id:"XXXX-XXXX-8611", vid:"VID-238983", schemes:3, status:"Flagged", district:"Delhi"},
{ id:"XXXX-XXXX-7302", vid:"VID-144787", schemes:2, status:"Flagged", district:"Bangalore"},
{ id:"XXXX-XXXX-2173", vid:"VID-392467", schemes:5, status:"Flagged", district:"Bhopal"},
{ id:"XXXX-XXXX-8829", vid:"VID-139180", schemes:1, status:"Flagged", district:"Chennai"},
{ id:"XXXX-XXXX-7940", vid:"VID-233068", schemes:3, status:"Flagged", district:"Bangalore"},
{ id:"XXXX-XXXX-5964", vid:"VID-489181", schemes:5, status:"Flagged", district:"Jaipur"},

{ id:"XXXX-XXXX-8384", vid:"VID-212032", schemes:5, status:"Flagged", district:"Mumbai"},
{ id:"XXXX-XXXX-8885", vid:"VID-181502", schemes:4, status:"Flagged", district:"Pune"},
{ id:"XXXX-XXXX-4533", vid:"VID-307546", schemes:1, status:"Flagged", district:"Jaipur"},
{ id:"XXXX-XXXX-6124", vid:"VID-479557", schemes:4, status:"Flagged", district:"Bhopal"},
{ id:"XXXX-XXXX-2303", vid:"VID-709449", schemes:4, status:"Flagged", district:"Kolkata"},
{ id:"XXXX-XXXX-4086", vid:"VID-766938", schemes:1, status:"Flagged", district:"Mumbai"},
{ id:"XXXX-XXXX-9906", vid:"VID-482930", schemes:2, status:"Flagged", district:"Kolkata"},

{ id:"XXXX-XXXX-1726", vid:"VID-504478", schemes:4, status:"Under Review", district:"Chennai"},
{ id:"XXXX-XXXX-2355", vid:"VID-571635", schemes:5, status:"Under Review", district:"Bhopal"},
{ id:"XXXX-XXXX-9568", vid:"VID-682560", schemes:3, status:"Under Review", district:"Lucknow"},
{ id:"XXXX-XXXX-2554", vid:"VID-844107", schemes:2, status:"Under Review", district:"Bhopal"},
{ id:"XXXX-XXXX-6675", vid:"VID-566374", schemes:3, status:"Under Review", district:"Bangalore"},
{ id:"XXXX-XXXX-9095", vid:"VID-485751", schemes:3, status:"Under Review", district:"Kolkata"},
{ id:"XXXX-XXXX-3170", vid:"VID-915216", schemes:2, status:"Under Review", district:"Hyderabad"},

{ id:"XXXX-XXXX-6505", vid:"VID-366524", schemes:3, status:"Active", district:"Lucknow"},
{ id:"XXXX-XXXX-8830", vid:"VID-365487", schemes:5, status:"Active", district:"Bangalore"},
{ id:"XXXX-XXXX-7604", vid:"VID-596581", schemes:3, status:"Active", district:"Bangalore"},
{ id:"XXXX-XXXX-4257", vid:"VID-697413", schemes:5, status:"Active", district:"Pune"},
{ id:"XXXX-XXXX-8603", vid:"VID-612118", schemes:1, status:"Active", district:"Lucknow"},
{ id:"XXXX-XXXX-5106", vid:"VID-369200", schemes:4, status:"Active", district:"Kolkata"},
{ id:"XXXX-XXXX-7550", vid:"VID-656926", schemes:4, status:"Active", district:"Jaipur"},
{ id:"XXXX-XXXX-9869", vid:"VID-688787", schemes:5, status:"Active", district:"Chennai"},
{ id:"XXXX-XXXX-2684", vid:"VID-865942", schemes:5, status:"Active", district:"Delhi"},
{ id:"XXXX-XXXX-1572", vid:"VID-281300", schemes:2, status:"Active", district:"Jaipur"},
{ id:"XXXX-XXXX-4226", vid:"VID-954588", schemes:1, status:"Active", district:"Delhi"},
{ id:"XXXX-XXXX-8456", vid:"VID-275023", schemes:5, status:"Active", district:"Chennai"},
{ id:"XXXX-XXXX-5749", vid:"VID-759568", schemes:2, status:"Active", district:"Jaipur"},
{ id:"XXXX-XXXX-2033", vid:"VID-740395", schemes:1, status:"Active", district:"Mumbai"},
{ id:"XXXX-XXXX-9583", vid:"VID-158028", schemes:2, status:"Active", district:"Hyderabad"},

{ id:"XXXX-XXXX-4123", vid:"VID-481293", schemes:3, status:"Active", district:"Delhi"},
{ id:"XXXX-XXXX-7256", vid:"VID-620144", schemes:2, status:"Active", district:"Pune"},
{ id:"XXXX-XXXX-3345", vid:"VID-558921", schemes:4, status:"Active", district:"Bhopal"},
{ id:"XXXX-XXXX-1123", vid:"VID-778412", schemes:3, status:"Active", district:"Mumbai"},
{ id:"XXXX-XXXX-6742", vid:"VID-990124", schemes:1, status:"Active", district:"Lucknow"},
{ id:"XXXX-XXXX-2201", vid:"VID-664823", schemes:2, status:"Active", district:"Kolkata"},
{ id:"XXXX-XXXX-5098", vid:"VID-482191", schemes:5, status:"Active", district:"Bangalore"},
{ id:"XXXX-XXXX-3310", vid:"VID-519833", schemes:3, status:"Active", district:"Chennai"},
{ id:"XXXX-XXXX-4402", vid:"VID-208334", schemes:4, status:"Active", district:"Hyderabad"}

]



function BeneficiarySearch(){

return(

<div className="search-page">

<h2>Beneficiary Search</h2>

<p className="subtitle">
Search by Masked Beneficiary ID or Virtual ID
</p>

<div className="search-bar">

<input
className="search-input"
placeholder="Search by Masked ID (XXXX-XXXX-1234) or Virtual ID..."
/>

<div className="filters">
<button className="active">All</button>
<button>Active</button>
<button>Under Review</button>
<button>Flagged</button>
</div>

</div>

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

{data.map((item,index)=>{

const statusClass =
item.status === "Flagged"
? "flagged"
: item.status === "Active"
? "active"
: "under-review"

return(

<tr key={index}>

<td className="id">{item.id}</td>
<td>{item.vid}</td>
<td>{item.schemes}</td>

<td>
<span className={`status ${statusClass}`}>
{item.status}
</span>
</td>

<td>{item.district}</td>

</tr>

)

})}

</tbody>

</table>

</div>

</div>

)

}

export default BeneficiarySearch