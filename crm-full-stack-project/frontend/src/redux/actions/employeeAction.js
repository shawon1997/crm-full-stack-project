import axios from "axios";
import { CREATE_EMPLOYEE, LIST_EMPLOYEES, UPDATE_EMPLOYEE } from './type';


export const createEmployee = (employeeData) => async (dispatch) => {
    try {
      const res = await axios.post('/api/employee', employeeData, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        withCredentials: true, // Include credentials if needed
      });
      dispatch({ type: CREATE_EMPLOYEE, payload: res.data });
    } catch (err) {
      console.error(err);
    }
  };
  
  export const updateEmployee = (employeeId, updatedData) => async (dispatch) => {
    try {
      const res = await axios.put(`/api/employee/${employeeId}`, updatedData, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        withCredentials: true, // Include credentials if needed
      });
      dispatch({ type: UPDATE_EMPLOYEE, payload: res.data });
    } catch (err) {
      console.error(err);
    }};
  
  export const listEmployees = () => async (dispatch) => {
    try {
      const res = await axios.get('/api/employees');
      dispatch({ type: LIST_EMPLOYEES, payload: res.data });
  
    } catch (err) {
      console.error(err);
    }};
  