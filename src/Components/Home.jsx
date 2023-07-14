
import { useContext } from "react";
import FashionSamp from "./Home components/FashionSamp";
import Hero from "./Home components/Hero";
import SecondCol from "./Home components/SecondCol";
import TrendBanner from "./Home components/TrendBanner";
import FirstCol from "./Home components/firstCol";
import { useEffect } from "react";
import { MainContext } from "../context/mainContext";
function Home(){
    
    const {setClassyProd,setBreathableProd} = useContext(MainContext);

    useEffect(()=>{
        const fetchClassy = async()=>{
            const responseClassy = await fetch("http://localhost:4000/products/classyCol");
            const responseBreathable = await fetch("http://localhost:4000/products/breathableCol");
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
        <div className="w-[100vw]">
            <Hero/>
            <FirstCol />
            <TrendBanner/>
            <SecondCol />
            <FashionSamp/>
        </div>
    )
}

export default Home;