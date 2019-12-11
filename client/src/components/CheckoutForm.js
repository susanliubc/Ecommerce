import React from 'react';
import { Field, reduxForm } from 'redux-form';

let CheckoutForm = ({ handleSubmit }) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='orderName'>Your Name</label>
          <br />
          <Field name='orderName' component='input' type='text' />
        </div>
        <div>
          <label htmlFor='orderEmail'>Email</label>
          <br />
          <Field name='orderEmail' component='input' type='email' />
        </div>
        <div>
          <button type='submit'>Submit order</button>
        </div>
      </form>
    </div>
  );
};

CheckoutForm = reduxForm({
  form: 'checkout'
})(CheckoutForm);

export default CheckoutForm;

