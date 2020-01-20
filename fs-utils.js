const fs = require('fs');

exports.readJSONFromFile = (filePath) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, function (err, buf) {
            if (err) {
                reject(err)
            } else {
                resolve(JSON.parse(buf.toString()));
            }
        });
    })
}

exports.writeJSONToFile = (filePath, data) => {
    return new Promise((res, rej) => {
        fs.writeFile(filePath, JSON.stringify(data), (err) => {
            if (err) rej(err);
            res()
        });
    })
}