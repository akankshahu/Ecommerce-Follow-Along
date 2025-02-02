const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const connectToDb = require("./src/config/db");

const port = process.env.PORT || 9090;
const db_url = process.env.MONGO_URI || "mongodb://localhost:27017/ecommerce";

const app = express();
app.use(express.json());

const userRoutes = require("./src/routes/userRoutes");
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("This is home route");
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({
    message: err.message,
  });
});

app.listen(port, async () => {
  try {
    await connectToDb(db_url);

    console.log("connected to the database");
    console.log(`The server is running at the port: ${port}`);
  } catch (err) {
    console.log(err);
  }
});
