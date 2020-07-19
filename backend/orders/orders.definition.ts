export interface IOrder {
  id: number;
  name: string;
  address: IAddress;
  productsPrice: number;
  shippingPrice: number;
  totalPrice: number;
}

export interface IAddress {
  zipCode: string;
  city: string;
  street: string;
}
