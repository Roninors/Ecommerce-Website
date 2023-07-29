import Footer from "./Components/Footer";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import MobileMenu from "./Components/Navbar components/MobileMenu";
import Search from "./Components/Search";
import Overlay from "./Components/Overlay";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { MainContext } from "./context/mainContext";
import Register from "./Components/Login and Register components/Register";
import Login from "./Components/Login and Register components/Login";
import Account from "./Components/Account";
import Cart from "./Components/Cart";
import Shop from "./Components/Shop";
import Product from "./Components/Product";



function App() {
  const { showSearch, showMenu, token } = useContext(MainContext);
 console.log()
  return (
    <div  className="overflow-hidden flex flex-col min-h-[100vh]">
      <Router>
        {showSearch || showMenu ? <Overlay /> : ""}
        <Search />
        <NavBar />
        <MobileMenu />
        <Routes>
          <Route path="/" element={<Home />} />
          {!token?.token && <Route path="/register" element={<Register />}/>}
          {!token?.token &&  <Route path="/login" element={<Login />}/> }
          <Route path="/account" element={token?.token ? <Account/> : <Navigate to="/login"/> }/>
          <Route path="/cart" element={token?.token ? <Cart/> : <Navigate to="/login"/> }/>
          <Route path="/shop" element={<Shop/>}/>
          <Route path = "/product/:id" element={<Product/>}/>
          <Route path="*" element={"PAGE NOT FOUND"}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
