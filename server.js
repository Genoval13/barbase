const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 1337;
const ejs = require('ejs');
const methodOverride = require('method-override');
const path = require('path');
const morgan = require('morgan');

const users = require('./routes/users');
const drinks = require('./routes/drinks');

app.disable('x-powered-by');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(methodOverride('_method'));
app.use(express.static(path.join('public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (_req, res) => {
    res.render('index', {title: 'Find your inner bartender'});
})

app.use(users);
app.use(drinks);

app.use((_req, res) => {
    res.sendStatus(404);
})

app.use((err, _req, res) => {
    if (err.status) {
        return res
            .status(err.status)
            .set('Content-type', 'text/plain')
            .send(err.message);
    }

    console.error(err.stack);
    res.sendStatus(500);
})

app.listen(PORT , () => {
    console.log("This is Port", PORT);
})

module.exports = app;