import { BrowserRouter, Routes, Route } from "react-router-dom"

import Dashboard from "./pages/Dashboard"
import DashboardHome from "./pages/DashboardHome"
import Login from "./pages/Login"
import BeneficiarySearch from "./pages/BeneficiarySearch"

function App(){

return(

<BrowserRouter>

<Routes>

<Route path="/" element={<Login/>} />

<Route path="/deo" element={<Dashboard/>}>

<Route index element={<DashboardHome/>} />

<Route path="search" element={<BeneficiarySearch/>} />

</Route>

</Routes>

</BrowserRouter>

)

}

export default App