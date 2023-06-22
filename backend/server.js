require("dotenv").config();
const cors = require("cors");
const path = require('path')
const express = require("express");
const mongoose = require("mongoose");
const eventRoutes = require("./routes/events");
const userRoutes = require("./routes/user");
const env = require('dotenv').config();
const { error } = require("console");

// express app
const app = express();

// middleware
app.use(express.json());

app.use(cors());

app.use((req, res, next) => {
  next();
});


// app.use(express.static(path.join(__dirname, '../frontend/public')));
if (process.env.NODE_ENV==="production"){
app.use(express.static(path.join(__dirname, '../frontend/build')))


app.get('*', (req, res) =>{
  res.sendFile(path.join(__dirname, "../frontend/build/index.html"))
}
)
}





// routes
app.use("/api/events", eventRoutes);
app.use("/api/user", userRoutes);
console.log(process.env.PORT)
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("connected to db & listening on", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
