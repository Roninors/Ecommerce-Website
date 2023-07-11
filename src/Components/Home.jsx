
import Hero from "./Home components/Hero";
import TrendBanner from "./Home components/TrendBanner";
import FirstCol from "./Home components/firstCol";
function Home(){
    return(
        <div className="w-[100vw]">
            <Hero/>
            <FirstCol/>
            <TrendBanner/>
        </div>
    )
}

export default Home;