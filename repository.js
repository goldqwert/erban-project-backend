const fs = require('fs');
const { readJSONFromFile, writeJSONToFile } = require('./fs-utils');

const getUsers = () => {
    return readJSONFromFile('users.json');
}

const addUser = async (name) => {
    let users = await getUsers()
    users.push({ name })
    writeJSONToFile('users.json', users)
}

exports.getUsers = getUsers;
exports.addUser = addUser;