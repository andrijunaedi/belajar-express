const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const config = require('./config/db.js');
const routes = require('./routes');
const errorHandling = require('./middleware/errorHandling');

const app = express();

const { db } = config;
const { json } = bodyParser;

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Success Connect'))
  .catch((err) => console.log(err));

// middleware
app.use(json());

// routes
app.use('/api', routes);

// error handling middleware
app.use(errorHandling);

// listen
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening Port : ${port}`));
