const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const port = 4000;

// middleware
app.use(cors());
app.use(express.json()); // for JSON
app.use(express.urlencoded({ extended: true })); // for x-www-form-urlencoded (Values submitted in form)
app.use(express.static(path.join(__dirname, '../uploads')));

app.use('/youtubeAPIs', require('./routes/youtubeAPIs'));

app.listen(port, () => {
    console.log('success');
});
