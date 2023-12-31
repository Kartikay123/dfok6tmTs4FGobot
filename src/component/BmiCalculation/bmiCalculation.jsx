import React, { useState } from 'react';
import './bmiCalculation.css';


const InputField = ({ label, value, onChange, error, type, step, min, max }) => {
    return (
        <div>
            <label>
                {label}:
                <input
                    type={type}
                    step={step}
                    min={min}
                    max={max}
                    value={value}
                    onChange={onChange}
                />
                {error && <p className="error">{error}</p>}
            </label>
        </div>
    );
};

const BmiCalculation = () => {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [bmiResult, setBmiResult] = useState(null);
    const [weightError, setWeightError] = useState('');
    const [heightError, setHeightError] = useState('');

    const calculateBMI = () => {
        const weightValue = parseFloat(weight);
        const heightValue = parseFloat(height);

        if (weight.trim() === '' && height.trim() === '') {
            setWeightError('Weight is required');
            setHeightError('Height is required');
            setBmiResult(null);
        }

        else if (weight.trim() === '') {
            setWeightError('Weight is required');
            //setHeightError('Height is required');
            setBmiResult(null);
        }
        // setBmiResult(null);
        else if (height.trim() === '') {
            setHeightError('Height is required');
            setBmiResult(null);
        }
        else if (
            weightValue >= 1.0 &&
            weightValue <= 300.0 &&
            heightValue >= 0.1 &&
            heightValue <= 3.0
        ) {
            const bmi = weightValue / (heightValue * heightValue);
            setBmiResult(bmi.toFixed(1));
            setWeightError('');
            setHeightError('');
        } else {
            if (weightValue < 1.0 || weightValue > 300.0) {
                setWeightError('Weight should be between 1.0 and 300.0 kg');
            } else {
                setWeightError('');
            }

            if (heightValue < 0.1 || heightValue > 3.0) {
                setHeightError('Height should be between 0.1 and 3.0 meters');
            } else {
                setHeightError('');
            }

            setBmiResult(null);
        }
    };

    const resetValues = () => {
        setWeight('');
        setHeight('');
        setBmiResult(null);
        setWeightError('');
        setHeightError('');
    };

    return (
        <div className='container'>
            <div className='card-bmi'>
                <div>
                    <h2>BMI Calculation</h2>
                    <InputField
                        label="Weight (kg)"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                        error={weightError}
                        type="number"
                        step="0.1"
                        min="1.0"
                        max="300.0"
                    />
                    <InputField
                        label="Height (m)"
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                        error={heightError}
                        type="number"
                        step="0.01"
                        min="0.1"
                        max="3.0"
                    />
                    <div className='button-edit'>
                        <button onClick={calculateBMI}>Calculate BMI</button>
                        <button onClick={resetValues}>Reset</button>
                    </div>
                    {bmiResult && <p>Your BMI is: {bmiResult}</p>}
                </div>
            </div>
        </div>
    );
};

export default BmiCalculation;