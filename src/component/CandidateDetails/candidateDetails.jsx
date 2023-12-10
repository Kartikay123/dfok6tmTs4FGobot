import React from 'react';
import './candidateDetails.css'

const CandidateDetails = () => {
  return (
    <div className='conatiner'>
      <div className="card">
        <section className="candidate-details">
          <h2>Candidate Details</h2>
          <div className='container-value'>
            <p><strong>First Name:</strong> Kartikay</p>
            <p><strong>Passout Year:</strong> April 2024</p>
            <p><strong>Languages:</strong> C/C++, Python, HTML, CSS, JavaScript, SQL</p>
            <p><strong>Technologies:</strong> Data Structure, Algorithms, React.js, Node.js</p>
          </div>

        </section>
      </div>
    </div>

  );
};

export default CandidateDetails;




