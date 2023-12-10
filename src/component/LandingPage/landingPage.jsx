import React from 'react';
import { Link } from 'react-router-dom'; // If using React Router for navigation
import CV from '../../assets/CV.pdf';
import CandidateDetails from '../../component/CandidateDetails/candidateDetails';
import './landingPage.css';

const LandingPage = () => {
  return (
    <div className='land-container'>
    
      <CandidateDetails />
      <div className="cta">
        <a href={CV} download className='btn'>Download Resume</a>
      </div>
      <div className="bmi-container">
      <Link to="/bmi-calculation" className='btn'> BMI Calculation</Link>
      </div>
    </div>
  );
};

export default LandingPage;
