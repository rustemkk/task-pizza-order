import ProductsModel from './products.model';
import { IProduct } from './products.definition';


async function getProducts(ctx: any) {
  const products: IProduct[] = await ProductsModel.findAll(999999);

  ctx.body = { products };
}

export const routes = {
  get: {
    '/products': getProducts,
  },
};
