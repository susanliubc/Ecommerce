import React, { Fragment } from 'react';

const Confirm = ({ values, lastStep, register }) => {
  const { name, email, password, city, address, postcode } = values;
  const handleSubmit = e => {
    e.preventDefault();
    register({ name, email, password, city, address, postcode });
  };

  const handleBack = e => {
    e.preventDefault();
    lastStep();
  };
  return (
    <Fragment>
      <div className='confirm-container'>
        <p>{`Name: ${name}`}</p>
        <p>{`Email: ${email}`}</p>
        <p>{`City: ${city}`}</p>
        <p>{`Address: ${address}`}</p>
        <p>{`Postcode: ${postcode}`}</p>
        <div className='buttons'>
          <button
            type='button'
            className='btn btn-block'
            onClick={handleSubmit}
          >
            Submit
          </button>
          <button type='button' className='btn btn-block' onClick={handleBack}>
            Back
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default Confirm;
