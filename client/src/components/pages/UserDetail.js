import React from 'react';

const UserDetail = ({ nextStep, handleChange, values }) => {
  const handleContinue = e => {
    e.preventDefault();
    nextStep();
  };
  const { name, email, password, password2, city, address, postcode } = values;
  return (
    <div className='form-container'>
      <h2 className='large'>Create your account</h2>
      <form onSubmit={handleSubmit}>
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
