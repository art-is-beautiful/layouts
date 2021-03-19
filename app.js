const Koa = require('koa');
const path = require('path');
const Router = require('koa-router');
const views = require('koa-views');
const serve = require('koa-static');
const globalRouter = require('./router');

const app = new Koa();

const router = new Router();

const port = process.env.PORT || 3001; //

const render = views(path.join(__dirname, '/pug'), {
  extension: 'pug',
  map: {
    pug: 'pug',
  },
});

app.use(render);
app.use(serve(path.join(__dirname, '/dist')));

// Sign In
router.use('/', globalRouter.router1.routes());
router.use('/', globalRouter.router2.routes());
router.use('/', globalRouter.router3.routes());
router.use('/', globalRouter.router4.routes());

//Sign Up
router.use('/', globalRouter.router5.routes());
router.use('/', globalRouter.router6.routes());
router.use('/', globalRouter.router7.routes());

//Profile
router.use('/', globalRouter.router8.routes());
router.use('/', globalRouter.router9.routes());

//Search
router.use('/', globalRouter.router10.routes());
router.use('/', globalRouter.router11.routes());

//Admin
router.use('/', globalRouter.router12.routes());

app.use(router.routes());

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});