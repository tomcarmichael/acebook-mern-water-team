const { MongoClient } = require("mongodb");

// in my case the MONGODB_URL is 'mongodb://localhost:27017';

const uri = process.env.MONGODB_URL;
if (!uri) {
  throw new Error("Missing MONGODB_URL environment variable");
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
