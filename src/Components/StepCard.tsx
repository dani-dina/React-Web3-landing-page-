import { stepCard } from "../constant/constants";
const StepCard : React.FC = ()=>{

  return(
    <section className='w-[80%] h-[80%] flex flex-col items-center justify-center'>
      {
        stepCard.map((items)=>(
          <div className='w-4/5 h-2/5 bg-white/10 rounded-md my-3'>
            <div className='relative w-full h-1/10'>
              <h1 className='absolute top-[-15%] left-5'>{items.step}</h1>
            </div>
            <div className='w-full h-9/10 flex items-center justify-around'>
              <div className=''>
                <img src={items.image} alt="IMG" />
              </div>
              <div className='h-8/10 w-[0.05em] bg-white/50 rounded-md'>

              </div>
              <div className='w-7/10 h-8/10 '>
                <p className='text-white'>
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