import logo from '../assets/logo.png';
import Button from './Button';
const Footer = () => {

  const inputStyle = 'w-3/5 bg-transparent outline-0 border-b border-white/50  text-white/70 p-3 font-[sora]';
  return (
    <footer className='w-full h-screen '>
      <div className='w-full h-6/10 flex flex-col items-center'>
        <div className='w-9/10 h-1/5 flex items-center justify-end gap-10 text-white font-["Russo_One"]'>
          <a href="/payment-solution">Payment Solution</a>
          <a href="/integrations">Integrations</a>
          <a href="/api">API</a>
          <a href="/signin">Sign in</a>
        </div>
        <div className='w-9/10 h-4/5 '>
          <div className='w-1/2 h-full '>
            <div className='w-4/5 h-full flex flex-col items-start justify-around'>
              <h1 className='text-white font-["Russo_One"] text-2xl'>Contact Us</h1>
              <input className={inputStyle} 
                     type="text" 
                     name="" 
                     id=""
                     placeholder='Your Name '
              />
              <input className={inputStyle} 
                     type="email" 
                     name="" 
                     id=""
                     placeholder='Your Email'
              />
              <input className={inputStyle} 
                     type="text" 
                     name="" 
                     id=""
                     placeholder='Your Messager'
              />
              <Button
                 className='w-3/5 bg-gradient-to-r from-[#703DFA]/60 to-[#6c54ad] hover:opacity-90 transition px-4
                 py-2 rounded-2xl text-white font-["Russo_One"]'
              >
                Submit
              </Button>
            </div>
          </div>
          <div className='w-1/2 h-full'>
          </div>
        </div>
      </div>
      <div className='w-full h-4/10 flex items-center justify-center'>
        <div className='w-9/10 h-9/10 bg-red-400 flex items-center justify-between'>
          <div className={`w-[20%] h-full`}>
            <img src={logo} alt="Mintora" className='w-3/4 h-[30%]' />
          </div>
          <div className={`w-[20%] h-full`}></div>
          <div className={`w-[20%] h-full`}></div>
          <div className={`w-[20%] h-full`}></div>
          <div className={`w-[20%] h-full`}></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
