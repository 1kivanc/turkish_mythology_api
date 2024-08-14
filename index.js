const app = require("./app.js"); // `app.js` dosyanızı içe aktarın
const serverless = require("serverless-http");

module.exports = serverless(app);
