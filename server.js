// load .env data into this file
require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const PORT = process.env.PORT || 8101;
const app = express();


const cors = require("cors");
app.use(cors());


  app.set('view engine', 'ejs');

app.use(morgan('dev'));

//this is to handel data from HTML forms
app.use(express.urlencoded({ extended: true }));

//this is to handel data in json formats when sending an receiving API requests
app.use(express.json());

app.use(express.static('public'));

//the home route displays a message on the browser when viewing the url http://localhost:8101/
//the file that contains the HTML info is located in views/index.ejs
app.get('/', (req, res) => {
  res.render('index');
});

//Below is a route that displays info from the database
//Rout url: http://localhost:8101/notes
const notes = require('./routes/allNotes');
app.use('/notes', notes);

app.listen(PORT, () => {
  console.log(`ExpressJs Template Server listening on port ${PORT}`);
});

