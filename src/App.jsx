import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import Work from './pages/Work';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Navbar from './components/Navbar'; // The Narrative Journey is acting as About & Contact

function App() {
  const location = useLocation();
  return (
    <div className="min-h-screen relative flex flex-col font-body bg-[#fcf9ef]">
      <Navbar />
      <main className="flex-1 relative pt-20">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/about" element={<Contact />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;
