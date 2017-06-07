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

// Node app mocha/chia test example.
const shouldTestThis = (x, y) => {
	return [y, x];
}

// Routes - Express the hello sentiment.
app.get('/hello', function (req, res) {
  res.send('Hello World!');
});

// Basic handlebar routing.
app.get('/', function (req, res) {
  console.log(shouldTestThis('Hans. WOW', 'Such'));
  res.render('home');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
