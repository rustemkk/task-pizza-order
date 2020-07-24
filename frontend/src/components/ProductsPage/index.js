import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addProductToCart, removeProductFromCart, selectCartProducts } from '../../slices/cartSlice';
import { loadProducts, selectProducts } from '../../slices/productsSlice';
import Button from '../Button';
import PriceTag from '../PriceTag';
import s from './index.module.scss';


const ProductsPage = () => {

  const products = useSelector(selectProducts);
  const cartProducts = useSelector(selectCartProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadProducts());
  }, [dispatch]);

  const renderActions = (product) => {
    const cartProduct = cartProducts.find(cp => cp.id === product.id);
    if (!cartProduct) {
      return <Button label="Add to cart" onClick={() => dispatch(addProductToCart({ product }))} />;
    }
    return (
      <div className={s.Counter}>
        <Button className={s.PlusMinus} label="-" onClick={() => dispatch(removeProductFromCart({ product: product }))} />
        <span className={s.Count}>{cartProduct.count}</span>
        <Button className={s.PlusMinus} label="+" onClick={() => dispatch(addProductToCart({ product }))} />
      </div>
    );
  }

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
            {renderActions(product)}
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
