const connectToDb = require('./connectToDb.js');


const mainFavorite = (req, res, next) => {

  const pool = connectToDb();
  const query = {
    name: 'GetQuery',
    text:'SELECT label, img_url, recipe_url FROM "favorites_table"'
  };

  pool.query(query, (err, results) => {
    if (err) {
      res.locals.err = err;
      return next();
    }

    res.locals.data = results.rows;
    return next();
  })
};


module.exports = mainFavorite;