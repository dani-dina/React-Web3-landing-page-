import Button from '../Components/Button';
import nft from '../assets/nft.png';
import nft2 from '../assets/nft2.png';
import nft3 from '../assets/nft3.png';
import nft1 from '../assets/nft1.png';
import ethIcon from '../assets/ethIcon.png';

const About : React.FC = ()=>{
  const imageStyle = 'absolute inset-0 w-full h-full object-cover opacity-100 z-10 pointer-events-none rounded-4xl';

  return(
    <section className='w-full h-screen bg-[#080B2A] bg-[radial-gradient(circle,_#2B0A54_0%,_rgba(8,11,42,0)_70%,_#080B2A_100%)] flex'>
      <div className='w-1/2 h-full flex items-center justify-center'>
          <div className='w-4/5 h-4/5 flex items-center justify-center'>
            <div className='relative w-[50%] h-[80%] rounded-4xl bg-white/10 backdrop-blur-md border border-white/20 rotate-15'>
              <div className='relative w-full h-full rounded-4xl bg-white/50 [transform:rotate(-15deg)] z-10' >
                <img
                  src={nft}
                  alt='NFT Monkey'
                  className={`${imageStyle}`}
                />
                <div className='absolute bottom-[-10%] right-[-15%] w-[60%] h-[35%] bg-red-100 rounded-4xl z-10'>
                  <img
                    src={nft2}
                    alt='NFT Monkey 2'
                    className={`${imageStyle}`}
                  />
                </div>
                <div className='absolute top-[10%] left-[-40%] w-[30%] h-[20%] bg-blue-200 rounded-3xl'>
                  <img
                    src={nft1}
                    alt='NFT Monkey Hand'
                    className={`${imageStyle}`}
                />
                </div>
                <div className='absolute bottom-[-11%] right-[54%] w-[17%] h-[10%] rounded-md'>
                  <img
                    src={ethIcon}
                    alt='Ethurium'
                    className={`${imageStyle}`}
                  />
                </div>
              </div>
              <div className='absolute bottom-[-20%] left-[-8%] w-[45%] h-[30%] bg-red-100 rounded-4xl 
                   [transform:rotate(-15deg)] z-0'>
                <img
                  src={nft3}
                  alt='NFT Monkey'
                  className={`${imageStyle}`}
                />
              </div>
            </div>
          </div>
      </div>
      <div className='w-1/2 h-full flex items-center justify-center '>
        <div className='w-4/5 h-[70%] flex flex-col items-start justify-around'>
          <h2 className='font-["Russo_One"] p-2 bg-[#fff]/20 rounded-md text-gradient-to-r from-[#703DFA]/60 
              to-[#6c54ad]'>
            About Us
          </h2>
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