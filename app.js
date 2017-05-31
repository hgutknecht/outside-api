const express = require('express');
const exphbs  = require('express-handlebars');
const app = express();
const _ = require('lodash');

app.engine('.hbs', exphbs({
  extname: '.hbs',
  defaultLayout: 'main',
  // helpers: require('./views/helpers/ViewHelpers')
}));
app.set('view engine', '.hbs');
// Expose static files and compiles webpack bundles.
app.use(express.static('dist'));

// Routes

// Express hello.
app.get('/hello', function (req, res) {
  res.send('Hello World!');
});

// Basic handlebar routing.
app.get('/', function (req, res) {
    res.render('home');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
