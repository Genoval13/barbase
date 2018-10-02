const knex = require('../knex');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

let users = {};

router.get('/users', (_req, res) => {
    res.render('users/register');
});

router.post('/users', (req, res) => {
    if (!req.body) {
        res.sendStatus(400);
    }

    if (!req.body.email || !req.body.password) {
        return res.status(400).send('Missing email or password!')
    }

    if (users[req.body.email] !== undefined) {
        return res.send(409).send('Email already registered!')
    } 

    bcrypt.hash(req.body.password, 12) 
        .then((hash) => {
            return knex('users')
                .insert({
                    email: req.body.email,
                    password: hash
                }, '*')
        })
        .then((users) => {
            const user = users[0];
            delete user.password;
            res.redirect('/');
        })
        .catch((err) => {
            next(err);
        })   
});


module.exports = router;