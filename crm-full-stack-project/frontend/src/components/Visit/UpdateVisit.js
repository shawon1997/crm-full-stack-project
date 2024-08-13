import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getVisitById, updateVisit } from '../../redux/actions/visitActions';

const UpdateVisit = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const visit = useSelector((state) => state.visit);

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

  useEffect(() => {
    dispatch(getVisitById(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (visit) {
      setFormData(visit);
    }
  }, [visit]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateVisit(id, formData));
  };

  return (
    <div className="p-5">
      <h2>Update Visit</h2>
      <form onSubmit={handleSubmit}>
        {/* Add form fields similar to CreateVisit component */}
        <button type="submit" className="btn btn-danger">
          Update Visit
        </button>
      </form>
    </div>
  );
};

export default UpdateVisit;
