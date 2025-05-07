import Navbar from './Navbar';
import Home from '../pages/Home';
import About from '../pages/About';

const Layout : React.FC =  ()=>{
 return (
  <div>
   <Navbar />
   <Home />
   <About />
  </div>
 );
}

export default Layout;
