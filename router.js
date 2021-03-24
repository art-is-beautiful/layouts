const Router = require('koa-router');

const controllers = require('./controller');
// const head = require('./controller');

//sign In
const router1 = new Router();
router1.get('1', controllers.signin);
router1.get('2', controllers.signin1);
router1.get('3', controllers.signin2);
router1.get('4', controllers.signin3);

//sign Up 
router1.get('5', controllers.signup1);
router1.get('6', controllers.signup2);
router1.get('7', controllers.signup3);

//Profile
router1.get('8', controllers.profile1);
router1.get('9', controllers.profile2);

//Search
router1.get('10', controllers.search1);
router1.get('11', controllers.search2);

//Admin

router1.get('12', controllers.admin);

module.exports = {
  router1,
};