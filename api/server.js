const mongoose = require('mongoose');
const connectDB = require('./db/connection');
const express = require('express');

const app = express();

// Init Middleware
app.use(express.json({ extended: true }));

connectDB();

const PORT = process.env.PORT || 80;


app.get("/", (req, res) => {
    res.send("API Running");
    console.log("API is running");
})

// Define routes
app.use('/signUpUser', require('./routes/registerUser'));;
app.use('/signUpCompany', require('./routes/registerCompany'));
// app.use('/logInUser', require('./routes/logInUser'))
// app.use('/api/profile', require('./routes/api/profile'));
// app.use('/api/posts', require('./routes/api/posts'));

app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}.`);
})




