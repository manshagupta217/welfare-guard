import { BrowserRouter, Routes, Route } from "react-router-dom"

import Dashboard from "./pages/Dashboard"
import Login from "./pages/Login"
import BeneficiarySearch from "./pages/BeneficiarySearch"

function App(){

return(

<BrowserRouter>

<Routes>

<Route path="/" element={<Login/>} />

<Route path="/deo" element={<Dashboard/>}>

<Route path="search" element={<BeneficiarySearch/>}/>

</Route>

<Route path="/investigator" element={<h1>Investigator Dashboard</h1>} />

<Route path="/auditor" element={<h1>Auditor Dashboard</h1>} />

<Route path="/admin" element={<h1>Admin Dashboard</h1>} />

</Routes>

</BrowserRouter>

)

}

export default App