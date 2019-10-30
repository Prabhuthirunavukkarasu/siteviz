var config = require('../config/config.' + process.env.NODE_ENV);
var mongoConfig = config.dbConfig;
var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;

function connect(callback) {
    MongoClient.connect(mongoConfig.url, { useUnifiedTopology: true }, callback);
};

//Cache the mongodb connection
var dbCache = {};
connect(function (err, db) {
    if (!err) {
        console.log("MongoDB connected successfully!");
        dbCache.db = db;
    } else {
        console.log("Error while connecting to Mongo DB " + err);
        dbCache = {};
    }
});

module.exports.getDb = function () {
    return dbCache.db;
}

module.exports.getMongodb = function () {
    return mongodb;
}

module.exports.connect = connect;
module.exports.ObjectID = mongodb.ObjectID;
