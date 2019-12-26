import React, { useState } from 'react';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/authAction';
import PropTypes from 'prop-types';

const Register = ({ registerUser }) => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });
  console.log('user', user);
  const { name, email, password, password2 } = user;
  const handleChange = e => {
    console.log('here');
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmit = e => {
    e.preventDefault();
    registerUser({ name, email, password });
  };
  return (
    <div className='register'>
      <div className='container'>
        <div className='form-container'>
          <h1 className='large'>Sign Up</h1>
          <p className='lead'>Create your account</p>
          <form onSubmit={handleSubmit}>
            <div className='form-group'>
              <input
                type='text'
                name='name'
                id='name'
                value={name}
                onChange={handleChange}
                required
              />
              <label htmlFor='username'>User Name</label>
            </div>
            <div className='form-group'>
              <input
                type='email'
                name='email'
                id='email'
                value={email}
                onChange={handleChange}
                required
              />
              <label htmlFor='email'>Email</label>
            </div>
            <div className='form-group'>
              <input
                type='password'
                name='password'
                id='password'
                value={password}
                onChange={handleChange}
                required
              />
              <label htmlFor='password'>Password</label>
            </div>
            <div className='form-group'>
              <input
                type='password'
                name='password2'
                id='password2'
                value={password2}
                onChange={handleChange}
                required
              />
              <label htmlFor='password2'>Confirm Password</label>
            </div>
            <button type='submit' className='btn btn-large'>
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

Register.propTypes = {
  registerUser: PropTypes.func.isRequired
};

export default connect(null, { registerUser })(Register);
