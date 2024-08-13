import { CREATE_EMPLOYEE, LIST_EMPLOYEES, UPDATE_EMPLOYEE } from "../actions/type";

const initialState = {
  employees: [],
  employee: null
};

  export const employeeReducer = (state = initialState, action)=> {
  switch (action.type) {
    case CREATE_EMPLOYEE:
      return {
        ...state,
        employees: [...state.employees, action.payload]
      };
    case UPDATE_EMPLOYEE:
      return {
        ...state,
        employees: state.employees.map(employee =>
          employee.id === action.payload.id ? action.payload : employee
        )
      };
    case LIST_EMPLOYEES:
      return {
        ...state,
        employees: action.payload
      };
    default:
      return state;
  }
}
