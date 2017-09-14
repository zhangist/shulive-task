const client = require('./../../db/client');

module.exports = async (ctx) => {
  const resualt = {
    type: 'success',
    msg: '',
  };
  if (ctx.request.body.email && ctx.request.body.password) {
    ctx.session.user = {
      email: ctx.request.body.email,
      username: ctx.request.body.email,
    };
    ctx.redirect('/');
  } else {
    resualt.type = 'error';
    resualt.msg = ctx.state.__('email-password-required');
    await ctx.render('site/login', {
      title: ctx.state.__('login'),
      resualt,
    });
  }
};
