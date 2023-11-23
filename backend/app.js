// app.js
const express = require("express");
const app = express()
const PORT = 8000;
const newUser = require("./models/user.model")
const adminRoute = require("./routes/index.route")
const connectDb = require("./config/connectDb")
var bodyParser = require('body-parser')
let cors = require('cors')

connectDb();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.use(cors("*"))

app.use("/", adminRoute)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});
