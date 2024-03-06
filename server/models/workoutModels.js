const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  level: Number,
  wallType: String,
  crimp: Boolean,
  sloper: Boolean,
  jug: Boolean,
  pinch: Boolean,
  pocket: Boolean,
  sent: Boolean,
  date: { type: Date, default: Date.now },
});

const Workout = mongoose.model('workouts', workoutSchema);
const sessionSchema = new Schema({
  attempts: Number,
  sends: Number,
  peak: Number,
  date: String,
});

const Session = mongoose.model('sessions', sessionSchema);

module.exports = { Workout, Session };
