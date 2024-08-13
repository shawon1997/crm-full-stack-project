import { combineReducers } from 'redux';
import { adminReducer } from './adminReducer';
import { companyReducer } from './companyReducer';
import { visitReducer } from './visitReducer';
import { employeeReducer } from './employeeReducer';

const rootReducer = combineReducers({
  company: companyReducer,
  admin: adminReducer,
  visit: visitReducer,
  employee: employeeReducer
});

export default rootReducer;
