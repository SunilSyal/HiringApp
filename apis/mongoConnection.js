const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017";
var client;

async function connectMongo() {
  client = await MongoClient.connect(url, {
    useNewUrlParser: true
  }).catch(err => {
    console.log(err);
  });

  if (!client) {
    console.log("Not connected to Mongo !!!");
    return;
  }
  console.log("Successfully connected to Mongo !!!");
}
async function fetchPipeline(query = {}) {
  const client = await MongoClient.connect(url, {
    useNewUrlParser: true
  }).catch(err => {
    console.log(err);
  });
  try {
    const db = client.db("hiring");
    let collection = db.collection("pipeline");
    let res = await collection.find(query).toArray();
    return res;
  } catch (err) {
    console.log(err);
  } finally {
    client.close();
  }
}

const mongo = {
  connectMongo,
  fetchPipeline
};

module.exports = mongo;
