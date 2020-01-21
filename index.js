const express = require('express');
const users = require('./Router/users-router')

const app = express();

app.use('/users', users)

app.get('/tasks', async (req, res) => {
    res.send('tasks');
});

app.use((req, res) => {
    res.sendStatus(404)
})

app.listen(7434, () => {
    console.log('Example app listening on port 3000!');
});
