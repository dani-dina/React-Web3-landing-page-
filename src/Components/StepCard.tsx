import { stepCard } from "../constant/constants";
const StepCard : React.FC = ()=>{

  return(
    <section className='w-[80%] h-full flex flex-col items-center justify-center '>
      {
        stepCard.map((items)=>(
          <div key={items.id}
               className='w-4/5 h-[40%] rounded-md mb-8 bg-[radial-gradient(circle_at_center,_#2B0A54,_#090E24)]'>
            <div className='relative w-full h-1/10'>
              <h1 className='absolute bottom-0 left-5 px-2 rounded-lg bg-white/10 text-[#6c54ad] font-["Russo_One"]'>
                {items.step}
              </h1>
            </div>
            <div className='w-full h-9/10 flex items-center justify-around'>
              <div className='w-1/4 flex items-center justify-center'>
                <img src={items.image}
                 alt="IMG" 
                 className='w-2/4 h-2/4'
                />
              </div>
              <div className='h-8/10 w-[0.05em] bg-white/50 rounded-md'>

              </div>
              <div className='w-7/10 h-8/10 '>
                <h1 className='text-white font-[Russo_One]'>{items.title}</h1>
                <p className='text-white text-[0.8em]'>
                  {items.description}
                </p>
              </div>

            </div>
          </div>
        ))
      }
    </section>
  );
}

export default StepCard;