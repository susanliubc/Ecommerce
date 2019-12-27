import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/authAction';
import PropTypes from 'prop-types';

const Login = ({ isAuthenticated, errors, loginUser }) => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const [errorState, setErrorState] = useState({});

  const { name, password } = user;
  let history = useHistory();

  useEffect(() => {
    if (isAuthenticated) {
      history.push('/dashboard');
    }

    if (errors) {
      setErrorState(errors);
    }
  }, [isAuthenticated, errors, history]);

  const handleChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmit = e => {
    e.preventDefault();
    loginUser({ name, password });
  };
  return (
    <div className='login'>
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
              {errorState && (
                <div className='invalid-feedback'>{errorState.name}</div>
              )}
              <label htmlFor='username'>User Name</label>
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
              {errorState && (
                <div className='invalid-feedback'>{errorState.password}</div>
              )}
              <label htmlFor='password'>Password</label>
            </div>
            <button type='submit' className='btn btn-large'>
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  errors: state.auth.errors
});

export default connect(mapStateToProps, { loginUser })(Login);
