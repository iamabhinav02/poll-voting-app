require("dotenv").config();

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const db = require("./models/connection");
const handle = require("./handlers/error_handle");
const route = require("./routes/api_routes");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use("/api/auth", route.auth);
app.use("/api/polls", route.polls);
// app.get('/', (req, res) => res.json({hello:"world"}));

app.use(handle.notFound);
app.use(handle.errors);
const port = process.env.PORT || 3000;

app.listen(port, console.log(`Server running on Port ${port}...`));