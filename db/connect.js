// mongodb
const { MongoClient} = require("mongodb");
const dotenv = require("dotenv");
dotenv.config();

let database;

const initDb = (callback) => {
  if (database) {
    console.log("DB is already initialised");
    return callback(null, database);
  }
  MongoClient.connect(process.env.DB_URI)
    .then((client) => {
      database = client;
      callback(null, database);
    })
    .catch((err) => {
      callback(err);
    })
}

const getDatabase = () => {
  if(!database) {
    throw("Database not initialised!")
  }
  return database;
}

// const mongoConnect = async function() {
//   const uri = process.env.DB_URI;
//   const client = new MongoClient(uri);

//   try {
//     await client.connect();
//     await listDatabases(client);
//   } catch (error) {
//     console.error(error);
//   } finally {
//     await client.close();
//   }
// }

// mongoConnect().catch(console.error);

// async function listDatabases(client){
//   database = client;

//   databasesList = await client.db().admin().listDatabases();
 
//   console.log("Databases:");
//   databasesList.databases.forEach(db => console.log(` - ${db.name}`));
// };


module.exports = {
  initDb,
  getDatabase
};