import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../redux/actions/productActions';
import { addToCart } from '../redux/actions/cartActions';

const ProductDetail = ({ match }) => {
  const dispatch = useDispatch();
  const { product, loading, error } = useSelector(state => state.products);

  useEffect(() => {
    dispatch(getProduct(match.params.id));
  }, [dispatch, match.params.id]);

  const handleAddToCart = () => {
    dispatch(addToCart(product._id, 1));
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>{product.price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductDetail;
