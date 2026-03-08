function Navbar(){

  return(

    <div className="topbar">

      <div className="alerts">
        <span className="alert-icon">
          <i className="fa-solid fa-bell"></i> 6 active alerts
        </span>

        <span className="critical">2 Critical</span>
      </div>

      <div className="user">
        <div className="user-info">

          <span className="user-name">
            Anita Deshmukh
          </span>

          <span className="user-role">
            Data Entry Operator • Session Active
          </span>

        </div>

        <div className="avatar">
          AD
        </div>

      </div>

    </div>

  )

}

export default Navbar
