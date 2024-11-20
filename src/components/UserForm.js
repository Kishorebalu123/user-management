import React from 'react';

const UserForm = ({ formData, onChange, onSubmit }) => (
  <form className='container' onSubmit={onSubmit}>
    <input
      type="text"
      name="firstName"
      value={formData.firstName}
      onChange={onChange}
      placeholder="First Name"
      required
    />
    <input
      type="text"
      name="lastName"
      value={formData.lastName}
      onChange={onChange}
      placeholder="Last Name"
      required
    />
    <input
      type="email"
      name="email"
      value={formData.email}
      onChange={onChange}
      placeholder="Email"
      required
    />
    <input
      type="text"
      name="department"
      value={formData.department}
      onChange={onChange}
      placeholder="Department"
    />
    <button type="submit">Submit</button>
  </form>
);

export default UserForm;
