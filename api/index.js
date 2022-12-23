
const server = require('./src/app.js');
const { getDietPreLoad } = require("./src/helpers/DietCont/DietCont")
const { conn } = require('./src/db.js');
require("dotenv").config();
// Syncing all the models at once.
conn.sync({ force: true }).then(getDietPreLoad).then(() => {
  server.listen(process.env.PORT, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});
