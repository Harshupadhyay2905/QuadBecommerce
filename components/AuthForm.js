import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, register } from '../redux/actions/authActions';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ username: '', password: '' });
  const dispatch = useDispatch();
  const { error } = useSelector(state => state.auth);

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    if (isLogin) {
      dispatch(login(formData));
    } else {
      dispatch(register(formData));
    }
  };

  return (
    <div>
      <h2>{isLogin ? 'Login' : 'Register'}</h2>
      {error && <p>{error.message}</p>}
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" value={formData.username} onChange={handleChange} placeholder="Username" required />
        <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" required />
        <button type="submit">{isLogin ? 'Login' : 'Register'}</button>
      </form>
      <button onClick={() => setIsLogin(!isLogin)}>{isLogin ? 'Switch to Register' : 'Switch to Login'}</button>
    </div>
  );
};

export default AuthForm;
