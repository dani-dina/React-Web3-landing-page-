import logo from '../assets/logo.png';

const Footer = () => {

  const inputStyle = 'w-3/5 bg-transparent outline-0 border-b border-white/50  text-white/70';
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
            <div className='w-4/5 h-full flex flex-col'>
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
            </div>
          </div>
          <div className='w-1/2 h-full'>
          </div>
        </div>
      </div>
      <div className='w-full h-4/10'>

      </div>
    </footer>
  );
};

export default Footer;
