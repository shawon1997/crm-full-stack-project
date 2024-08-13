import axios from 'axios';

export const fetchCompanies = () => async (dispatch) => {
  dispatch({ type: 'FETCH_COMPANIES_REQUEST' });

  try {
    const response = await axios.get('/api/companies');
    console.log('');
    dispatch({ type: 'FETCH_COMPANIES_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'FETCH_COMPANIES_FAILURE', payload: error.message });
  }
};


export const createCompany = (companyData) => async (dispatch) => {
  try {
    const response = await axios.post('/api/company', companyData);
    dispatch({ type: 'CREATE_COMPANY_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'CREATE_COMPANY_FAILURE', payload: error.message });
  }
};

export const updateCompany = (id, companyData) => async (dispatch) => {
  try {
    const response = await axios.put(`/api/company/${id}`, companyData);
    dispatch({ type: 'UPDATE_COMPANY_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'UPDATE_COMPANY_FAILURE', payload: error.message });
  }
};
