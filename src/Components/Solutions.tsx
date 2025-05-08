import SolutionCard from "./SolutionCard";

const Solutions : React.FC = ()=>{
  return(
    <div className='w-full h-screen flex items-center justify-center'>
      <div className='w-4/5 h-full flex flex-col items-center justify-around'>
        <span className="font-['Russo_One'] p-2 bg-gradient-to-r from-[#703DFA]/60 to-[#6c54ad] bg-clip-text text-transparent 
             rounded-3xl bg-[#e9e4f8]">
          Our Speciality
        </span>
        <h1 className="font-['Russo_One'] text-5xl text-white text-center ">
          Complet Solutions <br /> For Your NFT
        </h1>
        <p className='w-3/5 text-center text-white my-2'>
        Mintora is a Web3-based platform offering decentralized solutions for NFTs, digital assets, and community engagement.
        </p>
        <div className='w-[75rem] h-2/5 flex items-center justify-around'>
          <SolutionCard />
        </div>
      </div>
    </div>
  );
}

export default Solutions;