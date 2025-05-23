import Button from "../Components/Button";
import NftCard from "../Components/NftCard";
import { FaBitcoin, FaEthereum, FaPaypal, FaStripeS } from 'react-icons/fa';
import About from "./About";
import Solutions from "../Components/Solutions";
import JoinNFT from '../Components/JoinNFT';
import Collections from "../Components/Collections";

const Home: React.FC = () => {
  return (
    <>
    <div className="relative w-full h-screen bg-[#080B2A] flex "> 
      <div className="w-1/2 flex items-center justify-center z-10">
        <div className=" w-4/5 h-[70%] flex flex-col items-start justify-evenly mx-4 ">
          <h1 className="text-5xl text-white font-['Russo_One']">
            Collect Next Generation{" "}
            <span className="bg-gradient-to-r from-[#703DFA]/60 to-[#6c54ad] text-transparent bg-clip-text mx-2">
              NFTS
            </span>
            <br />
            Today.
          </h1>
          <p className="text-gray-300 font-[sora]">
            Mintora is a Web3-based platform offering decentralized solutions for NFTs, digital assets, and community engagement.
          </p>
          <Button className="text-white py-2 px-5 rounded-md bg-gradient-to-r from-[#703DFA]/60 to-[#6c54ad] 
                  hover:opacity-90 transition font-['Russo_One']">
            Get Connected
          </Button>
          <div className="w-1/5 absolute bottom-5">
            <div>
              <h2 className="text-white font-['Russo_One']"> We Are Mintora NFTs</h2>
            </div>
            <div className='flex items-center justify-between'>
              <span className='text-[#dcd9e5] font-[sora]'>We Accept </span>
              <FaBitcoin  className='text-[#bdb1e0] w-[1.5em] h-[1.5em]' />
              <FaEthereum className='text-[#bdb1e0] w-[1.5em] h-[1.5em]' />
              <FaPaypal   className='text-[#bdb1e0] w-[1.5em] h-[1.5em]'/>
              <FaStripeS  className='text-[#bdb1e0] w-[1.5em] h-[1.5em]' />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-1/4 left-[-15%] z-0 bg-[radial-gradient(circle,_#2B0A54_0%,_rgba(8,11,42,0)_70%,_#080B2A_100%)]
           w-1/2 h-4/6  outline-0">
      </div>
        <NftCard />
    </div>
    <About />
    <Solutions />
    <JoinNFT />
    <Collections />
    </>
  );
};

export default Home;
