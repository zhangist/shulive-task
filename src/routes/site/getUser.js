const client = require('./../../models/client');

module.exports = async (ctx) => {
  let where;
  if (ctx.params.uid) {
    // where = `user_local.id = CAST(${ctx.params.uid} AS UNSIGNED INTEGER)`;
    where = `user_local.id = ${ctx.params.uid}`;
  } else if (ctx.params.urlName) {
    where = `user.username = ${ctx.params.urlName}`;
  }
  // client.raw(where)
  if (where) {
    const userData = await client.select().from('user_local')
      .where(where) // { 'user_local.id': `CAST(${ctx.params.uid} AS UNSIGNED INTEGER)` }
      .leftJoin('shulive.user', 'shulive.user.id', 'user_local.id');
    if (userData) {
      console.log(userData);
      await ctx.render('site/user', {
        title: '',
        userData: userData[0] || {},
      });
    } else {
      ctx.redirect('/');
    }
  } else {
    ctx.redirect('/');
  }
};
