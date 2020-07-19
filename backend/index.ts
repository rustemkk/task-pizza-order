'use strict';

import * as KoaCors from '@koa/cors';
import * as Koa from 'koa';
import { oas as KoaOas } from 'koa-oas3';
import * as KoaRouter from 'koa-router';
import { each, reduce } from 'lodash';

import { routes as productsRoutes } from './products/products.controller';
import { syncDB } from './services/db.service';


export const init = async () => {
  await syncDB();
  
  const app: any = new Koa();
  app.use(KoaCors());
  let router = new KoaRouter({ prefix: '/api' });
  const routerVerbs = { post: router.post, get: router.get, put: router.put, delete: router.delete };
  const routes = [productsRoutes];
  each(routerVerbs, (func, verb) => {
    const allVerbRoutes = reduce(routes, (res, val) => ({ ...res, ...val[verb] }), {});
    each(allVerbRoutes, (middleware, path) => func.apply(router, [path, middleware]));
  });
  app
    .use(router.routes())
    .use(router.allowedMethods())
    .use(KoaOas({ file: `${__dirname}/swagger.yml`, uiEndpoint: '/', endpoint: '/openapi.json' }));
  const server = app.listen(3000);
  console.log('Backend server initialized. Listening on port 3000.');

  return server;
};

export default init();
