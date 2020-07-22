import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addProductToCart } from '../../slices/cartSlice';
import { loadProducts, selectProducts } from '../../slices/productsSlice';
import Button from '../Button';
import PriceTag from '../PriceTag';
import s from './index.module.scss';


const ProductsPage = () => {

  const products = useSelector(selectProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadProducts());
  }, [dispatch]);

  return (
    <div className={s.ProductsPage}>
      {products.map(product =>
        <div className={s.Product} key={product.id}>
          <img alt={product.title} src={product.picture} />
          <span className={s.Name}>
            {`${product.title} - `}
            <PriceTag price={product.price} />
          </span>
          <span className={s.Description}>
            {product.description}
          </span>
          <span className={s.Actions}>
            <Button label="Add to cart" onClick={() => dispatch(addProductToCart({ product }))} />
          </span>
        </div>
      )}
      {[...Array(50)].map((_, index) =>
        <div key={index} className={s.ProductPlaceholder} />
      )}
    </div>
  );
}

export default ProductsPage;
