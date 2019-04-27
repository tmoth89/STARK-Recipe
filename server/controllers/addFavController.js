const connectToDb = require('./connectToDb');

const addFavController = (req, res, next) => {
  const pool = connectToDb();
  const id = req.body.id;
  const label = req.body.label;
  const img_url = req.body.img_url;
  const recipe_url = req.body.recipe_url;

  const query = {
    name: 'Add Favorite To DB',
    text: 'INSERT INTO favorites_table(id, label, img_url, recipe_url) VALUES($1, $2, $3, $4) RETURNING *;',
    value: [id, label, img_url, recipe_url]
  }

  pool.connect(query, (err, result) => {
    if (err) {
      return console.error('Error executing query', err)
    }

    res.locals.addFav = result;
    return next();
  })
}

module.exports = addFavController;