import SolutionCard from "./SolutionCard";

const Solutions : React.FC = ()=>{
  return(
    <div className='w-full h-screen flex items-center justify-center'>
      <div className='w-4/5 h-4/5 flex flex-col items-center justify-around'>
        <span className="text-[radial-gradient(circle_at_center,_#2B0A54,_#090E24)]">Our Speciality</span>
        <h1 className="font-['Russo_One'] text-5xl text-white text-center ">
          Complet Solutions <br /> For Your NFT
        </h1>
        <p className='w-3/5 text-center text-white'>
        Mintora is a Web3-based platform offering decentralized solutions for NFTs, digital assets, and community engagement.
        </p>
        <div className='w-[85%] h-3/5 flex items-center justify-around'>
          <SolutionCard />
        </div>
      </div>
    </div>
  );
}

export default Solutions;