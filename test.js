const MongoClient = require("mongodb").MongoClient;

const url = "mongodb://xerl:Hippothebest1@ds163835.mlab.com:63835/xerl";
const mongoClient = new MongoClient(url, { useNewUrlParser: true });

mongoClient.connect(function(err, client){

    const db = client.db("xerl");
    const collection = db.collection("test");
    let user = {name: "xerl", age: 11};
    collection.findOne(function(err, doc){

        console.log(doc);
        client.close();
    });
});
