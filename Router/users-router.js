const { getUsers, addUser } = require('../repository')
const express = require('express');
const router = express.Router();

router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});

router.get('/', async (req, res) => {
    let users = await getUsers();
    res.send(users)
});

router.get('/:id', async (req, res) => {
    const userId = req.params.id
    const users = await getUsers()
    const user = users.find(u => u.id === userId);
    if (user) {
        res.send(user)
    } else {
        res.sendStatus(404)
    }
    res.send(users);
});

router.post('/', async (req, res) => {
    const result = await addUser('Lesha');
    res.send({ success: true })
});

module.exports = router;

