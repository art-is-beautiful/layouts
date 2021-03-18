const Router = require('koa-router');

const controllers = require('./controller');
// const head = require('./controller');

const router = new Router();

router.get('home', controllers.profile);

const admin_head = new Router();

admin_head.get('head', controllers.head);

module.exports = {
  router,
  admin_head,
};