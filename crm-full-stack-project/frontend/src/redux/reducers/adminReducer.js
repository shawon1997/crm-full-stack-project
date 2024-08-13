import { CREATE_ADMIN, LIST_ADMINS, UPDATE_ADMIN } from "../actions/type";

const initialState = {
  admins: [],
  admin: null
};

  export const adminReducer = (state = initialState, action)=> {
  switch (action.type) {
    case CREATE_ADMIN:
      return {
        ...state,
        admins: [...state.admins, action.payload]
      };
    case UPDATE_ADMIN:
      return {
        ...state,
        admins: state.admins.map(admin =>
          admin.id === action.payload.id ? action.payload : admin
        )
      };
    case LIST_ADMINS:
      return {
        ...state,
        admins: action.payload
      };
    default:
      return state;
  }
}
