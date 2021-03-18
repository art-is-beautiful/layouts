async function profile(ctx) {
    await ctx.render('index');
}
async function head(ctx) {
    await ctx.render('head');
}
  
  module.exports = {
    profile,
    head,
  };