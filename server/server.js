const searchController = require('./controllers/searchController');
const addFavController = require('./controllers/addFavController');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const removeFavController = require('./controllers/removeFavController')
const removeList = require('./controllers/removeList')
const mainShoppingList = require('./controllers/mainShoppingList')
const mainFavorite = require('./controllers/mainFavorite')

const {
  PORT = 3000
} = process.env;

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  return next();
});



app.get('/mainFavorite', mainFavorite, (req, res) => {
  if (res.locals.err) res.status(404).send(res.locals.err);
  res.send(res.locals.data);
});

app.get('/mainShoppingList', mainShoppingList, (req, res) => {
  if (res.locals.err) res.status(404).send(res.locals.err);
  res.send(res.locals.data);
});

app.post('/search', searchController, (req, res) => {
  if (res.locals.err) res.status(404).send(err);
  res.send(res.locals.apiData);
});

app.post('/addFav', addFavController, (req, res) => {
  if (res.locals.err) res.status(404).send(err);
  res.send(res.locals.addFav);
});

app.post('/addIngredientsToList', (req, res) => {
  if (res.locals.err) res.status(404).send(err);
  res.send('Booby Drop Added');
});

app.delete('/removeFav', removeFavController, (req, res)=> {
  if (res.locals.err) res.status(404).send(res.locals.err);
  res.send('Booby Drop Favs');
});

app.delete('/removeList', removeList, (req, res) => {
  if (res.locals.err) res.status(404).send(res.locals.err);
  res.send('Booby Drop Tables');
})

app.get('*', (req, res) => {
  res.status(404).send('Route does not exist');
})

if (require.main === module) {
  app.listen(PORT, () => {
    console.log('server started at http://localhost:' + PORT);
  });
};
