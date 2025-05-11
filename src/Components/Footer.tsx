import logo from '../assets/logo.png';
import Button from './Button';
import { footerLinks } from '../constant/constants';
const Footer = () => {
  const inputStyle =
    'w-3/5 bg-transparent outline-0 border-1 border-white/50 text-white/70 p-3 font-[sora] rounded-lg';

  return (
    <footer className='w-full h-screen bg-[radial-gradient(circle_at_center,_#2B0A54,_#090E24)]'>
      {/* Top Section */}
      <div className='w-full h-3/5 flex flex-col items-center'>
        {/* Navigation Links */}
        <div className='w-9/10 h-1/5 flex items-center justify-end gap-10 text-white font-["Russo_One"]'>
          <a href="/payment-solution">Payment Solution</a>
          <a href="/integrations">Integrations</a>
          <a href="/api">API</a>
          <a href="/signin">Sign in</a>
        </div>

        {/* Contact Form */}
        <div className='w-9/10 h-4/5 flex '>
          <div className='w-1/2 h-2/3 flex flex-col justify-around items-start '>
            <h1 className='text-white font-["Russo_One"] text-2xl w-3/5'>
              Stay Updated !
            </h1>
            <input className={inputStyle} type="email" placeholder='Your Email' />
            <Button className='w-3/5 bg-gradient-to-r from-[#703DFA]/60 to-[#6c54ad] hover:opacity-90 transition px-4 py-2
             rounded-lg text-white font-["Russo_One"]'>
              Subscribe
            </Button>
          </div>
          <div className='w-1/2 '>

          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className='w-full h-2/5 flex items-center justify-center'>
        <div className='w-9/10 h-9/10 flex justify-between items-start'>
          {/* Logo */}
          <div className='w-1/5'>
            <img src={logo} alt="Mintora" className='w-3/4 h-[30%]' />
          </div>

          {/* Footer Columns */}
          {footerLinks.map((column, idx) => (
            <div
              key={idx}
              className='w-1/5 flex flex-col items-start justify-around text-white font-[sora]'
            >
              <h1 className='font-["Russo_One"] mb-4'>{column.title}</h1>
              {column.links.map((link, i) => (
                <a href="/#" key={i} className='text-white/70'>{link} </a>
              ))}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
