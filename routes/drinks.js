const express = require('express');
const router = express.Router();
const knex = require('../knex');

router.get('/drinks', (_req, res) => {
    knex('drinks')
        .orderBy('drinkName')
        .then((drinks) => {
            res.render('drinks/list', {title: 'Drinks List', drinks});
        });
});

router.get('/drinks/rating', (_req, res) => {
    knex('drinks')
        .orderBy('favorites', 'desc')
        .then((drinks) => {
            res.render('drinks/rating', {title: `Drinks By Rating`, drinks});
        });
});

router.get('/drinks/:drinkName', (req, res, next) => {
    knex('drinks')
        .where('drinkName', req.params.drinkName)
        .leftJoin('users', 'users.userId', 'drinks.postedBy')
        .leftJoin('recipes', 'recipes.rId', 'drinks.recipeId')
        .then((drink) => {
            if (!drink) {
                return next();
            }
            console.log(drink[0])
            res.render('drinks/recipe', {title: `${drink[0].drinkName} Recipe`, drink})
        })
        .catch((err) => {
            next(err);
        });
});


module.exports = router;