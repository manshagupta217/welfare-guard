function Cards(){

  return(

    <div className="cards">

      <div className="card green">
        <p className="label">TOTAL BENEFICIARIES</p>
        <h2>67,243</h2>
        <span>Across all schemes</span>
      </div>


      <div className="card">
        <p className="label">WELFARE SCHEMES</p>
        <h2>10</h2>
        <span>Active programmes</span>
      </div>


      <div className="card">
        <p className="label">RECORDS ADDED (WEEK)</p>
        <h2>12</h2>
        <span>By you</span>
      </div>


      <div className="card orange">
        <p className="label">PENDING APPROVAL</p>
        <h2>3</h2>
        <span>Awaiting review</span>
      </div>

    </div>

  )

}

export default Cards