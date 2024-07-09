import axios from 'axios';

export const register = (userData) => async dispatch => {
  try {
    const res = await axios.post('/auth/register', userData);
    dispatch({ type: 'REGISTER_SUCCESS', payload: res.data });
  } catch (error) {
    dispatch({ type: 'REGISTER_FAIL', payload: error.response.data });
  }
};

export const login = (userData) => async dispatch => {
  try {
    const res = await axios.post('/auth/login', userData);
    dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
    localStorage.setItem('token', res.data.token);
  } catch (error) {
    dispatch({ type: 'LOGIN_FAIL', payload: error.response.data });
  }
};

export const logout = () => dispatch => {
  localStorage.removeItem('token');
  dispatch({ type: 'LOGOUT' });
};
