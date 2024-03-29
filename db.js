const MongoClient = require('mongodb');
const ObjectID = require('mongodb').ObjectID;
const dbname = "realcarwash";

const mongoOptions = { userNewUrlParser: true };

const state = {
    db: null
};

const connect = (cb) => {
    if (state.db)
        cb();
    else {
        MongoClient.connect(url, mongoOptions, (err, client) => {
            if (err)
                cb(err);
            else {
                state.db = client.db(dbname);
                cb();
            }
        });
    }
}

const getPrimaryKey = (_id) => {
    return ObjectID(_id);
}
const getDB = () => {
    return state.db;
}

module.exports = { getDB, getPrimaryKey, connect };