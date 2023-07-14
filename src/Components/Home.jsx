
import { useState } from "react";
import FashionSamp from "./Home components/FashionSamp";
import Hero from "./Home components/Hero";
import SecondCol from "./Home components/SecondCol";
import TrendBanner from "./Home components/TrendBanner";
import FirstCol from "./Home components/firstCol";
import { useEffect } from "react";
function Home(){
    const [classyProd,setClassyProd] = useState(null);
    const [breathableProd,setBreathableProd] = useState(null);

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
            <FirstCol classyProd = {classyProd} />
            <TrendBanner/>
            <SecondCol breathableProd ={breathableProd}/>
            <FashionSamp/>
        </div>
    )
}

export default Home;