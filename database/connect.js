const { MongoClient } = require("mongodb");

let dbConnection;

const initDb = (callback) => {
  if (dbConnection) {
    console.log("DB already initialized");
    return callback(null, dbConnection);
  }

  const uri = process.env.MONGODB_URI;

  MongoClient.connect(uri)
    .then((client) => {
      dbConnection = client;
      callback(null, dbConnection);
    })
    .catch((err) => {
      callback(err);
    });
};

const getDb = () => {
  if (!dbConnection) {
    throw Error("Database not initialized");
  }
  return dbConnection;
};

module.exports = {
  initDb,
  getDb,
};