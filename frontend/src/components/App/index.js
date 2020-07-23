import React from 'react';

import ProductsPage from '../ProductsPage';
import TopBar from '../TopBar';
import s from './index.module.scss';


const App = () => {
  return (
    <div className={s.App}>
      <TopBar />
      <ProductsPage />
    </div>
  );
}

export default App;
