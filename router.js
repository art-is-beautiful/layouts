const Router = require('koa-router');

const controllers = require('./controller');
// const head = require('./controller');

//sign In
const router1 = new Router();
router1.get('1', controllers.signin);
const router2 = new Router();
router2.get('2', controllers.signin1);
const router3 = new Router();
router3.get('3', controllers.signin2);
const router4 = new Router();
router4.get('4', controllers.signin3);

//sign Up 
const router5 = new Router();
router5.get('5', controllers.signup1);
const router6 = new Router();
router6.get('6', controllers.signup2);
const router7 = new Router();
router7.get('7', controllers.signup3);

//Profile
const router8 = new Router();
router8.get('8', controllers.profile1);
const router9 = new Router();
router9.get('9', controllers.profile2);

//Search
const router10 = new Router();
router10.get('10', controllers.search1);
const router11 = new Router();
router11.get('11', controllers.search2);

//Admin
const router12 = new Router();
router12.get('12', controllers.admin);

module.exports = {
  router1,
  router2,
  router3,
  router4,
  router5,
  router6,
  router7,
  router8,
  router9,
  router10,
  router11,
  router12,
};