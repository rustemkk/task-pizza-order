import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { loadProducts, selectProducts } from '../../slices/productsSlice';
import Button from '../Button';
import s from './index.module.scss';


const ProductsPage = () => {

  const products = useSelector(selectProducts);
  const dispatch = useDispatch();

  console.log(1, products);

  useEffect(() => {
    dispatch(loadProducts());
  }, [dispatch]);

  const renderPrice = (price) => {
    const number1 = Math.floor(price / 100);
    const number2 = price % 100;
    return (
      <span className={s.BigNumber}>
        {number1}
        <span className={s.SmallNumber}>
          .{number2}
        </span >
      </span>
    );
  }

  return (
    <div className={s.ProductsPage}>
      {products.map(product =>
        <div className={s.Product} key={product.id}>
          <img alt={product.title} src={product.picture} />
          <span className={s.Name}>
            {`${product.title} - `}
            {renderPrice(product.price)}
          </span>
          <span className={s.Description}>
            {product.description}
          </span>
          <span className={s.Actions}>
            <Button label="Add to cart" />
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
