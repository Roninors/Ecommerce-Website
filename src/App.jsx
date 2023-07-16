import Footer from "./Components/Footer";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MobileMenu from "./Components/Navbar components/MobileMenu";
import Search from "./Components/Search";
import Overlay from "./Components/Overlay";
import { useContext } from "react";
import { MainContext } from "./context/mainContext";

function App() {
  const { showSearch, showMenu } = useContext(MainContext);
  return (
    <div className="overflow-hidden">
      <Router>
        {showSearch || showMenu ? <Overlay /> : ""}
        <Search />
        <NavBar />
        <MobileMenu />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
