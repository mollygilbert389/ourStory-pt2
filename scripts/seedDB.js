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

  {
    sentence: "Shuler moved to South Carolina for a nice new job.",
    author: "Shuler",
    date: new Date(Date.now())
  },

  {
    sentence: "Hank got promoteed in Government.",
    author: "Eddie Medinas",
    date: new Date(Date.now())
  },

  {
    sentence: "Eduardo moved to San Antonio with his girlfriend.",
    author: "Molly S",
    date: new Date(Date.now())
  },

  {
    sentence: "Molly bought a house in Austin and is in the search for a dev job.",
    author: "Carlos Medina",
    date: new Date(Date.now())
  },

  {
    sentence: "This story is about Molly.",
    author: "Mitch Cal",
    date: new Date(Date.now())
  },

  {
    sentence: "She's super cool.",
    author: "Jeremy",
    date: new Date(Date.now())
  },

  {
    sentence: "And pretty smart if you ask her mom.",
    author: "Mom",
    date: new Date(Date.now())
  },

  {
    sentence: "She's doing this whole full stack application in react and mongo.",
    author: "Dad",
    date: new Date(Date.now())
  },
  {
    sentence: "It's going to be a cultural phenomenon.",
    author: "Lukasz",
    date: new Date(Date.now())
  },
  {
    sentence: "So you should hire her, as she's always learning and growing and thinking creatively.",
    author: "Molly G",
    date: new Date(Date.now())
  },
  {
    sentence: "You can only add one sentance to this story, and it must be under 160 characters.",
    author: "Eddie M",
    date: new Date(Date.now())
  },
  {
    sentence: "So you should make it count!",
    author: "E Meina",
    date: new Date(Date.now())
  },
  {
    sentence: "Also make sure you have the correct spelling using our cool tools.",
    author: "Hank M",
    date: new Date(Date.now())
  },
  {
    sentence: "And don't forget your ABCs!",
    author: "M Gilbert",
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
