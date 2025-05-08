import planet from '../assets/planet.png'; 
import Button from './Button';

const Login: React.FC = () => {
  return (
    <section
      className="w-full h-screen bg-no-repeat bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `radial-gradient(circle at center, #2B0A54, #090E24), url(${planet})`,
        backgroundBlendMode: 'overlay'
      }}
    >
      <div className="w-1/5 h-3/5 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
        <div>
          <h1 className='text-white p-2 font-["Russo_One"] '>Sign In</h1>
          <span className='text-white p-2 font-[sora]'>Keep it all together with us</span>
        </div>
        <div className='w-full flex flex-col items-center justify-around'>
          <input type="text" placeholder='Email or Phone Number' name='_email' id='_emailId'
                 className='p-2 border-0 border-b border-white/50 outline-0 bg-transparent'
          />
          <input type="text" placeholder='Password' name='_password' id='passwordId'
                 className='p-2 border-0 border-b border-white/50 outline-0 bg-transparent'
          />
          <Button className='text-white py-2 px-5 rounded-md bg-gradient-to-r from-[#703DFA]/60 to-[#6c54ad]
                  hover:opacity-90 transition font-[sora]'>
            Log in
          </Button>
        </div>
        <div>

        </div>
      </div>
    </section>
  );
};

export default Login;
