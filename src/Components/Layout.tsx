import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from '../pages/Home';
import About from '../pages/About';
import Login from './Login';
import Footer from './Footer';
import Explore from '../pages/Explore';
const Layout: React.FC = () => {
  return (
    <Router>
      <div className="">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/explore" element={<Explore />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default Layout;
