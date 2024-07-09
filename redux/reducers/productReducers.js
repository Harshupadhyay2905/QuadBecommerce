const initialState = {
    products: [],
    product: null,
    loading: true,
    error: null,
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case 'GET_PRODUCTS_SUCCESS':
        return {
          ...state,
          products: action.payload,
          loading: false,
        };
      case 'GET_PRODUCT_SUCCESS':
        return {
          ...state,
          product: action.payload,
          loading: false,
        };
      case 'ADD_PRODUCT_SUCCESS':
        return {
          ...state,
          products: [...state.products, action.payload],
          loading: false,
        };
      case 'UPDATE_PRODUCT_SUCCESS':
        return {
          ...state,
          products: state.products.map(product => product._id === action.payload._id ? action.payload : product),
          loading: false,
        };
      case 'DELETE_PRODUCT_SUCCESS':
        return {
          ...state,
          products: state.products.filter(product => product._id !== action.payload),
          loading: false,
        };
      case 'GET_PRODUCTS_FAIL':
      case 'GET_PRODUCT_FAIL':
      case 'ADD_PRODUCT_FAIL':
      case 'UPDATE_PRODUCT_FAIL':
      case 'DELETE_PRODUCT_FAIL':
        return {
          ...state,
          error: action.payload,
          loading: false,
        };
      default:
        return state;
    }
  }
  