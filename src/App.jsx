import Footer from "./Components/Footer";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import MobileMenu from "./Components/Navbar components/MobileMenu";
import Search from "./Components/Search";
import Overlay from "./Components/Overlay";
import ValForm from "./Components/ValForm";
import Register from "./Components/Login and Register components/Register";
import Login from "./Components/Login and Register components/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { MainContext } from "./context/mainContext";



function App() {
  const { showSearch, showMenu } = useContext(MainContext);
  return (
    <div className="overflow-hidden flex flex-col min-h-[100vh]">
      <Router>
        {showSearch || showMenu ? <Overlay /> : ""}
        <Search />
        <NavBar />
        <MobileMenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/valForm" element={<ValForm />}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
