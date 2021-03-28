const db = require('./db/db');
const validator = require('./validator');

async function signin(ctx) {
    await ctx.render('index');
}
async function signin1(ctx) {
    await ctx.render('./signIn/passRecovery');
}
async function signin2(ctx) {
  await ctx.render('./signIn/passRecovery2');
}
async function signin3(ctx) {
  await ctx.render('./signIn/passRecovery3');
}

//Sign Up
async function signup1(ctx) {
  await ctx.render('./signUp/signUp1');
}
async function signup2(ctx) {
await ctx.render('./signUp/signUp2');
}
async function signup3(ctx) {
await ctx.render('./signUp/signUp3');
}

//Profile
async function profile1(ctx) {

  const userResponse = await db.query(`SELECT * FROM "category" ORDER BY num DESC LIMIT 1`);

  const categoryyResponse = userResponse.rows[0].categoryy;

  await ctx.render('./profile/personal', text = categoryyResponse);

}
async function profile2(ctx) {
  await ctx.render('./profile/account');
}

//Search
async function search1(ctx) {
  await ctx.render('./search/results');
}
async function search2(ctx) {
  await ctx.render('./search/result-map');
}

//Admin
async function admin(ctx) {
  await ctx.render('./admin/manage');
}

async function createUser(ctx) {
  const { body } = ctx.request;

  await validator.schema.validateAsync(body);

  const createUserResponse = await db.query(`INSERT INTO "category" (categoryy) VALUES ('${body.categoryy}') RETURNING *`);

  const category = { ...createUserResponse.rows[0] };

  // await ctx.redis.set(category.num, JSON.stringify(category));

  ctx.status = 201;
  ctx.body = {
    num: category.num,
    categoryy: category.categoryy,
  };
}

async function deleteUser(ctx) {
  const { body } = ctx.request;
  const userId = ctx.request.params.userId;

  console.log('delete');

  const createUserResponse = await db.query(`DELETE FROM category WHERE num = ${userId} RETURNING *`);

  const category = { ...createUserResponse.rows[0] };
  // const category = {
  //   "message": "Deleted",
  // }

  // await ctx.redis.set(category.num, JSON.stringify(category));

  ctx.status = 201;
  ctx.body = {
    message: "DELETED",
  };
}

async function updateUser(ctx) {
  const { num, categoryy } = ctx.request.body;

  console.log('update');

  const createUserResponse = await db.query(`UPDATE category SET categoryy = '${categoryy}' WHERE num = ${num} RETURNING *`);

  const category = { ...createUserResponse.rows[0] };

  // await ctx.redis.set(category.num, JSON.stringify(category));

  ctx.status = 201;
  ctx.body = {
    num: category.num,
    categoryy: category.categoryy,
  };
}

async function getOneUser(ctx) {
  const userId = ctx.request.params.userId;

  console.log('getOneUser');

  const createUserResponse = await db.query(`SELECT * FROM category WHERE num = ${userId}`);

  const category = { ...createUserResponse.rows[0] };

  // await ctx.redis.set(category.num, JSON.stringify(category));

  ctx.status = 201;
  ctx.body = {
    num: category.num,
    categoryy: category.categoryy,
  };
}


  module.exports = {
    signin,
    signin1,
    signin2,
    signin3,
    signup1,
    signup2,
    signup3,
    profile1,
    profile2,
    search1,
    search2,
    admin,
    createUser,
    deleteUser,
    updateUser,
    getOneUser,
  };