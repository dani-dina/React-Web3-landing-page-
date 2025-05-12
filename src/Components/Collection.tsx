import { collection } from "../constant/constants";
import Button from "./Button";

const Collection : React.FC = ()=>{
  return(
    <section className="w-full h-full flex items-center justify-between">
      {
        collection.map((items)=>(
          <div key={items.id} className="w-1/5 h-4/5 bg-white/5 rounded-lg p-4 shadow-md text-center">
            <img src={items.image} alt={items.alt} className="w-full h-auto rounded-md mb-4" />
            <h1 className="text-white font-semibold text-xl mb-2">{items.title}</h1>
            <p className="text-white/80 mb-4">{items.description}</p>
            <Button>Purchase</Button>
          </div>
        ))
      }
    </section>
  );
}

export default Collection;