const initialState = {
    companies: [],
    loading: false,
    error: null
  };
  
  export const companyReducer = (state = initialState, action) => {
    console.log('mndhsfb',action);
    switch (action.type) {
      case 'FETCH_COMPANIES_REQUEST':
        return { ...state, loading: true };
      case 'FETCH_COMPANIES_SUCCESS':
        return { ...state, loading: false, companies: action.payload };
      case 'FETCH_COMPANIES_FAILURE':
        return { ...state, loading: false, error: action.payload };
        case 'CREATE_COMPANY_SUCCESS':
      return { ...state, companies: [...state.companies, action.payload] };
    case 'CREATE_COMPANY_FAILURE':
      return { ...state, error: action.payload };
    case 'UPDATE_COMPANY_SUCCESS':
      return {
        ...state,
        companies: state.companies.map((company) =>
          company.id === action.payload.id ? action.payload : company
        ),
      };
    case 'UPDATE_COMPANY_FAILURE':
      return { ...state, error: action.payload };
      default:
        return state;
    }
  };
  