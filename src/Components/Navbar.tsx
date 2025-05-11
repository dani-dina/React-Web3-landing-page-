import { Link } from 'react-router-dom';
import { navigations } from '../constant/constants';
import logo from '../assets/logo.png';
import Button from './Button';
import { Search } from 'lucide-react';
import { useState } from 'react';

const Navbar: React.FC = () => {
  const isLoggedIn = false;
  const [showLogin,setShowLogin] = useState(false);
  const handleLoginClick = ()=>{
    setShowLogin((prev)=> !prev);
  }
  return (
    <header className="fixed top-0 w-full bg-[#080B2A] py-4 z-10"> 
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <img
            src={logo}
            alt="Mintora Logo"
            width={120}
            height={120}
            className="object-contain"
          />
        </a>

        {/* Navigation Links */}
        <nav className="flex gap-6">
          {navigations.map((item) => (
            <a
              key={item.id}
              href={item.path}
              className="text-white hover:text-accent transition-colors duration-200 font-['Russo_One'] font-light"
            >
              {item.title}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className={`${isLoggedIn ? 'hidden' : 'flex'} items-center gap-4`}>
          <Button className="p-2 rounded-md bg-transparent hover:bg-white/10 transition">
            <Search className="w-5 h-5 text-white" />
          </Button>
          <Link to='/login'>
            <Button className="text-white py-2 px-5 rounded-md bg-gradient-to-r from-[#703DFA]/60 to-[#6c54ad]
                    hover:opacity-90 transition font-[sora]"
                    onClick={handleLoginClick}>
                    Join Now
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
