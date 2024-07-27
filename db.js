const { createPool } = require('mysql');

const pool = createPool ({
    host:"localhost",
    user:"root",
    password:"UnhappyWashroomWobblingRiverbed",
    database:"Website",
    connectionLimit: 5
})

pool.query(`select * from Games`, (err, result, fields) => {
    if (err) {
        return console.log(err);
    }
    return console.log(result);
})