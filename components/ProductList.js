import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../redux/actions/productActions';
import { Link } from 'react-router-dom';

const ProductList = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector(state => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map(product => (
          <li key={product._id}>
            <Link to={`/products/${product._id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
