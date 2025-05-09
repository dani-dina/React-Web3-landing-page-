import banner2 from '../assets/banner2.png';


const JoinNFT : React.FC = ()=>{
  return(
    <section className='w-full h-screen'>
      <div className='w-full h-2/6 '>
        <span className='mx-1/2 ont-["Russo_One"] p-2 bg-gradient-to-r from-[#703DFA]/60 to-[#6c54ad] bg-clip-text text-transparent 
              rounded-3xl bg-[#e9e4f8] text-center '>
          Join NFT Portfolio
        </span>
        <h1 className='text-white font-["Russo_One"] text-center text-5xl'>
          Become a Mintora <br /> Player Now
        </h1>
      </div>
      <div className='w-full h-4/6 flex'>
        <div className='w-1/2 h-full'>
          
        </div>
        <div className='w-1/2'>
          <img
            src={banner2}
            alt='Crypto Banner'
            className=''
          />
        </div>
      </div>
    </section>
  );
}

export default JoinNFT;