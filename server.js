const express = require("express");
const dotenv = require('dotenv')
const mongoose = require("mongoose");
const passport = require("passport");

const users = require("./routes/api/users");

dotenv.config()

const app = express();

// Express-Bodyparser middleware
app.use(
  express.urlencoded({
    extended: false
  })
);
app.use(express.json());

// DB Config
const db = process.env.MONGO_URI;

// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

// //Test
// app.get('/', (req, res) => {
//   res.send('Server is Running')
// })

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Routes
app.use("/api/users", users);

const port = process.env.PORT;

app.listen(port, () => console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}!`));
  