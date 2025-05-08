import { SolutionCards } from "../constant/constants";
import { FaEthereum } from "react-icons/fa";

const SolutionCard: React.FC = () => {
  return (
    <section className="relative w-full h-3/5  flex items-center justify-between">
      {SolutionCards.map((items) => (
        <div
          key={items.id}
          className="relative w-[20%] flex flex-col items-center justify-around bg-red-600 rounded-lg p-4"
        >
          <FaEthereum className="absolute top-[-1.5em] left-1/2 -translate-x-1/2 w-[3em] h-[3em] bg-amber-300 rounded-full
                      p-2 shadow-lg" />

          <h1 className="text-white font-['Russo_One'] text-lg mt-[2.5em]">{items.title}</h1>
          <p className="text-white text-sm text-center">{items.description}</p>
          <h2 className="text-white font-semibold text-xl">{items.number}</h2>
        </div>
      ))}
    </section>
  );
};

export default SolutionCard;
