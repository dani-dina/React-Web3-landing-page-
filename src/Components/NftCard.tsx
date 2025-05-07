import banner from '../assets/banner.png';

const NftCard: React.FC = () => {
  return (
    <div className='w-1/2 relative flex items-center justify-center overflow-hidden'>

      {/* Gradient layer (bottom-most) */}
      <div className='absolute inset-0 z-0 bg-[radial-gradient(circle,_#703DFA,_#080B2A,_#080B2A)]'></div>

      {/* Image layer (above gradient, below content) */}

      {/* Foreground elements (above all) */}
      <div className='w-[48%] h-[80%] bg-white/30 rounded-3xl [transform:rotate(-10deg)] z-0'>
        <div className='w-full h-full bg-white/20 rounded-3xl [transform:rotate(-15deg)] z-20'>
          <img
          src={banner}
          alt='NFT Monkey'
          className='absolute inset-0 w-[95%] h-[95%] object-cover opacity-100 z-10 pointer-events-none rounded-4xl 
          [transform:rotate(25deg)]'
        />
        </div>
      </div>
      {/* <div className='w-[35%] h-[70%] bg-white/20 rounded-3xl [transform:rotate(-15deg)] z-20'></div> */}
      <div className='bg-red-500'>Hello</div>
    </div>
  );
};

export default NftCard;
