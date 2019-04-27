const connectToDb = require('./connectToDb.js');


const removeFavController = (req, res, next) => {
  
  const pool = connectToDb();
  const targetRow = req.body.delete;

  const query = {
    name: 'Removing from DB',
    text: "DELETE FROM stock_keys WHERE stock_ticker=$1 RETURNING *;",
    values: [targetRow]
  };

  pool.query(query, (err, results) => {
    if (err) {
      res.locals.err = err;
      return next();
    }
    res.locals.removeData = results;
    return next();
  })
}


module.exports = removeFavController;