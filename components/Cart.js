import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCart, removeFromCart } from '../redux/actions/cartActions';

const Cart = () => {
  const dispatch = useDispatch();
  const { cart, loading, error } = useSelector(state => state.cart);

  useEffect(() => {
    dispatch(getCart());
  }, [dispatch]);

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <div>
      <h2>Your Cart</h2>
      {cart && cart.products.length > 0 ? (
        <ul>
          {cart.products.map(product => (
            <li key={product._id}>
              <p>{product.name}</p>
              <button onClick={() => handleRemoveFromCart(product._id)}>Remove</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Your cart is empty</p>
      )}
    </div>
  );
};

export default Cart;
