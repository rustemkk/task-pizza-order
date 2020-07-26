import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { useForm, useLocalStorage } from '../../hooks';
import { selectCartPrice, selectShippingPrice, createOrder } from '../../slices/cartSlice';
import Button from '../Button';
import FormInput from '../FormInput';
import PriceTag from '../PriceTag';
import s from './index.module.scss';


const validator = (values) => {
  let errors = {};
  if (!values.name) {
    errors.name = 'Please enter Full Name';
  }
  if (!values.phone) {
    errors.phone = 'Please enter Phone';
  } else if (!/^\d+$/.test(values.phone)) {
    errors.phone = 'Phone can contain only numbers';
  }
  if (!values.zipCode) {
    errors.zipCode = 'Please enter Zip Code';
  }
  if (!values.city) {
    errors.city = 'Please enter City';
  }
  if (!values.street) {
    errors.street = 'Please enter Street & Apartment';
  }
  return errors;
};

const OrderPage = () => {

  const cartPrice = useSelector(selectCartPrice);
  const shippingPrice = useSelector(selectShippingPrice);
  const dispatch = useDispatch();
  const history = useHistory();

  const [personalData, setPersonalData] = useLocalStorage({}, 'personalData');
  const form = useForm(() => dispatch(createOrder(values)), validator, personalData);
  const { handleSubmit, values } = form;
  useEffect(() => {
    return () => setPersonalData(values);
  }, [setPersonalData, values]);

  if (history.location.pathname === '/order-completed') {
    return (
      <div className={s.OrderPage}>
        <div className={s.OrderCompleted}>
          Thank you, your order is on its way! 🙂
           <Button className={s.Button} label="Back to MENU" onClick={() => history.push('/')} />
        </div>
      </div>
    );
  }

  return (
    <div className={s.OrderPage}>
      <form className={s.Form} onSubmit={handleSubmit}>
        <FormInput
          autoFocus
          isRequired
          label="Full Name"
          maxLength={30}
          name="name"
          placeholder="Enter Full Name"
          {...form}
        />
        <FormInput
          isRequired
          label="Phone"
          maxLength={30}
          name="phone"
          placeholder="Enter Phone"
          {...form}
        />
        <FormInput
          isRequired
          label="Zip Code"
          maxLength={30}
          name="zipCode"
          placeholder="Enter Zip Code"
          {...form}
        />
        <FormInput
          isRequired
          label="City"
          maxLength={30}
          name="city"
          placeholder="Enter City"
          {...form}
        />
        <FormInput
          isRequired
          label="Street & Apartment"
          maxLength={100}
          name="street"
          placeholder="Enter Street & Apartment"
          {...form}
        />
        <div className={s.Total}>
          <div className={s.TotalRow}>
            Products price:
            <PriceTag className={s.PriceTag} price={cartPrice} />
          </div>
          <div className={s.TotalRow}>
            Delivery price:
            <PriceTag className={s.PriceTag} price={shippingPrice} />
          </div>
          <div className={s.TotalRow}>
            Order Total:
            <PriceTag className={s.PriceTag} price={cartPrice + shippingPrice} />
          </div>
        </div>
        <Button className={s.Button} label="Place order" />
      </form>
    </div>
  );
}

export default OrderPage;
