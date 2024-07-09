import axios from 'axios';

export const getCart = () => async dispatch => {
  try {
    const res = await axios.get('/cart', {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
    dispatch({ type: 'GET_CART_SUCCESS', payload: res.data });
  } catch (error) {
    dispatch({ type: 'GET_CART_FAIL', payload: error.response.data });
  }
};

export const addToCart = (productId, quantity) => async dispatch => {
  try {
    const res = await axios.post('/cart', { productId, quantity }, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
    dispatch({ type: 'ADD_TO_CART_SUCCESS', payload: res.data });
  } catch (error) {
    dispatch({ type: 'ADD_TO_CART_FAIL', payload: error.response.data });
  }
};

export const removeFromCart = (id) => async dispatch => {
  try {
    const res = await axios.delete(`/cart/${id}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
    dispatch({ type: 'REMOVE_FROM_CART_SUCCESS', payload: res.data });
  } catch (error) {
    dispatch({ type: 'REMOVE_FROM_CART_FAIL', payload: error.response.data });
  }
};
