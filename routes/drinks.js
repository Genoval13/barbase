const express = require('express');
const router = express.Router();
const knex = require('../knex');

router.get('/drinks', (_req, res) => {
    knex('drinks')
        .orderBy('drinkName')
        .then((drinks) => {
            res.render('drinks/list', drinks);
        })
})


module.exports = router;