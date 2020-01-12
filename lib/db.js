const fs = require('fs');
const util = require('util');
const path = require('path');

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

/**
 * Db - Database class
 * new Db() 
 */
class Db {
    constructor() {
        this.getData();
    }

    getData() {
        if (!this.data) {
            //read data from file and store into this.data
            readFileAsync(path.join(__dirname, "../db/db.json"), 'utf-8')
                .then(data => {
                    this.data = JSON.parse(data);
                    return this.data;
                })
                .catch(err => err);

        } else {
            return this.data;
        }
    }

    saveData(data) {
        if (data) {
            this.data.push(data);
        }

        writeFileAsync(path.join(__dirname, "../db/db.json"), JSON.stringify(this.data))
            .then(data => {
                return data;
            }).catch(err => {
                throw err;
            });
    }

    deleteData(id) {
        const tmp = [];
        for (let i in this.data) {
            if (i.id !== id) {
                tmp.push(i);
            }
        }
        this.data = tmp;
        this.saveData();
        return this.data;
    }
}

module.exports = Db;