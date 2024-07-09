import axios from 'axios';

export const getProducts = () => async dispatch => {
  try {
    const res = await axios.get('/products');
    dispatch({ type: 'GET_PRODUCTS_SUCCESS', payload: res.data });
  } catch (error) {
    dispatch({ type: 'GET_PRODUCTS_FAIL', payload: error.response.data });
  }
};

export const getProduct = (id) => async dispatch => {
  try {
    const res = await axios.get(`/products/${id}`);
    dispatch({ type: 'GET_PRODUCT_SUCCESS', payload: res.data });
  } catch (error) {
    dispatch({ type: 'GET_PRODUCT_FAIL', payload: error.response.data });
  }
};

export const addProduct = (productData) => async dispatch => {
  try {
    const res = await axios.post('/products', productData, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
    dispatch({ type: 'ADD_PRODUCT_SUCCESS', payload: res.data });
  } catch (error) {
    dispatch({ type: 'ADD_PRODUCT_FAIL', payload: error.response.data });
  }
};

export const updateProduct = (id, productData) => async dispatch => {
  try {
    const res = await axios.put(`/products/${id}`, productData, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
    dispatch({ type: 'UPDATE_PRODUCT_SUCCESS', payload: res.data });
  } catch (error) {
    dispatch({ type: 'UPDATE_PRODUCT_FAIL', payload: error.response.data });
  }
};

export const deleteProduct = (id) => async dispatch => {
  try {
    await axios.delete(`/products/${id}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
    dispatch({ type: 'DELETE_PRODUCT_SUCCESS', payload: id });
  } catch (error) {
    dispatch({ type: 'DELETE_PRODUCT_FAIL', payload: error.response.data });
  }
};
