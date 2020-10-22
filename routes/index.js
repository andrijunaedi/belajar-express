const routes = require('express').Router();

const test = require('./test/test');
const user = require('./user/user');
const product = require('./product/product');
const ninjas = require('./ninjas/ninjas');

routes.use('/test', test);
routes.use('/user', user);
routes.use('/ninjas', ninjas);
routes.use('/product', product);

module.exports = routes;
