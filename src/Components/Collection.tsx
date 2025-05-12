import { collection } from "../constant/constants";
import Button from "./Button";

const Collection: React.FC = () => {
  return (
    <section className="w-full h-full flex items-center justify-between p-6 gap-4">
      {collection.map((items) => (
        <div
          key={items.id}
          className="w-1/5 h-4/5 bg-[radial-gradient(circle,_#2B0A54_0%,_rgba(8,11,42,0.6)_70%,_#080B2A_100%)] 
          rounded-lg p-4 shadow-md text-center transition-transform duration-300 hover:scale-105 hover:shadow-xl"
        >
          <img
            src={items.image}
            alt={items.alt}
            className="w-full h-3/5 rounded-md mb-4"
          />
          <h1 className="text-white font-['Russo_One'] text-xl mb-2">
            {items.title}
          </h1>
          <p className="text-white/80 mb-4">{items.description}</p>
          {/* <Button>Purchase</Button> */}
        </div>
      ))}
    </section>
  );
};

export default Collection;
