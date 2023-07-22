
import { useContext } from "react";
import FashionSamp from "./Home components/FashionSamp";
import Hero from "./Home components/Hero";
import TrendBanner from "./Home components/TrendBanner";
import { useEffect } from "react";
import { MainContext } from "../context/mainContext";
import Collection from "./Home components/Collection";
function Home(){
    
    const {classyProd, breathableProd, setClassyProd,setBreathableProd} = useContext(MainContext);

    useEffect(()=>{
        const fetchClassy = async()=>{
            const responseClassy = await fetch("http://localhost:4000/products/collections",{
                method: "POST",
                headers: {"Content-Type" : "application/json"},
                body: JSON.stringify({"productCollection" : "classics"})
            })
            
            const responseBreathable = await fetch("http://localhost:4000/products/collections",{
                method: "POST",
                headers: {"Content-Type" : "application/json"},
                body: JSON.stringify({"productCollection" : "breathable"})
            });
            
            const jsonClassy = await responseClassy.json();
            const jsonBreathable = await responseBreathable.json();
            
            if( responseBreathable.ok &&responseClassy.ok){
               setClassyProd(jsonClassy);
                setBreathableProd(jsonBreathable);
            }
            
                
        }
        fetchClassy();
    },[])


    return(
        <div className="w-[100vw]  ">
            <Hero/>
            <Collection category={breathableProd} colTitle={"· BREATHABLE FASHION ·"}/>
            <TrendBanner/>
            <Collection category={classyProd} colTitle={"· CLASSY FASHION ·"}/>
            <FashionSamp/>
            
        </div>
    )
}

export default Home;