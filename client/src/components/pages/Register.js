import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/authAction';
import PropTypes from 'prop-types';
import UserDetail from './UserDetail';
import PersonalDetail from './PersonalDetail';
import Confirm from './Confirm';
import Success from './Success';

const Register = ({ isAuthenticated, errors, registerUser }) => {
  const [user, setUser] = useState({
    step: 1,
    name: '',
    email: '',
    password: '',
    password2: '',
    city: '',
    address: '',
    postcode: ''
  });

  const [errorState, setErrorState] = useState({});

  // const { name, email, password, password2 } = user;
  let history = useHistory();

  useEffect(() => {
    if (isAuthenticated) {
      history.push('/dashboard');
    }

    if (errors) {
      setErrorState(errors);
    }
  }, [isAuthenticated, errors, history]);

  //Proceed to next step
  const nextStep = () => {
    setUser({ step: step + 1 });
  };

  //Go back to previous step
  const lastStep = () => {
    setUser({ step: step - 1 });
  };

  const handleChange = input => e => {
    setUser({ ...user, [input]: e.target.value });
  };
  // const handleSubmit = e => {
  //   e.preventDefault();
  //   registerUser({ name, email, password });
  // };

  const { step } = user;
  const { name, email, password, password2, city, address, postcode } = user;
  const values = { name, email, password, password2, city, address, postcode };

  switch (step) {
    case 1:
      return (
        <UserDetail
          nextStep={nextStep}
          handleChange={handleChange}
          values={values}
        />
      );
    case 2:
      return (
        <PersonalDetail
          nextStep={nextStep}
          lastStep={lastStep}
          handleChange={handleChange}
          values={values}
        />
      );
    case 3:
      return (
        <Confirm
          nextStep={nextStep}
          lastStep={lastStep}
          values={values}
          register={registerUser}
        />
      );
    case 4:
      return <Success />;
  }
};

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  errors: state.auth.errors
});

export default connect(mapStateToProps, { registerUser })(Register);
