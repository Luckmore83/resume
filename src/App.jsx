import { HashRouter, Routes, Route } from 'react-router-dom'; //Since gh-pages doesn't accept BrowserRouter, I had to look up how to set up HashRouter.
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
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </HashRouter>
  );
}

export default App;
