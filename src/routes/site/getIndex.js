const client = require('./../../db/client');

module.exports = async (ctx) => {
  // console.log(await client.select().from('user_local'));
  client.transaction(trx => (
    trx.insert({
      id: 1,
      last_name: 'zhangist',
    }, 'id').into('user_local').then(() => (
      trx.insert({
        id: 29999999999999999999,
        last_name: 'zhangist2',
      }).into('user_local')
    ))
  )).then((inserts) => {
    console.log(inserts.length);
  }).catch((error) => {
    console.log(error);
  });
  await ctx.render('site/index', {
    title: '',
  });
};
