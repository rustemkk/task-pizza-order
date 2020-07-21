import React from 'react';

import ProductsPage from '../ProductsPage';
import s from './index.module.scss';


const App = () => {
  return (
    <div className={s.App}>
      <ProductsPage />
    </div>
  );
}

export default App;
