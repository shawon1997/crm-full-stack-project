import axios from 'axios';
import { CREATE_ADMIN, LIST_ADMINS, UPDATE_ADMIN } from './type';

// Create Admin
export const createAdmin = (adminData) => async (dispatch) => {
  try {
    const response = await axios.post('/api/admin', adminData);
    dispatch({ type: CREATE_ADMIN, payload: response.data });
  } catch (err) {
    console.error(err);
  }
};

// Update Admin
export const updateAdmin = (id, adminData) => async (dispatch) => {
  try {
    const res = await axios.put(`/api/admin/${id}`, adminData);
    dispatch({ type: UPDATE_ADMIN, payload: res.data });
  } catch (err) {
    console.error(err);
  }
};

// List Admins
export const listAdmins = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/admins');
    dispatch({ type: LIST_ADMINS, payload: res.data });

  } catch (err) {
    console.error(err);
  }
};
