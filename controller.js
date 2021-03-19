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
  await ctx.render('./profile/personal');
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
  };