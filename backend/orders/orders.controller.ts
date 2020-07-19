import { IOrder } from './orders.definition';
import OrdersModel from './orders.model';


async function getOrders(ctx: any) {
  const orders: IOrder[] = await OrdersModel.findAll(999999);

  ctx.body = { orders };
}

async function createOrder(ctx: any) {
  const { name, address, productsPrice, shippingPrice, totalPrice, productsIds } = ctx.request.body;
  let order = await OrdersModel.create({ name, address, productsPrice, shippingPrice, totalPrice });
  await order.setOrderProducts(productsIds);
  order = await OrdersModel.findById(order.id);

  ctx.body = { order };
}

export const routes = {
  get: {
    '/orders': getOrders,
  },
  post: {
    '/orders': createOrder,
  },
};
