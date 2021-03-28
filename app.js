const Koa = require('koa');
const path = require('path');
const Router = require('koa-router');
const Redis = require('ioredis');
const views = require('koa-views');
const serve = require('koa-static');
const bodyParser = require('koa-bodyparser');

const globalRouter = require('./router');

const app = new Koa();

// const redis = new Redis('redis://localhost:6379');

// app.context.redis = redis;

app.use(bodyParser());
app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    if (err.isJoi) {
      ctx.throw(400, err.details[0].message);
    }
    console.log(err);
    ctx.throw(400, 'Something wrong');
  }
});

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