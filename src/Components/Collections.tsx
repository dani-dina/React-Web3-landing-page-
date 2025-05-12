const Collections : React.FC = ()=>{
  return(
    <section className='w-full h-screen flex items-center justify-center'>
      <div className='w-8/9 h-4/5'>
        <div className="h-1/5  w-full">
        <h2 className='font-["Russo_One"] p-2 bg-gradient-to-r from-[#703DFA]/60 to-[#6c54ad] bg-clip-text text-transparent 
             rounded-3xl bg-[#e9e4f8] text-center'>
          Our Collections
        </h2>
        <h1 className="text-center font-['Russo_One'] text-white text-5xl">
          Trade Our The  Most <br />Valueable  NFTs
        </h1>
        </div>
        <div className='h-4/5 w-full bg-green-500'></div>
      </div>
    </section>
  );
}

export default Collections;