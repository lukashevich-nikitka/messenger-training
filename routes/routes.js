const { Router } = require('express');
const { MongoClient, ObjectId } = require('mongodb');
const jwt = require('jsonwebtoken');

const client = new MongoClient('mongodb+srv://Nikita:Gtnhjcjdbx1@cluster0.kjm6fgr.mongodb.net/?retryWrites=true&w=majority');

const router = Router();

const users = client.db().collection('users');

router.post('/auth', async (req, res) => {
    await client.connect();
    const user = await users.findOne({ email: req.body.email });
    if (user) {
        res.json('user with such data already exists')
    } else {
        users.insertOne({
            ...req.body, friends: [], age: 'unknown', status: 'unknown', education: 'unknown', profession: 'unknown', role: 'user'
        });
        res.json('success');
    }
});

router.post('/login', async (req, res) => {
    await client.connect();
    const user = await users.findOne({ $and: [{ email: req.body.email }, { password: req.body.password }] });
    if (user) {
        const clientJwt = jwt.sign({
            id: user._id,
            name: user.name,
            surname: user.surname,
            age: user.age,
            status: user.status,
            education: user.education,
            profession: user.profession,
            role: user.role,
        }, '123')
        res.json(clientJwt);
    } else {
        res.json('error');
    }
});

router.get('/find_user/:selector', async (req, res) => {
    const { selector } = req.params;
    const querySelectorArray = selector.split(' ');
    let suitableUsers;
    await client.connect();
    if (querySelectorArray.length === 1 && selector !== 'all') {
        suitableUsers = await users.find({
            $or: [
                { name: querySelectorArray[0] },
                { surname: querySelectorArray[0] },
            ]
        }).toArray();
    } else if (selector === 'all') {
        suitableUsers = await users.find().toArray();
    } else {
        suitableUsers = await users.find({
            $and: [
                { name: querySelectorArray[0] },
                { surname: querySelectorArray[1] },
            ]
        }).toArray();
    }
    res.json(suitableUsers);
});

router.get('/user_data/:jwt', async (req, res) => {
    const decodeJwt = jwt.verify(req.params.jwt, '123');
    (decodeJwt) ? res.json(decodeJwt) : res.json('Hacking attempt');
});

router.put('/subscribe/:id', async (req, res) => {
    await client.connect();
    const subscriber = await users.findOne({ _id: ObjectId(req.body.userId) });
    await users.updateOne({ _id: ObjectId(req.params.id) },
        {
            $addToSet: {
                friends: {
                    id: req.body.userId, name: subscriber.name, surname: subscriber.surname,
                }
            }
        });
    const user = await users.findOne({ _id: ObjectId(req.params.id) });
    res.json(user.friends);
});

router.get('/friends/:id', async (req, res) => {
    await client.connect();
    const user = await users.findOne({ _id: ObjectId(req.params.id) });
    res.json(user.friends);
})

router.put('/options/info/:id', async (req, res) => {
    await client.connect();
    const changedData = Object.keys(req.body);
    const updateUser = {};
    for (let i = 0; i < changedData.length; i++) {
        await users.updateOne({ _id: ObjectId(req.params.id) }, {
            $set: {
                [changedData[i]]: req.body[changedData[i]]
            }
        });
        updateUser[changedData[i]] = req.body[changedData[i]];
    };
    res.json(updateUser);
})

module.exports = router;