const { Router } = require('express');
const { MongoClient } = require('mongodb');
const jwt = require('jsonwebtoken');
const key = require('../jwtkey.json')

const client = new MongoClient('mongodb+srv://Nikita:Gtnhjcjdbx1@cluster0.kjm6fgr.mongodb.net/?retryWrites=true&w=majority');

const router = Router();

const users = client.db().collection('users');

router.post('/auth', async (req, res) => {
    await client.connect();
    const user = await users.findOne({ email: req.body.email });
    if (user) {
        res.json('user with such data already exists')
    } else {
        users.insertOne({ ...req.body, role: 'user' });
        res.json('success');
    }
});

router.post('/login', async (req, res) => {
    await client.connect();
    const user = await users.findOne({ $and: [{ email: req.body.email }, { password: req.body.password }] });
    if (user) {
        const clientJwt = jwt.sign({
            id: users._id,
            name: users.name,
            surname: users.surname,
            role: users.role
        }, key)
        res.json(clientJwt);
    } else {
        res.json('error');
    }
});

module.exports = router;