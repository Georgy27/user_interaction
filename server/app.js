const express = require("express");
const mongoose = require("mongoose");
const router = require("./router");
const bodyParser = require("body-parser");
// const postsRoute = require("./routes/posts");
const Post = require("./models/Post");
const cors = require("cors");

const PORT = 8000;
const DB_URL = `mongodb+srv://lyic123:restart@cluster0.cusje.mongodb.net/?retryWrites=true&w=majority`;
const app = express();

app.use(express.json());
app.use(cors());
app.use("/api", router);

// IMPORT ROUTES

// app.use("/posts", postsRoute);

//ROUTES

//Connect to DB

async function startApp() {
  try {
    await mongoose.connect(DB_URL);
    app.listen(PORT, () => console.log("SERVER STARTED ON PORT " + PORT));
  } catch (e) {
    console.log(e);
  }
}
startApp();
// how we start listening to the server
