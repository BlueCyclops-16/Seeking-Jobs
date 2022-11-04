const mongoose = require('mongoose');
const connectDB = require('./db/connection');
const express = require('express');
const User = require('./models/User');

const app = express();

// Init Middleware
app.use(express.json({ extended: true }));

connectDB();

const PORT = 80;

app.use(require('./router/route'));

app.get("/", (req, res) => {
    res.send("API Running");
    console.log("API is running");
})

app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}.`);
})




