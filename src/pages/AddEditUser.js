import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import UserForm from '../components/UserForm';
import ErrorMessage from '../components/ErrorMessage';

const AddEditUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    department: '',
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    if (id) {
      axios
        .get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((response) => {
          const { name, email, company } = response.data;
          const [firstName, lastName] = name.split(' ');
          setFormData({
            firstName,
            lastName,
            email,
            department: company?.name || '',
          });
        })
        .catch((error) => setError(error.message));
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      name: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      company: { name: formData.department },
    };

    const apiCall = id
      ? axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, userData)
      : axios.post('https://jsonplaceholder.typicode.com/users', userData);

    apiCall
      .then(() => navigate('/'))
      .catch((error) => setError(error.message));
  };

  return (
    <div>
      <h1>{id ? 'Edit User' : 'Add User'}</h1>
      <ErrorMessage message={error} />
      <UserForm
        formData={formData}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default AddEditUser;
