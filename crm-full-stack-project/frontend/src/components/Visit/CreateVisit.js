import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createVisit } from '../../redux/actions/visitActions';

const CreateVisit = () => {
  const [formData, setFormData] = useState({
    company_id: '',
    admin_id: '',
    emp_id: '',
    service_user_id: '',
    assigned_date: '',
    assigned_starttime: '',
    assigned_endtime: '',
    status: '',
    distance: '',
  });

  const [error, setError] = useState('');
  const dispatch = useDispatch();

  const validateForm = () => {
    if (!formData.company_id || !formData.admin_id || !formData.emp_id || !formData.service_user_id || !formData.assigned_date || !formData.assigned_starttime || !formData.assigned_endtime || !formData.status || !formData.distance) {
      setError('All fields are required');
      return false;
    }
    return true;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      dispatch(createVisit(formData));
      setFormData({
        company_id: '',
        admin_id: '',
        emp_id: '',
        service_user_id: '',
        assigned_date: '',
        assigned_starttime: '',
        assigned_endtime: '',
        status: '',
        distance: '',
      });
      setError('');
    }
  };

  return (
    <div className="p-5">
      <h2>Create Visit</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        {/* Add form fields here */}
        {/* Example for company_id */}
        <div className='col-md-3 mb-3'>
          <label>Company ID:</label>
          <input
            type="text"
            name="company_id"
            value={formData.company_id}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        {/* Add similar blocks for other fields */}
        <div className='col-md-3'>
        <button type="submit" className="btn btn-danger">
          Create Visit
        </button>
        </div>
      </form>
    </div>
  );
};

export default CreateVisit;
