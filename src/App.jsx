import Home from "./Components/Home"
import NavBar from "./Components/NavBar"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
function App() {
  

  return (
 <div className="overflow-hidden">
<Router>
  <NavBar/>
  <Routes>
    <Route path="/" element = {<Home/>}/>
  </Routes>
</Router>
 </div>
  )
}

export default App
