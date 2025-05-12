import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Home from '../pages/Home';
import About from '../pages/About';
import Login from './Login';
import Footer from './Footer';
import Explore from '../pages/Explore';


// Separate component to use the location hook
const AppContent: React.FC = () => {
  const location = useLocation();

  const hideLayout = location.pathname === '/login';

  return (
    <>
      {!hideLayout && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/explore" element={<Explore />} />
      </Routes>
      {!hideLayout && <Footer />}
    </>
  );
};

const Layout: React.FC = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default Layout;
