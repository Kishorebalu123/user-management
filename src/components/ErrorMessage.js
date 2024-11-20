import React from 'react';

const ErrorMessage = ({ message }) => (
  message ? <p className='error-message' style={{ color: 'red' }}>Error: {message}</p> : null
);

export default ErrorMessage;
