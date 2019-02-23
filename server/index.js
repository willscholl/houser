require('dotenv').config();
const express = require('express');
const bodyParser = require("body-parser");
const massive = require('massive');
const ctrl = require('./controller');
const {CONNECTION_STRING, SERVER_PORT, SESSION_SECRET} = process.env;
const app = express();
app.use(bodyParser.json())

// app.use(
//   session({
//     secret: SESSION_SECRET,
//     resave: false,
//     saveUninitialized: false 
//   })
// );

massive(CONNECTION_STRING).then(db => {
  app.set('db', db);

  console.log('Connected to database');
  app.listen(SERVER_PORT, () => {
    console.log(`Banging on port ${SERVER_PORT}`)
  });
});

app.get('/api/houses', ctrl.getAll)
app.post('/api/house', ctrl.postHouse)
app.delete(`/api/house/:id`, ctrl.deleteHouse)