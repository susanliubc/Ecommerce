import React, { useState, useEffect } from 'react';

const UserDetail = ({ nextStep, handleChange, values, errors }) => {
  const handleContinue = e => {
    e.preventDefault();
    nextStep();
  };
  const { name, email, password, password2 } = values;

  const [errorState, setErrorState] = useState({});

  useEffect(() => {
    if (errors) {
      setErrorState(errors);
    }
  }, [errors]);
  return (
    <div className='form-container'>
      <h2 className='large'>Create your account</h2>
      <form>
        <div className='form-group'>
          <input
            type='text'
            name='name'
            id='name'
            value={name}
            onChange={handleChange('name')}
            required
          />
          {errorState.length > 0 && (
            <div className='invalid-feedback'>{errorState}</div>
          )}
          <label htmlFor='username'>User Name</label>
        </div>
        <div className='form-group'>
          <input
            type='email'
            name='email'
            id='email'
            value={email}
            onChange={handleChange('email')}
            required
          />
          {errorState.length > 0 && (
            <div className='invalid-feedback'>{errorState}</div>
          )}
          <label htmlFor='email'>Email</label>
        </div>
        <div className='form-group'>
          <input
            type='password'
            name='password'
            id='password'
            value={password}
            onChange={handleChange('password')}
            required
          />
          {errorState.length > 0 && (
            <div className='invalid-feedback'>{errorState}</div>
          )}
          <label htmlFor='password'>Password</label>
        </div>
        <div className='form-group'>
          <input
            type='password'
            name='password2'
            id='password2'
            value={password2}
            onChange={handleChange('password2')}
            required
          />
          {errorState.length > 0 && (
            <div className='invalid-feedback'>{errorState}</div>
          )}
          <label htmlFor='password2'>Confirm Password</label>
        </div>
        <button
          type='button'
          className='btn btn-block'
          onClick={handleContinue}
        >
          Continue
        </button>
      </form>
    </div>
  );
};

export default UserDetail;
