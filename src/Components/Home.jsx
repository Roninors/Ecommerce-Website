import { useContext } from "react";
import Hero from "./Home components/Hero";
import TrendBanner from "./Home components/TrendBanner";
import { useEffect } from "react";
import { MainContext } from "../context/mainContext";
import Collection from "./Home components/Collection";
import Perks from "./Home components/Perks";

function Home(){
    
    const {classyProd, breathableProd, setClassyProd,setBreathableProd} = useContext(MainContext);
   

    useEffect(() => {
        const fetchData = async () => {
          try {
            const responseClassy = await fetch("http://localhost:4000/products/collections", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ "productCollection": "classics" })
            });
      
            const responseBreathable = await fetch("http://localhost:4000/products/collections", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ "productCollection": "breathable" })
            });
      
            if (!responseClassy.ok) {
              throw new Error("Failed to fetch classics data");
            }
            if (!responseBreathable.ok) {
              throw new Error("Failed to fetch breathable data");
            }
      
            const jsonClassy = await responseClassy.json();
            const jsonBreathable = await responseBreathable.json();
      
            setClassyProd(jsonClassy);
            setBreathableProd(jsonBreathable);
      
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        }
      
        fetchData();
      }, []);
      

    return(
        <div className="w-[100vw]  ">
            <Hero/>
            <Collection category={breathableProd} colTitle={"NEW ARRIVALS"}/>
            <TrendBanner/>
            <Collection category={classyProd} colTitle={"CLASSIC TRENDS"}/>
            <Perks/>
        </div>
    )
}

export default Home;