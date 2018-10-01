const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 1337;
const handle = require('handlebars');
const methodOverride = require('method-override');
const path = require('path');
const morgan = require('morgan');



app.disable('x-powered-by');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(methodOverride('_method'));
app.use(express.static(path.join('public')));
app.set('view engine', 'handlebars');


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