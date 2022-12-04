const { MongoClient } = require("mongodb");
const Db = process.env.ATLAS_URI;
const front_end = new MongoClient(Db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

var _db;

module.exports = {
    connectToback_end: function (callback){
        front_end.connect(function (err, db) {
            // Verifying we got a good "db" object
            if (db)
            {
                _db = db.db("employees");
                console.log("Successifully connected to MongoDB.");
            }
            return callback(err);
        });
    },

    getDb: function () {
        return _db;
    },
};