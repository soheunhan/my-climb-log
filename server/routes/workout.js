const express = require('express');
const workoutController = require('../controllers/workoutController');

const router = express.Router();

router.get('/history', workoutController.getWorkout, (req, res) =>
  res.status(200).json(res.locals.workouts)
);

router.get('/session', workoutController.getSession, (req, res) =>
  res.status(200).json(res.locals.sessions)
);

router.post('/new', workoutController.addWorkout, (req, res) => {
  return res.status(200).json(res.locals.workout);
});

router.patch('/new', workoutController.updateSession, (req, res) => {
  return res.status(200).json(res.locals.session);
});

module.exports = router;
