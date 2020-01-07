import React, { useState, useEffect } from 'react';

const PersonalDetail = ({
  nextStep,
  lastStep,
  handleChange,
  values,
  errors
}) => {
  const { city, address, postcode } = values;

  const [errorState, setErrorState] = useState({});

  const handleContinue = e => {
    e.preventDefault();
    nextStep();
  };

  const handleBack = e => {
    e.preventDefault();
    lastStep();
  };

  useEffect(() => {
    if (errors) {
      setErrorState(errors);
    }
  }, [errors]);
  return (
    <div className='form-container'>
      <h2 className='large'>Personal information</h2>
      <form>
        <div className='form-group'>
          <input
            type='text'
            name='city'
            id='city'
            value={city}
            onChange={handleChange('city')}
            required
          />
          {errorState.length > 0 && (
            <div className='invalid-feedback'>{errorState}</div>
          )}
          <label htmlFor='city'>Enter City</label>
        </div>
        <div className='form-group'>
          <input
            type='text'
            name='address'
            id='address'
            value={address}
            onChange={handleChange('address')}
            required
          />
          {errorState.length > 0 && (
            <div className='invalid-feedback'>{errorState}</div>
          )}
          <label htmlFor='address'>Enter Address</label>
        </div>
        <div className='form-group'>
          <input
            type='text'
            name='postcode'
            id='postcode'
            value={postcode}
            onChange={handleChange('postcode')}
            required
          />
          {errorState.length > 0 && (
            <div className='invalid-feedback'>{errorState}</div>
          )}
          <label htmlFor='postcode'>Enter Postcode</label>
        </div>
        <div className='buttons'>
          <button
            type='button'
            className='btn btn-block'
            onClick={handleContinue}
          >
            Continue
          </button>
          <button type='button' className='btn btn-block' onClick={handleBack}>
            Back
          </button>
        </div>
      </form>
    </div>
  );
};

export default PersonalDetail;
