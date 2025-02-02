const mongoose = require("mongoose");

const connectToDb = async (url) => {
  try {
    await mongoose.connect(url);
    console.log("MongoBD Connected");
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};

module.exports = connectToDb;
