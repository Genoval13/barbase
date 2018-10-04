const express = require('express');
const router = express.Router();
const knex = require('../knex');

//View All Drinks
router.get('/drinks', (_req, res) => {
    knex('drinks')
        .orderBy('drinkName')
        .then((drinks) => {
            res.render('drinks/list', {title: 'Drinks List', drinks});
        });
});

//View Drinks by Rating
router.get('/drinks/rating', (_req, res) => {
    knex('drinks')
        .orderBy('favorites', 'desc')
        .then((drinks) => {
            res.render('drinks/rating', {title: `Drinks By Rating`, drinks});
        });
});

//View Drink Post 
router.get('/drinks/new', (_req, res) => {
    res.render('drinks/post', {title: `New Recipe`})
})

//View Recipe
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

//Post New Drink
router.post('/drinks/new', (req, res, next) => {
        knex('drinks')
        .insert({
            drinkName: req.body.drinkName,
            glassType: req.body.glassType,
            img: req.body.img,
            instructions: req.body.instructions
        })
        .then(() => {
            res.redirect('/drinks/recipes/new')
        })
        .catch((err) => {
            next(err)
        })
    });
    

//Add to Recipes
router.post('/drinks/recipes/new', (req, res, next) => {
    knex('recipes')
        .insert({
            ing1: req.body.ing1,
            ing2: req.body.ing2,
            ing3: req.body.ing3,
            ing4: req.body.ing4,
            ing5: req.body.ing5,
            ing6: req.body.ing6,
            ing7: req.body.ing7,
            ing8: req.body.ing8,
            amt1: req.body.amt1,
            amt2: req.body.amt2,
            amt3: req.body.amt3,
            amt4: req.body.amt4,
            amt5: req.body.amt5,
            amt6: req.body.amt6,
            amt7: req.body.amt7,
            amt8: req.body.amt8
        })
        .then(() => {
            knex('drinks')
                .orderBy('drinkName')
                .then(() => {
                    res.redirect('/drinks');
                }); 
        })
        .catch((err) => {
             next(err);
        });
});
       



module.exports = router;