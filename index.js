const express = require('express');
const mongoose = require('mongoose');
const MongoClient = require('mongodb');

const app = express();
const router = express.Router();
let db;
app.use(express.json());
const DATABASE_CONN =
  'mongodb://admin:password1@ds263856.mlab.com:63856/hotels-r-us';
mongoose.connect(DATABASE_CONN, {
  useNewUrlParser: true,
});

MongoClient.connect(DATABASE_CONN, (err, database) => {
  if (err) {
    console.log(err);
  } else {
    db = database.db('hotels-r-us');
    app.listen(3000, () => console.log('running mofo, on: port 3000'));
  }
});

app.use(router);

app.post('/hotels', (req, res) => {
  // const {name, email, address} = req.body
  db.collection('hotels').save(req.body, (err, result) => {
    if (err) return console.log(err);
    console.log('i think we saved something to the db!');
    res.json(result);
  });
});

app.post('/users', (req, res) => {
  res.status(201).json();
});

module.exports = app;
