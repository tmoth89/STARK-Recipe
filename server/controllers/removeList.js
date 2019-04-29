const connectToDb = require('./connectToDb.js');

const removeList = (req, res, next) => {

  const pool = connectToDb();
  const query = {
    name: 'Bobby Drop Tables',
    text: 'DELETE FROM "shopinglist_table"'
  }

  pool.query(query, (err, results) => {
    if (err) {
      res.locals.err = err;
    }
    res.locals.data = "Bobby Drop Tables";
    return next();
  });
}

module.exports = removeList;