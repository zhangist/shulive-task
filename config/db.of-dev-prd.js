/**
 * !!!!!!!!!!!!!!!! Attention !!!!!!!!!!!!!!!!
 * Rename this file to "db.dev.js" or "db.prd.js"
 * and set the corresponding environment variables.
 * Directory structure:
 * +bin
 * -config
 *  +-db.of-dev-prd.js (template of db-dev or db-prd)
 *  +-db.dev.js (for development, git ignore)
 *  +-db.prd.js (for production, git ignore)
 * ...
 */
module.exports = {
  mysql: {
    host: '<host>',
    port: '<port>',
    user: '<user>',
    password: '<password>',
    database: '<database>',
  },
};
