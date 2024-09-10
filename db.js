const mongoose = require("mongoose");

const mongoDB =
  "mongodb+srv://<your-nick>:<your-pass>.ctfts.mongodb.net/pet";

async function main() {
  await mongoose.connect(mongoDB);
}

main().then(() => console.log("Conexão realizzada com sucesso")).catch(err => console.log(err))

module.exports = mongoose 