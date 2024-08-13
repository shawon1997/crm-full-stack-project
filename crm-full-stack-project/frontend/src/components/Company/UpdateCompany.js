import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateCompany, fetchCompanies } from '../../redux/actions/companyActions';
import { useParams } from 'react-router-dom';

const UpdateCompany = ({ match }) => {
  const [name, setName] = useState('');
  const [website, setWebsite] = useState('');
  const [error, setError] = useState('');

  const dispatch = useDispatch();
  const {companies} = useSelector((state) => state.company);
  const {id} = useParams();
  console.log('jzsfbkz',useParams(),id);

  useEffect(() => {
    dispatch(fetchCompanies());
  }, [dispatch]);

  useEffect(() => {
    const company = companies.find((c) => c.id === parseInt(id));
    if (company) {
      setName(company.name);
      setWebsite(company.website);
    }
  }, [companies, id]);

  const validateForm = () => {
    if (!name) {
      setError('Company name is required');
      return false;
    }
    const urlPattern = new RegExp('^(https?:\\/\\/)?'+
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+
      '((\\d{1,3}\\.){3}\\d{1,3}))'+
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+
      '(\\?[;&a-z\\d%_.~+=-]*)?'+
      '(\\#[-a-z\\d_]*)?$','i');
    if (!urlPattern.test(website)) {
      setError('Invalid website URL');
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      dispatch(updateCompany(id, { name, website }));
      setError('');
    }
  };

  return (
    <div className='p-5'>
      <h2>Update Company Profile</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className='col-md-3 mb-3'>
          <label>Company Name:</label>
          <input
            type="text"
            className='form-control'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className='col-md-3 mb-3'>
          <label>Website:</label>
          <input
            type="text"
            className='form-control'
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
          />
        </div>
        <div className='col-md-3'>
        <button className='btn btn-danger' type="submit">Update Company</button></div>
      </form>
    </div>
  );
};

export default UpdateCompany;
