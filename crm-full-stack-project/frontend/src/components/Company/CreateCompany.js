import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createCompany } from '../../redux/actions/companyActions';

const CreateCompany = () => {
  const [name, setName] = useState('');
  const [website, setWebsite] = useState('');
  const [error, setError] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  const dispatch = useDispatch();

  // Function to validate form input
  const validateForm = () => {
    let valid = true;
    if (!name) {
      setError('Company name is required');
      valid = false;
    } else {
      setError('');
    }

    const urlPattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
      '(\\#[-a-z\\d_]*)?$','i');
    if (!urlPattern.test(website)) {
      setError('Invalid website URL');
      valid = false;
    } else {
      setError('');
    }

    return valid;
  };

  // Effect to handle form validation
  useEffect(() => {
    setIsFormValid(validateForm());
  }, [name, website]);

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      dispatch(createCompany({ name, website }));
      setName('');
      setWebsite('');
    }
  };

  return (
    <div className='p-5'>
      <h2>Create Company Profile</h2>
      <form onSubmit={handleSubmit}>
        <div className='col-md-3 mb-3'>
          <label>Company Name:</label>
          <input
            className='form-control'
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className='col-md-3 mb-3'>
          <label>Website:</label>
          <input
            className='form-control'
            type="text"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
          />
            {website&&error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
        <div className='col-md-3 mt-3'>
          <button
            className='btn btn-danger'
            disabled={!isFormValid}
            type="submit"
          >
            Create Company
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateCompany;
