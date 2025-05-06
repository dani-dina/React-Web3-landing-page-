import { navigations } from '../constant/constants';
import logo from '../assets/logo.png';

const Navbar : React.FC = ()=>{
 return(
  <section className='w-full bg-[#080B2A]'>
   <div className='w-full flex items-center justify-around'>
    <img
     src={logo}
     alt='MINTORA'
     width={150}
     height={150}
    />

    <nav className='flex'>
     {
      navigations.map((items)=>(
       <a
        key={items.id}
        className='text-white mx-2 cursor-pointer'
       >
        {items.title}
       </a>
      ))
     }
    </nav>
   </div>
  </section>
 );
}

export default Navbar;