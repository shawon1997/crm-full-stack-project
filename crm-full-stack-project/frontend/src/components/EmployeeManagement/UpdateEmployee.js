import React, { useEffect, useState } from 'react'
import { updateAdmin } from '../../redux/actions/adminAction';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { updateEmployee } from '../../redux/actions/employeeAction';

const UpdateEmployee = () => {
    const { id } = useParams();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');

  const dispatch = useDispatch();
  const admin = useSelector((state) => state.admin.admins.find(admin => admin.id === parseInt(id)));

  useEffect (() => {
    if (admin) {
      setName(admin.name);
      setEmail(admin.email);
      setPhone(admin.phone);
    }
  }, [admin]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !phone) {
      setError('All fields are required');
      return;
    }

    dispatch(updateEmployee(id, { name, email, phone }));
    setName('');
    setEmail('');
    setPhone('');
    setError('');
  };

  return (
    <div>
      <h2>Update Employee Profile</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <button type="submit">Update Admin</button>
      </form>
    </div>
  );
};

export default UpdateEmployee
