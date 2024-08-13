import { CREATE_VISIT, LIST_VISITS, UPDATE_VISIT } from "../actions/type";

const initialState = {
  visits: [],
};

export const visitReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_VISIT:
      return { ...state, visits: [...state.visits, action.payload] };
    case UPDATE_VISIT:
      return {
        ...state,
        visits: state.visits.map((visit) =>
          visit.id === action.payload.id ? action.payload.visitData : visit
        ),
      };
    case LIST_VISITS:
      return { ...state };
    default:
      return state;
  }
};
