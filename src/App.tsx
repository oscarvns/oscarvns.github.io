// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Notebook from './pages/Notebook';
import Week1 from './pages/notebook/Week1';
import Week4 from './pages/notebook/Week4';
import Week5 from './pages/notebook/Week5';
import Week6 from './pages/notebook/Week6';
import Week7 from './pages/notebook/Week7';
import FinalReflection from './pages/FinalReflection';
import Bibliography from './pages/Bibliography';
import { ThemeProvider } from './context/ThemeContext';
import Week2 from './pages/notebook/Week2';
import Week3 from './pages/notebook/Week3';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
          <Navbar />
          <motion.main
            className="flex-grow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/notebook" element={<Notebook />} />
              <Route path="/notebook/week-1" element={<Week1 />} />
              <Route path="/notebook/week-2" element={<Week2 />} />
              <Route path="/notebook/week-3" element={<Week3 />} />
              <Route path="/notebook/week-4" element={<Week4 />} />
              <Route path="/notebook/week-5" element={<Week5 />} />
              <Route path="/notebook/week-6" element={<Week6 />} />
              <Route path="/notebook/week-7" element={<Week7 />} />
              <Route path="/final-reflection" element={<FinalReflection />} />
              <Route path="/bibliography" element={<Bibliography />} />
            </Routes>
          </motion.main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;