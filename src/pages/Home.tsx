import Button from "../Components/Button";

const Home: React.FC = () => {
  return (
    <div className="w-full h-screen bg-[#080B2A] flex pt-[80px]"> 
      <div className="w-1/2 flex items-center justify-center ">
        <div className="w-4/5 h-[60%] flex flex-col items-start justify-around mx-4">
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
                  hover:opacity-90 transition">
            Get Connected
          </Button>
        </div>
      </div>
      <div className="w-1/2 bg-gradient-to-bl from-[#703DFA] to-[#080B2A] ">

      </div>
    </div>
  );
};

export default Home;
