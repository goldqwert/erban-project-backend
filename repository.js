const fs = require('fs');
const { readJSONFromFile, writeJSONToFile } = require('./fs-utils');

const getUsers = () => {
    return readJSONFromFile('users.json');
    // return new Promise((resolve, reject) => {
    //     fs.readFile('users.json', function (err, buf) {
    //         if (err) {
    //             reject(err)
    //         } else {
    //             resolve(JSON.parse(buf.toString()));
    //         }
    //     });
    // })
}

const addUser = async (name) => {
    let users = await getUsers()
    users.push({ name })
    writeJSONToFile('users.json', users)
    // return new Promise((res, rej) => {
    //     fs.writeFile('users.json', JSON.stringify(users), (err) => {
    //         if (err) rej(err);
    //         res()
    //     });
    // })
}

exports.getUsers = getUsers;
exports.addUser = addUser;