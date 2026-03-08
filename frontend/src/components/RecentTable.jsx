function RecentTable(){

return(

<div>

<div className="table-box">

<h3>Recent Entries</h3>

<table>

<thead>
<tr>
<th>Beneficiary ID</th>
<th>Scheme</th>
<th>Date</th>
<th>Status</th>
</tr>
</thead>


<tbody>

<tr>
<td className="id">XXXX-XXXX-8821</td>
<td>PM Kisan</td>
<td>2026-02-21</td>
<td><span className="status pending">Pending Approval</span></td>
</tr>

<tr>
<td className="id">XXXX-XXXX-4455</td>
<td>NFSA</td>
<td>2026-02-21</td>
<td><span className="status approved">Approved</span></td>
</tr>

<tr>
<td className="id">XXXX-XXXX-7712</td>
<td>PMAY</td>
<td>2026-02-20</td>
<td><span className="status pending">Pending Approval</span></td>
</tr>

<tr>
<td className="id">XXXX-XXXX-3398</td>
<td>Ayushman Bharat</td>
<td>2026-02-20</td>
<td><span className="status rejected">Rejected</span></td>
</tr>

<tr>
<td className="id">XXXX-XXXX-9901</td>
<td>NREGA</td>
<td>2026-02-19</td>
<td><span className="status approved">Approved</span></td>
</tr>

</tbody>

</table>

</div>


<div className="warning">

⚠ Data Entry Operators cannot view fraud risk scores, approve/reject cases, or access audit logs.  
Segregation of duties enforced.

</div>

</div>

)

}

export default RecentTable