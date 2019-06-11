const MongoClient = require("mongodb").MongoClient;

const url = "mongodb://localhost:27017";

async function findOne() {
  const client = await MongoClient.connect(url, {
    useNewUrlParser: true
  }).catch(err => {
    console.log(err);
  });

  if (!client) {
    return;
  }

  try {
    const db = client.db("hiring");
    let collection = db.collection("pipeline");
    let query = { cName: "Ajay Kumar" };

    let res = await collection.find(query).toArray(function(err, docs) {
      // docs is an Array of documents here
      console.log(docs);
    });
    console.log("00000000000000000");

    console.log(res);
  } catch (err) {
    console.log(err);
  } finally {
    client.close();
  }
}

findOne();
