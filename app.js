const express = require('express');
const exphbs  = require('express-handlebars');
const unirest  = require('unirest');
const _ = require('lodash');
const app = express();

app.engine('.hbs', exphbs({
  extname: '.hbs',
  defaultLayout: 'main',
  // helpers: require('./views/helpers/ViewHelpers')
}));
app.set('view engine', '.hbs');
// Expose static files and compiles webpack bundles.
app.use(express.static('dist'));

app.get('/', function (req, res) {

  unirest.get('https://trailapi-trailapi.p.mashape.com/?lat=41.477242&limit=25&lon=-73.969283&radius=20')
    .header('X-Mashape-Key', '[your-secret-key]') // See https://market.mashape.com/trailapi/trailapi
    .header('Accept', 'text/plain')
    .end(function (result) {
      console.log(result.status, result.headers, result.body);
    });

  res.render('home');

});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
