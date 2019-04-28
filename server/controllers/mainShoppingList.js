const connectToDb = require('./connectToDb.js');


const mainShoppingList = (req, res, next) => {
  
  const pool = connectToDb();
  const query = {
    name: 'GetQuery',
    text:'SELECT * FROM "shopinglist_table"'
  };

  pool.query(query, (err, results) => {
    if (err) {
      res.locals.err = err;
      return next();
    }
    const returnArr = [];
    for (let i=0; i < results.rows.length; i++) {
      if (i >= 15) break;
      for (const prop in results.rows[i]) {
        if (prop === 'item') {
          returnArr.push(results.rows[i]['item']);
        }
      }
    }

    res.locals.data = returnArr;
    return next();
  })
};


module.exports = mainShoppingList;