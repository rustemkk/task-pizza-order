import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import { loadCurrencyRate } from '../../slices/cartSlice';
import OrderPage from '../OrderPage';
import ProductsPage from '../ProductsPage';
import TopBar from '../TopBar';
import s from './index.module.scss';


const App = () => {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadCurrencyRate());
  }, [dispatch]);

  return (
    <div className={s.App}>
      <TopBar />
      <Switch>
        <Route exact path="/" component={ProductsPage} />
        <Route exact path="/order" component={OrderPage} />
        <Route exact path="/order-completed" component={OrderPage} />
        <Route component={() => <div><br />Page not found.</div>} />
      </Switch>
    </div>
  );
}

export default App;
