const mongodb = require("mongoose");
mongodb
  .connect("mongodb://localhost:27017/crudNotes")
  .then(() => {
    console.log("connected to database");
  })
  .catch((err) => {
    console.log(err);
  });