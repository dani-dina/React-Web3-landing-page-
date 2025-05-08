import planet from '../assets/planet.png'; 
import Button from './Button';
import google from '../assets/google.png';
import apple from '../assets/apple.png';
import microsoft from '../assets/microsoft.png';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login: React.FC = () => {

  const inputClass = `p-2 border-0 border-b border-white/50 outline-0 bg-transparent w-4/5 text-white text-[0.8em] 
                     focus:bg-transparent`;
  const lineClass = 'h-[0.05em] w-[40%] bg-red-50 rounded-md';
  const iconImageClass = 'w-[1em] h-[1em] rounded-[50%] cursor-pointer';

  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <section
      className="w-full h-screen bg-no-repeat bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `radial-gradient(circle at center, #2B0A54, #090E24), url(${planet})`,
        backgroundBlendMode: 'overlay'
      }}
    >
      <div className="w-1/5 h-3/5 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 flex flex-col items-center justify-around">
        <div className='w-4/5 h-[30%]'>
          <h1 className='text-white text-2xl pt-4 font-["Russo_One"] '>Sign In</h1>
          <span className='text-white/50 font-[sora] text-[10px]'>Keep it all together with us</span>
        </div>
        <div className='w-full h-1/2 flex flex-col items-center justify-around'>
          <input
            type="text"
            placeholder="Email or Phone Number"
            name="_email"
            id="_emailId"
            className={`${inputClass}`}
          />
          <div className="relative w-4/5">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              name="_password"
              id="passwordId"
              className={inputClass}
            />
            <div
              className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer text-white"
              onClick={handleShowPassword}
            >
              {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
            </div>
          </div>
          <Button className="text-white py-2 px-5 rounded-md bg-gradient-to-r from-[#703DFA]/60 to-[#6c54ad]
                  hover:opacity-90 transition font-['Russo_One'] w-4/5 my-4">
            Log in
          </Button>
        </div>
        <div className="relative h-[25%] w-full flex flex-col items-center justify-center ">
          <div className="w-4/5 flex items-center justify-between">
            <div className={`${lineClass}`}></div>
            <span className="text-white">or</span>
            <div className={`${lineClass}`}></div>
          </div>
          <div className="w-2/5 flex items-center justify-around">
            <img src={google} alt="Google" className={iconImageClass} />
            <img src={apple} alt="Apple icon" className={iconImageClass} />
            <img src={microsoft} alt="Microsoft icon" className={iconImageClass} />
          </div>
          <a href="/forget-password"
             className='absolute bottom-1 text-center text-blue-400 text-[0.7em]'
          >
            Forget password
          </a>
          <a href="/signup"
             className='text-[0.8em] text-white py-2'
          >
            Create New Accout
          </a>
        </div>
      </div>
    </section>
  );
};

export default Login;
