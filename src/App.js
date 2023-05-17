import { Route, Routes } from 'react-router-dom';
import Calculator from './components/calculator';
import Quote from './components/quote';
import Navbar from './components/navbar';
import Homepage from './components/home';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/quote" element={<Quote />} />
        <Route path="/calculator" element={<Calculator />} />
      </Routes>
    </div>
  );
}

export default App;
