const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const MongoClient = require('mongodb');

const app = express();
const router = express.Router();
let db;
app.use(express.json());
app.use(express.urlencoded());
app.use(router);

const DATABASE_CONN =
  'mongodb://admin:password1@ds263856.mlab.com:63856/hotels-r-us';
// mongoose.connect(DATABASE_CONN, {
//   useNewUrlParser: true,
// });

MongoClient.connect(DATABASE_CONN, {
  useNewUrlParser: true,
}, (err, database) => {
  if (err) {
    console.log(err);
  } else {
    db = database.db('hotels-r-us');
    app.listen(3010, () => console.log('running mofo, on: port 3010'));
  }
});


app.post('/hotels', (req, res) => {
  db.collection('hotels').save(req.body, (err, result) => {
    if (err) return console.log(err);
    console.log('We successfully signed up a hotel!');
    res.json(result);
  });
});

app.get('/users', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/userForm.html'));
})

app.post('/users', (req, res) => {
  const {
    name,
    email
  } = req.body;
  // res.sendFile(path.join(__dirname + '/public/success.html'));
  db.collection('users').save(req.body, (err, result) => {
    if (err) return console.log(err);
    console.log(req.body)
    console.log('we got a user signed up successfully')
    res.status(201).json(result);
  });
});

module.exports = app;