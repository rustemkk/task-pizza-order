'use strict';

import * as KoaCors from '@koa/cors';
import * as fs from 'fs';
import * as Koa from 'koa';
import * as koaBody from 'koa-body';
import { oas as KoaOas } from 'koa-oas3';
import * as KoaRouter from 'koa-router';
import * as KoaStatic from 'koa-static';
import { each, reduce } from 'lodash';
import * as path from 'path';

import { routes as ordersRoutes } from './orders/orders.controller';
import { routes as productsRoutes } from './products/products.controller';
import { syncDB } from './services/db.service';


const initBackendServer = async () => {
  await syncDB();

  const app: any = new Koa();
  app.use(KoaCors());
  let router = new KoaRouter({ prefix: '/api' });
  const routerVerbs = { post: router.post, get: router.get, put: router.put, delete: router.delete };
  const routes = [ordersRoutes, productsRoutes];
  each(routerVerbs, (func, verb) => {
    const allVerbRoutes = reduce(routes, (res, val) => ({ ...res, ...val[verb] }), {});
    each(allVerbRoutes, (middleware, path) => func.apply(router, [path, middleware]));
  });
  app
    .use(koaBody())
    .use(router.routes())
    .use(router.allowedMethods())
    .use(KoaOas({ file: `${__dirname}/swagger.yml`, uiEndpoint: '/', endpoint: '/openapi.json' }));
  const server = app.listen(3001);
  console.log('Backend server initialized. Listening on port 3001.');

  return server;
}

const initFrontendServer = async () => {
  const app = new Koa();
  const router = new KoaRouter();
  // serve index.html for any url request - for client-side routing
  router.get('/*', ctx => ctx.body = fs.readFileSync(path.join(__dirname, 'frontend_build/index.html'), 'utf8'));
  app
    .use(KoaStatic(__dirname + '/frontend_build'))
    .use(router.routes())
    .listen(3000);

  console.log('Frontend server initialized. Listening on port 3000.');
};

export default process.env.IS_FRONTEND ? initFrontendServer() : initBackendServer();