import { perks } from "./perks";

function FashionSamp(){
    return(
    <div className=" justify-center items-center grid grid-cols-2 lg:grid-cols-4 ">
        
           {perks.map((perk,i)=>( <div key={i} className="flex items-center justify-center flex-col text-center gap-2 p-5 font-pop">
                <img  src={new URL(perk.img, import.meta.url)} alt="" className="w-[5vw]" />
                <h1>{perk.info}</h1>
                <h1 className="text-xs">{perk.about}</h1>
             </div> ))}
       
        
     
    </div>
    )
}

export default FashionSamp;