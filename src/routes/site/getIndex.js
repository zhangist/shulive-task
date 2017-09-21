// const client = require('./../../db/client');

module.exports = async (ctx) => {
  await ctx.render('site/index', {
    title: '',
  });
};
