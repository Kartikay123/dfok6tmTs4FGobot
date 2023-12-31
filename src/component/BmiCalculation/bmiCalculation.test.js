import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import BmiCalculation from './bmiCalculation';
import '@testing-library/jest-dom';

describe('BMI Calculation', () => {
  it('calculates BMI correctly', () => {
    const { getByLabelText, getByText } = render(<BmiCalculation />);
    
    const weightInput = getByLabelText('Weight (kg):');
    const heightInput = getByLabelText('Height (m):');
    const calculateButton = getByText('Calculate BMI');

    // Test with valid inputs
    fireEvent.change(weightInput, { target: { value: '70' } });
    fireEvent.change(heightInput, { target: { value: '1.75' } });
    fireEvent.click(calculateButton);
    expect(getByText('Your BMI is: 22.9')).toBeInTheDocument();

    // Test with invalid weight
    fireEvent.change(weightInput, { target: { value: '0' } });
    fireEvent.click(calculateButton);
    expect(getByText('Weight should be between 1.0 and 300.0 kg')).toBeInTheDocument();

    // Test with invalid height
    fireEvent.change(weightInput, { target: { value: '70' } });
    fireEvent.change(heightInput, { target: { value: '0' } });
    fireEvent.click(calculateButton);
    expect(getByText('Height should be between 0.1 and 3.0 meters')).toBeInTheDocument();

    // Test with empty inputs
    fireEvent.change(weightInput, { target: { value: '' } });
    fireEvent.change(heightInput, { target: { value: '' } });
    fireEvent.click(calculateButton);
    expect(getByText('Weight is required')).toBeInTheDocument();
    expect(getByText('Height is required')).toBeInTheDocument();
  });

  it('resets BMI calculation', () => {
    const { getByLabelText, getByText, queryByText } = render(<BmiCalculation />);
    
    const weightInput = getByLabelText('Weight (kg):');
    const heightInput = getByLabelText('Height (m):');
    const calculateButton = getByText('Calculate BMI');
    const resetButton = getByText('Reset');

    fireEvent.change(weightInput, { target: { value: '70' } });
    fireEvent.change(heightInput, { target: { value: '1.75' } });
    fireEvent.click(calculateButton);

    expect(getByText('Your BMI is: 22.9')).toBeInTheDocument();

    fireEvent.click(resetButton);

    expect(weightInput.value).toBe('');
    expect(heightInput.value).toBe('');
    expect(queryByText('Your BMI is: 22.9')).not.toBeInTheDocument();
  });
});
