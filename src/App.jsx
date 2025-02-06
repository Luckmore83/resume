import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import About from './components/pages/About';
import './global.css';

function App() {

  return (
    <HashRouter>
      <header>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path="/resume" element={<Home />} />
          <Route path="/resume/projects" element={<Projects />} />
          <Route path="/resume/about" element={<About />} />
        </Routes>
      </main>
    </HashRouter>
  );
}

export default App;
