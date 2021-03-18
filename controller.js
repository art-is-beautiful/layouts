async function profile(ctx) {
    await ctx.render('index');
  }
  
  module.exports = {
    profile,
  };