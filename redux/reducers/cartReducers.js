const initialState = {
    cart: null,
    loading: true,
    error: null,
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case 'GET_CART_SUCCESS':
      case 'ADD_TO_CART_SUCCESS':
      case 'REMOVE_FROM_CART_SUCCESS':
        return {
          ...state,
          cart: action.payload,
          loading: false,
        };
      case 'GET_CART_FAIL':
      case 'ADD_TO_CART_FAIL':
      case 'REMOVE_FROM_CART_FAIL':
        return {
          ...state,
          error: action.payload,
          loading: false,
        };
      default:
        return state;
    }
  }
  