const { getUsers, addUser, deleteUser, getUser, updateUser } = require('../repository')
const express = require('express');
const router = express.Router();

router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});

router.get('/', async (req, res) => {
    let users = await getUsers();
    if (req.query.search) {
        users = users.filter(u => u.name.indexOf(req.query.search) > -1)
    }
    res.send(users)
});

router.get('/:id', async (req, res) => {
    const userId = req.params.id
    const users = await getUser(userId)
    if (user) {
        res.send(user)
    } else {
        res.send(404)
    }
    res.send(users);
});

router.post('/', async (req, res) => {
    let name = req.body.name;
    await addUser(name);
    res.send({ success: true })
});

router.delete('/:id', async (req, res) => {
    const users = await deleteUser(req.params.id)
    res.send(204);
});

router.put('/', async (req, res) => {
    let name = req.body.name;
    let id = req.body.id;
    await updateUser(id, name);
    res.send({ success: true })
});

module.exports = router;

