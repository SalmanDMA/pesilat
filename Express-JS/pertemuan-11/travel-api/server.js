// app.js
require('dotenv').config();
const express = require('express');
const apiRoutes = require('./app/routes/apiRoutes');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const app = express();

app.use(logger('dev'));
// Middleware untuk mengizinkan parsing JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static('app/public'));

//Set app config
const title = process.env.TITLE;
const port = process.env.PORT;
const baseUrl = process.env.URL + port;

app.use((req, res, next) => {
 res.header('Access-Control-Allow-Origin', '*');
 res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, x-access-token');
 if (req.method === 'OPTIONS') {
  res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
  return res.status(200).json({});
 }
 next();
});

// Mengarahkan rute API
app.use('/', apiRoutes);

// Menjalankan server pada port yang ditentukan
app.listen(port, () => console.log(title + ' run on ' + baseUrl));
