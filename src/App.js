import './App.css';
import { Routes, Route } from 'react-router-dom';
import LandingPage from '../src/component/LandingPage/landingPage';
import BmiCalculation from './component/BmiCalculation/bmiCalculation';
function App() {
  return (
    <div style={{ background: 'linear-gradient(#8AAAE5, #FFFFFF)', height: '100vh' }}>
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path="/bmi-calculation" element={<BmiCalculation />} />
      </Routes>
    </div>
  );
}

export default App;
