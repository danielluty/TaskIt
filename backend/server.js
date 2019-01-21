const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const users = require("./routes/api/users");


const app = express();

//Bodyparser middleware 
app.use(bodyParser.json());

//DB Config
const db = require("./config/keys").mongoURI;

//Connnect to Mongo
mongoose
  .connect(db)
  .then(() => console.log("MongoDB Connected."))
  .catch(err => console.log(err));


//Use Routes
app.use("/api/users", users);


const port = process.env.PORT || 5000

app.listen(port, () => console.log(`server started on port ${port}`));