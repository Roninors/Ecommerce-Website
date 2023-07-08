
import Hero from "./Home components/Hero";
import FirstCol from "./Home components/firstCol";
function Home(){
    return(
        <div className="overflow-hidden w-[100vw]">
            <Hero/>
            <FirstCol/>
        </div>
    )
}

export default Home;