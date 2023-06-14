const { MongoClient } = require("mongodb");

// in my case the MONGO_URI is 'mongodb://localhost:27017';

const uri = process.env.MONGO_URI;
if (!uri) {
  throw new Error("Missing MONGO_URI environment variable");
}

const client = new MongoClient(uri);

async function connect() {
  await client.connect();
  return client.db("acebook_test");
}

async function disconnect() {
  await client.close();
}

module.exports = {
  connect,
  disconnect,
};
