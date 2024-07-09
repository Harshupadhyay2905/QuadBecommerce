const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    user: null,
    error: null,
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case 'REGISTER_SUCCESS':
      case 'LOGIN_SUCCESS':
        return {
          ...state,
          token: action.payload.token,
          isAuthenticated: true,
          loading: false,
        };
      case 'REGISTER_FAIL':
      case 'LOGIN_FAIL':
      case 'LOGOUT':
        return {
          ...state,
          token: null,
          isAuthenticated: false,
          loading: false,
          user: null,
          error: action.payload,
        };
      default:
        return state;
    }
  }
  