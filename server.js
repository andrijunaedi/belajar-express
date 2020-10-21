import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import path from 'path';

import MongoURI from './config/Keys';
import { router as users } from './routes/api/users';

const app = express();

mongoose
  .connect(MongoURI.db)
  .then(() => console.log('mongoDB Connected'))
  .catch((err) => console.log(err));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.json({ message: 'Selamat datang Di Web server nodejs dan mongoDB' });
});

// routes
app.use(express.static('public'));
app.use('/api/users', users);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Listen on PORT : ${port}`);
});
