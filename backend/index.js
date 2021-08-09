const express = require('express');
const cors = require('cors');
const {dbConnection} = require('./db/db');
const Role= require("./routes/role");

require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/role", Role);

app.listen( process.env.PORT, () =>
    console.log("Backend server running on port: " + process.env.PORT )
);

dbConnection();

