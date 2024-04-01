const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const workoutRouter = require('./routes/workout');

const app = express();
const PORT = 3000;
const MONGO_URI =
  'mongodb+srv://soeun1219:kPNU11Dqwq19i66F@climbing.fblxaq3.mongodb.net/?retryWrites=true&w=majority';

mongoose
  .connect(MONGO_URI, {
    // sets the name of the DB that our collections are part of
    dbName: 'my_climb_log',
  })
  .then(() => console.log('DB connected'))
  .catch((err) => console.log('DB CONNECTION ERROR: ', err));

// Express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//handle requests for static files
app.use('/dist', express.static(path.join(__dirname, '../dist')));

//root
app.get('/', (req, res) => {
  return res.sendFile(path.resolve(__dirname, '../index.html'));
});

//Workout router
app.use('/workout', workoutRouter);

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '../index.html'), function (err) {
    if (err) {
      res.status(500).send(err);
    }
  });
});
// catch-all route handler for any requests to an unknown route
app.use((req, res) =>
  res.status(404).send("This is not the page you're looking for...")
);

//Global error handling
app.use((err, req, res, next) => {
  const defaultErr =
    // defaultErr object
    {
      log: 'Express error handler caught unknown middleware error',
      status: 500,
      message: { err: 'An error occurred' },
    };
  const errorObj = Object.assign(defaultErr, err);
  console.log(errorObj.log);
  res.status(errorObj.status).json(errorObj.message);
});

//Start serer
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;
