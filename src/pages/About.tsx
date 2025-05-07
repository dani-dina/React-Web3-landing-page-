import Button from '../Components/Button';
import NftCard from '../Components/NftCard';
const About : React.FC = ()=>{
  return(
    <section className='w-full h-screen bg-[#080B2A]  bg-[radial-gradient(circle_at_center,_#2B0A54,_#090E24)] flex'>
      <div className='w-1/2 h-full flex items-center justify-center'>
          <div className='w-4/5 h-4/5'>
            <NftCard />
            Hello Philo
          </div>
      </div>
      <div className='w-1/2 h-full flex items-center justify-center '>
        <div className='w-4/5 h-[70%] flex flex-col items-start justify-around'>
          <span className='font-["Russo_One"] p-2 bg-[#fff]/20 rounded-md text-gradient-to-r from-[#703DFA]/60 
              to-[#6c54ad]'>
            About Us
          </span>
          <h1 className='font-["Russo_One"] text-white text-4xl'>
            High Quality <br/> NFT Collections
          </h1>
          <p className=' w-4/5 text-white/50'>
            NFTs are unique digital assets stored on a blockchain, representing ownership of art, music, or collectibles.
          </p>
          <p className='w-4/5 text-white/50'>
            NFTs, or non-fungible tokens, are unique digital assets stored on a blockchain that verify ownership 
            and authenticity of digital content such as art, music, videos, or virtual items. Each NFT is distinct
            and cannot be exchanged on a one-to-one basis.
          </p>
          <Button 
            className='text-white py-2 px-5 rounded-md bg-gradient-to-r from-[#703DFA]/60 to-[#6c54ad] 
                         hover:opacity-90 transition font-["Russo_One"]'
            >
              More About Us
          </Button>
        </div>
      </div>
    </section>
  );
}

export default About;