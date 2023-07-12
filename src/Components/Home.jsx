
import FashionSamp from "./Home components/FashionSamp";
import Hero from "./Home components/Hero";
import SecondCol from "./Home components/SecondCol";
import TrendBanner from "./Home components/TrendBanner";
import FirstCol from "./Home components/firstCol";
function Home(){
    return(
        <div className="w-[100vw]">
            <Hero/>
            <FirstCol/>
            <TrendBanner/>
            <SecondCol/>
            <FashionSamp/>
        </div>
    )
}

export default Home;