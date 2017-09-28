/**
 * !!!!!!!!!!!!!!!!!!!! Attention !!!!!!!!!!!!!!!!!!!!
 * Rename this file to "app.dev.js" or "app.prd.js" and set
 * the corresponding environment variables.
 * Directory structure:
 * +-bin
 * `-config
 *   |-app.dev-or-prd.js (template of app.dev.js or app.prd.js)
 *   |-app.dev.js (for development, git ignore)
 *   `-app.prd.js (for production, git ignore)
 * ...
 */
module.exports = {
  mysql: {
    host: 'localhost',
    port: '3306',
    user: 'shulive',
    password: 'shulive',
    database: 'shulive',
  },
  staticHost: 'https://static.shulive.com',
};
