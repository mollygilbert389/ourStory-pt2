const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Sentence collection and inserts the sentences below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/ourstory"
);

const sentenceSeed = [
  {
    sentence: "Let's get this started in here.",
    author: "Molly Gilbert",
    date: new Date(Date.now())
  },
  {
    sentence: "Our story begins when a team of peeps graduated the code bootcamp.",
    author: "Hank Marley",
    date: new Date(Date.now())
  },
  {
    sentence: "Then went their four separate ways to keep on coding.",
    author: "Eddie Medina",
    date: new Date(Date.now())
  },

];

db.Sentence
  .deleteMany({})
  .then(() => db.Sentence.collection.insertMany(sentenceSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
