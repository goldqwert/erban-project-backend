const express = require('express');
const users = require('./Router/users-router')
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/users', users);

app.get('/tasks', async (req, res) => {
    res.send('tasks');
});

app.use((req, res) => {
    res.sendStatus(404)
})

app.listen(7434, () => {
    console.log('Example app listening on port 3000!');
});
