const Koa = require('koa');
const path = require('path');
const Router = require('koa-router');
const views = require('koa-views');
const serve = require('koa-static');
const globalRouter = require('./router');

const app = new Koa();

const router = new Router();

const port = process.env.PORT || 3002; //

const render = views(path.join(__dirname, '/pug'), {
  extension: 'pug',
  map: {
    pug: 'pug',
  },
});

app.use(render);
app.use(serve(path.join(__dirname, '/dist')));

router.use('/', globalRouter.router1.routes());


app.use(router.routes());

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});