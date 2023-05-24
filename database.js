const mongooseClient = require("mongoose");
const config = require("./config.json");
mongooseClient.connect(
  config.databaseURL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) console.log(err);
  }
);

const NotesSchema = mongooseClient.Schema({
  title: String,
  description: String,
});

const Notes = mongooseClient.model("Notes", NotesSchema);

module.exports = Notes;
