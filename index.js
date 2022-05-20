require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const { Router } = require('express');
const PORT = process.env.PORT || 3001;
const URL = process.env.MONGO_URL;

const usersRouter = require('./routes/users');
const shortlyRouter = require('./routes/shortly');

/* Connected to DB */
mongoose.connect(URL, {useNewUrlParser:true, useUnifiedTopology:true});
const connection = mongoose.connection;
connection.on('open', () => console.log("MongoDB Connected..."));

/* Middleware */
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Router
app.use('/users', usersRouter);
app.use('/shortly',shortlyRouter);

app.get('/', (req, res)=>{
    res.send('Server is running successfully');
})



app.listen(PORT, () => console.log(`Server running on port ${PORT}`));