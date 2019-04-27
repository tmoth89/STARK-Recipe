const searchController = require('./controllers/searchController');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const removeFavController = reuuire('./controllers/removeFavController')

const { 
  PORT = 3000
} = process.env;

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  return next();
});



app.get('/main', (req, res)=> {
  if (res.locals.err) res.status(404).send(err);
  res.send();
});

app.post('/search', searchController, (req, res)=> {
  if (res.locals.err) res.status(404).send(err);
  res.send(res.locals.apiData);
});

app.post('/addFav', (req, res)=> {
  if (res.locals.err) res.status(404).send(err);
  res.send();
});

app.post('/addOwnRecipe', (req, res)=> {
  if (res.locals.err) res.status(404).send(err);
  res.send();
});

app.post('/addIngredientsToList', (req, res)=> {
  if (res.locals.err) res.status(404).send(err);
  res.send();
});

app.delete('/removeFav', removeFavController, (req, res)=> {
  if (res.locals.err) res.status(404).send(err);
  res.send();
});

app.delete('/removeOwnRecipe', (req, res) => {
  if (res.locals.err) res.status(404).send(err);
  res.send();
});

app.delete('/removeList', (req, res)=> {
  if (res.locals.err) res.status(404).send(err);
  res.send();
})

app.get('*', (req, res)=> {
  res.status(404).send('Route does not exist');
})



if (require.main === module) {
  app.listen(PORT, () => {
    console.log('server started at http://localhost:'+PORT);
  });
};

// export default app;