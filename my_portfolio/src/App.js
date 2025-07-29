
import './App.css';
import About from './page/About';
import HomePage from './page/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
  </BrowserRouter>
  );
}

export default App;
