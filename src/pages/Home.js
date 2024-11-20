import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import UserTable from '../components/UserTable';
import Pagination from '../components/Pagination';
import ErrorMessage from '../components/ErrorMessage';

const Home = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((response) => setUsers(response.data))
      .catch((error) => setError(error.message));
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(() => setUsers(users.filter((user) => user.id !== id)))
      .catch((error) => setError(error.message));
  };

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  return (
    <div>
      <h1>User Management</h1>
      <ErrorMessage message={error} />
      <button onClick={() => navigate('/add')}>Add User</button>
      <UserTable
        users={currentUsers}
        onEdit={(id) => navigate(`/edit/${id}`)}
        onDelete={handleDelete}
      />
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(users.length / usersPerPage)}
        onNext={() => setCurrentPage((prev) => prev + 1)}
        onPrev={() => setCurrentPage((prev) => prev - 1)}
      />
    </div>
  );
};

export default Home;
