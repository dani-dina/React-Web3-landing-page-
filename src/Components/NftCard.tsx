import banner from '../assets/banner.png';
import ethereum from '../assets/ethurium.png';
import avator from '../assets/avator.png';

const NftCard: React.FC = () => {
  return (
    <div className='w-1/2 relative flex items-center justify-center overflow-hidden'>
      <div className='absolute inset-0 z-0 bg-[radial-gradient(circle,_#703DFA,_#080B2A,_#080B2A)]'></div>
      <div className='w-[48%] h-[80%] bg-white/30 rounded-3xl [transform:rotate(-10deg)] z-0'>
        <div className='w-full h-full bg-white/20 rounded-3xl [transform:rotate(-15deg)] z-20'>
          <img
          src={banner}
          alt='NFT Monkey'
          className='absolute inset-0 w-[95%] h-[95%] object-cover opacity-100 z-10 pointer-events-none rounded-4xl 
          [transform:rotate(25deg)]'
        />
        </div>
        <div className='fixed bottom-25 left-[-40%] w-[45%] h-[3em] rounded-2xl bg-[#e6ddff]/70 [transform:rotate(10deg)]
             flex items-center justify-around'>
          <div>
            <img src={avator}
                 alt="ethereum" 
                 width={50}
                 height={50}
            />
          </div>
          <div className='w-fit h-1/2 flex flex-col items-start justify-center p-4 '>
            <span className='font-[sora] text-[7px]'>Developer</span>
            <h3 className="font-['Russo_One'] text-[13px]">Daniel A.</h3>
          </div>
        </div>

        <div className='fixed top-24 right-[-39%] w-[45%] h-[3em] rounded-2xl bg-white [transform:rotate(10deg)]
             flex items-center justify-evenly'>
        <div>
            <img src={ethereum}
                 alt="ethereum" 
                 width={50}
                 height={50}
            />
          </div>
          <div className='w-fit h-1/2 flex flex-col items-start justify-center p-4 '>
            <span className='font-[sora] text-[7px]'>Current Bid</span>
            <h3 className="font-['Russo_One'] text-[13px]">3.56 ETH</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NftCard;
