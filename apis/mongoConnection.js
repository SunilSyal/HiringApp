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
async function fetchPipeline(params) {
  try {
    const db = client.db("hiring");
    let collection = db.collection("pipeline");
    collection.createIndex({ "$**": "text" });

    let res = await collection
      .find(
        params.allRecords || !params.query
          ? {}
          : { $text: { $search: params.query } }
      )
      .sort({ cName: 1 })
      .toArray();
    return res;
  } catch (err) {
    console.log(err);
    return []; // Return empty array in case of any error
  }
}

const mongo = {
  connectMongo,
  fetchPipeline
};

module.exports = mongo;
